// service-worker.js

// সেভ ইভেন্ট লিস্টেনার
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
});

// একটিভ ইভেন্ট লিস্টেনার
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
});

// ফেচ ইভেন্ট লিস্টেনার
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching...');
  event.respondWith(fetch(event.request));
});
