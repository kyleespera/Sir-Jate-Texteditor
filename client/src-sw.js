const {
  warmStrategyCache,
  CacheFirst,
  StaleWhileRevalidate,
} = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

// Precaches files.
function setupPrecaching() {
  precacheAndRoute(self.__WB_MANIFEST);
}

// Returns a CacheFirst strategy for page caching.
function createPageCacheStrategy() {
  return new CacheFirst({
    cacheName: 'page-cache',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxAgeSeconds: 30 * 24 * 60 * 60 }), // 30 Days
    ],
  });
}

// Warms the cache with frequently used URLs.
function warmCache(urls, strategy) {
  warmStrategyCache({ urls, strategy });
}

// Registers route with navigation request strategy.
function registerNavigationRoute(strategy) {
  registerRoute(({ request }) => request.mode === 'navigate', strategy);
}

// Registers route for caching assets like JS, CSS, and worker scripts.
function registerAssetsCache() {
  registerRoute(
    ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    new StaleWhileRevalidate({
      cacheName: 'asset-cache',
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );
}

// Setting up the service worker caching strategies.
function setupCachingStrategies() {
  const pageCacheStrategy = createPageCacheStrategy();
  setupPrecaching();
  warmCache(['/index.html', '/'], pageCacheStrategy);
  registerNavigationRoute(pageCacheStrategy);
  registerAssetsCache();
}

// Initialize the service worker caching strategies.
setupCachingStrategies();
