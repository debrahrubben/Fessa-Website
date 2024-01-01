const cacheName = 'fessa-app-cache-v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    // Add other files and assets to cache
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
