/**
 * Service Worker
 */

const _version = 'v1';
const cacheName = 'v1';
const cacheList = [
  '/images/1.jpg',
  '/images/2.jpg'
]

const log = msg => {
  console.log(`[ServiceWorker ${_version}] ${msg}`);
}

self.addEventListener('install', event => {
  log('INSTALL');
});
self.addEventListener('activate', event => {
  log('Activate');
});
self.addEventListener('fetch', event => {
  log('Fetch' + event.request.url);
});
