
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js")
	.then(function(registration) {
		console.log("service worker registered!");
	})
	.catch(function(error) {
		console.log("service worker registration failed");
	});
}
