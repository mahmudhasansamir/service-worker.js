// service-worker.js

const cacheName = 'hasantechnology-cache-v1';
const cacheFiles = [
  '/',
  '/index.html',
  '/path/to/your/file1.css',
  '/path/to/your/file2.js',
  '/path/to/your/image.png',
  // অন্যান্য ফাইল এবং রাউট সংযোজন যেগুলি আপনি ক্যাচ করতে চান
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheFiles))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
