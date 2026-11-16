/* Keeps a copy of the app on the phone so it opens without a connection.
   Network first: when online you always get the newest files. */
const CACHE = "rooted-v1";
const FILES = ["./", "index.html", "styles.css", "content.js", "app.js", "manifest.webmanifest", "icons/icon-192.png",
  "fonts/newsreader-latin-wght-normal.woff2", "fonts/newsreader-latin-wght-italic.woff2",
  "fonts/source-sans-3-latin-wght-normal.woff2", "fonts/source-sans-3-latin-wght-italic.woff2"];

self.addEventListener("install", (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))); });
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || caches.match("index.html")))
  );
});
