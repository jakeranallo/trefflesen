export default function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator && window.workbox !== undefined) {
    const wb = window.workbox

    // Cache page navigations
    wb.routing.registerRoute(
      ({ request }) => request.mode === "navigate",
      new wb.strategies.NetworkFirst({
        cacheName: "pages-cache",
        plugins: [
          new wb.expiration.ExpirationPlugin({
            maxEntries: 50,
          }),
        ],
      }),
    )

    // Cache CSS, JS, and Web Worker requests with a Stale-While-Revalidate strategy
    wb.routing.registerRoute(
      ({ request }) =>
        request.destination === "style" || request.destination === "script" || request.destination === "worker",
      new wb.strategies.StaleWhileRevalidate({
        cacheName: "assets-cache",
        plugins: [
          new wb.expiration.ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          }),
        ],
      }),
    )

    // Cache images with a Cache-First strategy
    wb.routing.registerRoute(
      ({ request }) => request.destination === "image",
      new wb.strategies.CacheFirst({
        cacheName: "images-cache",
        plugins: [
          new wb.expiration.ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
          }),
        ],
      }),
    )

    // Register the service worker after all custom configurations are set
    wb.register()
  }
}
