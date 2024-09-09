self.addEventListener('install', () => {
	console.log('Install event in progress.');
});

self.addEventListener('activate', () => {
	console.log('Activate event in progress.');
	// Take control of the clients as soon as the service worker is activated
	self.clients.claim();
});

self.addEventListener('install', () => {
	// Force the new Service Worker to activate immediately and take control of the page
	self.skipWaiting();
});

// Fetch event: Respond with cached data or fetch from network
self.addEventListener('fetch', event => {
	// update the version, to send updates in service worker to invalidate cache
	const CACHE_NAME = 'countries-cache-v6';
	event.respondWith(
		caches
			.match(event.request)
			.then(cachedResponse => {
				// Return cached response if found
				if (cachedResponse) {
					return cachedResponse;
				}
				// Otherwise, fetch from network
				// TODO can we debounce here ?
				return fetch(event.request).then(networkResponse => {
					// Cache the response for future use
					return caches.open(CACHE_NAME).then(cache => {
						cache.put(event.request, networkResponse.clone());
						return networkResponse;
					});
				});
			})
			.catch(error => {
				// Handle errors
				console.error('Fetch failed:', error);
				throw error;
			}),
	);
});
