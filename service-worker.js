self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('quiz-tj').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/quiz-biblique.html',
      '/quiz-biblique-500.html',
      '/quiz-completion.html',
      '/manifest.json'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});