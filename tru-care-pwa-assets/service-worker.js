
self.addEventListener('install', function (event) {
  console.log('[TRU Care] Service Worker installed');
});

self.addEventListener('activate', function (event) {
  console.log('[TRU Care] Service Worker activated');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
