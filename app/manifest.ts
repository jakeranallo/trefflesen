import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trefflesen",
    short_name: "Trefflesen",
    description: "A focused reading list application for tracking articles and resources",
    start_url: "/",
    display: "standalone",
    background_color: "#020617", // slate-950
    theme_color: "#00AAFF", // Exact color from the icon
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
