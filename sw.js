const CACHE_NAME = 'gn-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => {
            // إذا كان الملف مخزناً (كاش)، اعرضه فوراً
            if (res) return res;

            // إذا لم يكن مخزناً، اطلبه من الإنترنت واحفظه "ذاتياً"
            return fetch(e.request).then(response => {
                // شرط الحفظ التلقائي: أي ملف نوعه "صورة" يتم تخزينه فوراً
                if (response && response.status === 200 && e.request.destination === 'image') {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, copy);
                    });
                }
                return response;
            });
        })
    );
});
