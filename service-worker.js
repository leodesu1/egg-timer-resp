self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('egg-timer-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './alarm.wav',
        './background.png',
        './icon.png',
        './service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
