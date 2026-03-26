import "./globals.css"

export const metadata = {
  title: "CobroPro",
  description: "MVP",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="mx-auto w-full max-w-6xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}