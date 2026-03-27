export const revalidate = 60

import Link from "next/link"
import { prisma } from "@/lib/prisma"

export default async function ClientsPage() {
  const userEmail = "gregfirit@gmail.com"

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      clients: {
        include: {
          _count: {
            select: { charges: true },
          },
        },
      },
    },
  })

  if (!user) {
    return (
      <div className="rounded-lg border bg-white p-4 text-sm text-red-600">
        No se encontró el usuario en la base de datos.
      </div>
    )
  }

  const clients = user.clients ?? []

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Clientes</h1>

        <Link
          href="/clients/new"
          className="rounded bg-black px-4 py-2 text-sm text-white"
        >
          + Nuevo cliente
        </Link>
      </div>

      {clients.length === 0 && (
        <div className="rounded-lg border p-4 text-sm text-gray-600">
          <p className="mb-2">Todavía no tienes clientes.</p>
          <p>👉 Crea tu primer cliente y luego haz clic en su nombre para agregar cobros.</p>
        </div>
      )}

      <ul className="space-y-2">
        {clients.map((client) => (
          <li key={client.id} className="rounded border p-3">
            <div className="flex items-center justify-between">
              <Link href={`/clients/${client.id}`} className="font-medium">
                {client.name}
              </Link>

              <Link
                href={`/charges/new?clientId=${client.id}`}
                className="text-sm text-gray-600 underline"
              >
                + Cobro
              </Link>
            </div>

            {client.email && <div>{client.email}</div>}

            {client.phone && (
              <div className="mt-2 space-y-1">
                <div className="text-sm text-gray-700">{client.phone}</div>

                <div className="flex items-center gap-3">
                  <a
  href={`https://wa.me/${client.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola ${client.name}, te escribo por un cobro pendiente.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-medium text-green-600 hover:underline"
>
  💬 WhatsApp
</a>
                  <a
                    href={`tel:${client.phone.replace(/\s+/g, "")}`}
                    className="text-xs text-gray-500 hover:underline"
                  >
                    Llamar
                  </a>
                </div>
              </div>
            )}

            <div className="mt-2 text-sm text-gray-500">
              {client._count.charges} cobros
            </div>

            {client._count.charges > 0 && (
              <div className="mt-1 text-xs text-gray-400">
                No se puede eliminar mientras tenga cobros
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}