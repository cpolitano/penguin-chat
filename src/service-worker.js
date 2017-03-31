// service worker

var cacheName = "cache-x1";
var pathsToCache = [
	"/",
	"/src/style.css",
	"/src/app.js"
];

self.addEventListener("install", function(e) {
	e.waitUntil(
		caches.open(cacheName)
		.then(function(cache) {
			return cache.addAll(pathsToCache);
		})
		.catch(function(err) {
			console.log("cache failed", err);
		})
	);
});

self.addEventListener("fetch", function(e) {
	e.respondWith(
		fetch(e.request)
		.catch(function() {
			return caches.open(cacheName)
				.then(function(cache) {
					return cache.match(e.request);
				})
		})
	);
});
