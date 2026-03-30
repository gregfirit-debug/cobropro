export default function GetStartedPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-bold">Cómo usar CobroPro</h1>

      <div className="space-y-4 text-gray-700">
        <p>1️⃣ Crea tus clientes</p>
        <p>👉 Guarda nombre, email y teléfono.</p>

        <p>2️⃣ Agrega cobros</p>
        <p>👉 Define monto y fecha de vencimiento.</p>

        <p>3️⃣ Haz seguimiento</p>
        <p>👉 Ve qué está pendiente, vencido o pagado.</p>

        <p>4️⃣ Cobra más fácil</p>
        <p>👉 Contacta directo por WhatsApp o teléfono.</p>
      </div>

      <a
        href="/dashboard"
        className="inline-block mt-6 rounded bg-black px-6 py-3 text-white"
      >
        Ir al dashboard
      </a>
    </main>
  )
}