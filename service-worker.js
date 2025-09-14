// Simple service worker for offline caching
const CACHE_NAME = "ffr-cache-v1";
const urlsToCache = [
  "farm-field-recorder.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "https://unpkg.com/leaflet/dist/leaflet.css",
  "https://unpkg.com/leaflet/dist/leaflet.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
