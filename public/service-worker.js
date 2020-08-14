var staticCache = 'weighttracker-static-cache-v5'
var dynamicCache = 'weighttracker-dynamic-cache-v6'

// Assets to always cache
var assets = [
  '/',
  '/index.html',
  '/global.css',
  '/build/bundle.js',
  '/build/bundle.css',
  '/img/icon.png',
  'https://fonts.googleapis.com/css2?family=Questrial&display=swap',
  'https://fonts.gstatic.com/s/questrial/v10/QdVUSTchPBm7nuUeVf70sSFluW44JUcz.woff2',
]

// install event
self.addEventListener('install', (evt) => {
  // evt.waitUntil Delays the event until the Promise is resolved
  evt.waitUntil(
    // Open the cache
    caches.open(staticCache).then((cache) => {
      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching assets')
      return cache.addAll(assets)
    }),
  )
})

// activate event
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache && key !== dynamicCache)
          .map((key) => caches.delete(key)),
      )
    }),
  )
})

// fetch event
self.addEventListener('fetch', (evt) => {
  if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
    evt.respondWith(
      caches.match(evt.request).then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCache).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone())
              return fetchRes
            })
          })
        )
      }),
    )
  }
})
