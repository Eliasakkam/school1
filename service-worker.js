self.addEventListener('install', event => {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', event => {
  // ممكن تضيف كاشينق لاحقاً، الآن بس يخليه يتسجل
});
