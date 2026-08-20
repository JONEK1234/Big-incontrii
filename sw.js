/**
 * Service Worker per PWA Smart Redirect
 * Generato automaticamente da PWA Builder
 */
const CACHE_NAME = 'smart-redirect-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './cover.jpg',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Salvataggio risorse offline...');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});