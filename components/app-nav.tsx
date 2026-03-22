import Link from "next/link"

export function AppNav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold text-lg">
          CobroPro
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link
            href="/dashboard"
            className="px-3 py-1 rounded hover:bg-gray-100"
          >
            Dashboard
          </Link>

          <Link
            href="/clients"
            className="px-3 py-1 rounded hover:bg-gray-100"
          >
            Clientes
          </Link>

          <Link
            href="/charges"
            className="px-3 py-1 rounded hover:bg-gray-100"
          >
            Cobros
          </Link>

          <Link
            href="/charges/new"
            className="bg-black text-white px-3 py-1 rounded"
          >
            + Nuevo
          </Link>
        </nav>
      </div>
    </header>
  )
}