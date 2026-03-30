export default function GetStartedPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 py-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-600">
          Primeros pasos
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Cómo usar CobroPro
        </h1>

        <p className="max-w-2xl text-gray-600">
          En pocos pasos puedes crear clientes, registrar cobros y hacer
          seguimiento de lo pendiente o vencido.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 text-sm font-medium text-gray-500">PASO 1</div>
          <h2 className="text-xl font-semibold text-gray-900">
            Crea tu primer cliente
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Guarda nombre, email y teléfono para tener toda la información en un
            solo lugar.
          </p>

          <a
            href="/clients"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Ir a clientes
          </a>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 text-sm font-medium text-gray-500">PASO 2</div>
          <h2 className="text-xl font-semibold text-gray-900">
            Registra un cobro
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Define concepto, monto y fecha para controlar qué está pendiente y
            qué ya fue pagado.
          </p>

          <a
            href="/charges"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Ir a cobros
          </a>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 text-sm font-medium text-gray-500">PASO 3</div>
          <h2 className="text-xl font-semibold text-gray-900">
            Mira el estado general
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Desde el dashboard ves cuánto tienes pendiente, cuánto cobraste y
            cuántos cobros están vencidos.
          </p>

          <a
            href="/dashboard"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Ver dashboard
          </a>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 text-sm font-medium text-gray-500">PASO 4</div>
          <h2 className="text-xl font-semibold text-gray-900">
            Cobra más fácil
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Usa WhatsApp o llamada desde la ficha del cliente para contactar más
            rápido y sin salir de la app.
          </p>

          <a
            href="/clients"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Probar contacto
          </a>
        </div>
      </section>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Flujo recomendado
        </h2>

        <div className="mt-4 flex flex-col gap-3 text-sm text-gray-700 md:flex-row md:items-center">
          <div className="rounded-full border px-4 py-2">1. Cliente</div>
          <div className="hidden md:block">→</div>
          <div className="rounded-full border px-4 py-2">2. Cobro</div>
          <div className="hidden md:block">→</div>
          <div className="rounded-full border px-4 py-2">3. Seguimiento</div>
          <div className="hidden md:block">→</div>
          <div className="rounded-full border px-4 py-2">4. Cobrar</div>
        </div>
      </section>
    </main>
  )
}