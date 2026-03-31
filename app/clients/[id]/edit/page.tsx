import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

async function updateClient(formData: FormData) {
  "use server"

  const id = formData.get("id") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  await prisma.client.update({
    where: { id },
    data: {
      name,
      email: email || null,
      phone: phone || null,
    },
  })

  redirect(`/clients/${id}`)
}

export default async function EditClientPage({ params }: Props) {
  const { id } = await params

  const client = await prisma.client.findUnique({
    where: { id },
  })

  if (!client) {
    return <div>Cliente no encontrado</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Editar cliente</h1>

      <form action={updateClient} className="space-y-4 max-w-md">
        <input type="hidden" name="id" value={client.id} />

        <div>
          <label className="block text-sm mb-1">Nombre</label>
          <input
            name="name"
            defaultValue={client.name}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            defaultValue={client.email || ""}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Teléfono</label>
          <input
            name="phone"
            defaultValue={client.phone || ""}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  )
}