const CACHE_NAME = 'andriizil-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/experience.html',
  '/skills.html',
  '/certifications.html',
  '/contacts.html',
  '/css/styles.css',
  '/js/navigation.js',
  '/js/particles.js',
  '/assets/profile-photo.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 