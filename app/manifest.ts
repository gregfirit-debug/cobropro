import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CobroPro",
    short_name: "CobroPro",
    description: "Gestión de clientes y cobros",
    start_url: "/",
    display: "standalone",
    background_color: "#22c55e",
    theme_color: "#22c55e",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}