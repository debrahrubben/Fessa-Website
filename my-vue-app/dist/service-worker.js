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
    if (event.request.url.includes('/browser-sync/')) {
        return;
    }
    event.respondWith(
        fetch(event.request).catch((error) => {
            console.error('Failed to fetch:', error);
            // You can customize the response for failed fetches here
            return new Response('Failed to fetch resource', { status: 500 });
        })
    );
});

