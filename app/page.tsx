export default function HomePage() {
  return (
    <main className="space-y-16 py-10">
      <section className="rounded-3xl border bg-white px-8 py-14 shadow-sm md:px-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-600">
            Gestión simple de cobros
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Cobrá mejor.
            <br />
            Ordená mejor.
            <br />
            Crecé más.
          </h1>

          <p className="max-w-2xl text-lg text-gray-600">
            Centraliza clientes, cobros y seguimiento en una sola app. Menos
            desorden, más control y mejor imagen frente a tus clientes.
          </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
  <a
    href="/get-started"
    className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-medium text-white"
  >
    Empezar ahora
  </a>

  <a
    href="/dashboard"
    className="inline-flex items-center justify-center rounded-xl border bg-white px-6 py-3 text-sm font-medium text-gray-900"
  >
    Ver dashboard
  </a>
</div> 
      </section>
    </main>
  )
}