import { deleteClient } from "../actions"
import Link from "next/link"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"

type ClientPageProps = {
  params: Promise<{ id: string }>
}

async function markChargeAsPaid(formData: FormData) {
  "use server"

  const chargeId = formData.get("chargeId") as string
  const clientId = formData.get("clientId") as string

  await prisma.charge.update({
    where: { id: chargeId },
    data: { paid: true },
  })

  redirect(`/clients/${clientId}`)
}

export default async function ClientPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
const { error } = await searchParams
  const client = await prisma.client.findUnique({
    where: { id },
    include: {
      charges: {
        orderBy: [{ paid: "asc" }, { dueDate: "asc" }],
      },
    },
  })

  if (!client) {
    return <div>Cliente no encontrado</div>
  }

  const pendingTotal = client.charges
    .filter((c) => !c.paid)
    .reduce((sum, c) => sum + c.amount, 0)

  const paidTotal = client.charges
    .filter((c) => c.paid)
    .reduce((sum, c) => sum + c.amount, 0)

  const totalAmount = client.charges.reduce((sum, c) => sum + c.amount, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{client.name}</h1>
{error === "pending" && (
  <p className="text-red-600 text-sm mt-2">
    No podés eliminar: hay cobros pendientes
  </p>
)}
        <form action={deleteClient.bind(null, client.id)}>
          <button
            type="submit"
            className="mt-3 text-sm text-red-600 hover:underline"
          >
            Eliminar cliente
          </button>
        </form>

        <Link
          href={`/clients/${client.id}/edit`}
          className="inline-block mt-2 text-sm text-gray-600 underline"
        >
          Editar cliente
        </Link>

        <div className="mt-2">Email: {client.email || "Sin email"}</div>
        <div>Teléfono: {client.phone || "Sin teléfono"}</div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Cobros ({client.charges.length})
          </h2>

          <Link
            href={`/charges/new?clientId=${client.id}`}
            className="bg-black text-white px-3 py-2 rounded text-sm"
          >
            + Nuevo cobro
          </Link>
        </div>

        <div className="text-sm text-gray-600 mb-3 space-y-1">
          <div>Total: ${totalAmount}</div>
          <div>Pendiente: ${pendingTotal}</div>
          <div>Cobrado: ${paidTotal}</div>
        </div>

        <ul className="space-y-2 mt-3">
          {client.charges.map((charge) => (
            <li key={charge.id} className="border p-4 rounded-lg shadow-sm">
              <div className="font-medium">{charge.concept}</div>
              <div className="text-lg font-semibold">${charge.amount}</div>

              <Link
                href={`/charges/${charge.id}/edit`}
                className="inline-block text-sm text-gray-600 underline mr-3"
              >
                Editar
              </Link>

              {!charge.paid && (
                <form action={markChargeAsPaid} className="mt-2">
                  <input type="hidden" name="chargeId" value={charge.id} />
                  <input type="hidden" name="clientId" value={client.id} />
                  <button
                    type="submit"
                    className="bg-black text-white px-3 py-1 rounded"
                  >
                    Marcar como pagado
                  </button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}