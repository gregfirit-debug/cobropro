import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-6">
        <div className="inline-block rounded-full border px-3 py-1 text-sm">
          CobroPro
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Cobrá mejor. Ordená mejor. Crecé más.
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          Una app simple para organizar cobros, clientes y seguimiento en un solo lugar.
        </p>

        <div className="flex gap-3">
          <Link
            href="/charges"
            className="rounded-md bg-black px-4 py-2 text-white"
          >
            Ver cobros
          </Link>
        </div>
      </div>
    </main>
  )
}