export const revalidate = 60

import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export default async function ClientsPage() {
  const session = await auth()
 console.log("SESSION", session)
const userEmail = session?.user?.email

if (!userEmail) {
  return (
    <div className="rounded-lg border bg-white p-4 text-sm text-red-600">
      No hay sesión activa.
    </div>
  )
}

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
          className="bg-black text-white px-4 py-2 rounded text-sm"
        >
          + Nuevo cliente
        </Link>
      </div>

      {clients.length === 0 && (
        <div className="border rounded-lg p-4 text-sm text-gray-600">
          <p className="mb-2">Todavía no tienes clientes.</p>
          <p>
            👉 Crea tu primer cliente y luego haz clic en su nombre para agregar cobros.
          </p>
        </div>
      )}

      <ul className="space-y-2">
        {clients.map((client) => (
          <li key={client.id} className="border rounded p-3">
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
            {client.phone && <div>{client.phone}</div>}

            <div className="text-sm text-gray-500 mt-2">
             {client._count.charges} cobros
            </div>

           {client._count.charges > 0 && (
  <div className="text-xs text-gray-400 mt-1">
    No se puede eliminar mientras tenga cobros
  </div>
)} 
          </li>
        ))}
      </ul>
    </div>
  )
}