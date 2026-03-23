import Link from "next/link"

export function AppNav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/clients" className="text-xl font-bold">
          CobroPro
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/clients" className="px-2 py-1 rounded hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/clients" className="px-2 py-1 rounded hover:bg-gray-100">
            Clientes
          </Link>
          <Link href="/charges" className="px-2 py-1 rounded hover:bg-gray-100">
            Cobros
          </Link>
          <Link href="/account" className="px-2 py-1 rounded hover:bg-gray-100">
            Cuenta
          </Link>
        </nav>
      </div>
    </header>
  )
}