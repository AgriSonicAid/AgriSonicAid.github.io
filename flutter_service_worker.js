'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a7e91eb6dca4aeb34d0b1173d5e0a299",
"splash/img/light-2x.png": "6129726306363aab53a72f0a2efcf688",
"splash/img/dark-4x.png": "b5416c91de573e60867be1617f482121",
"splash/img/light-3x.png": "c735ee23d56e6cceba19ce478c0c7180",
"splash/img/dark-3x.png": "c735ee23d56e6cceba19ce478c0c7180",
"splash/img/light-4x.png": "b5416c91de573e60867be1617f482121",
"splash/img/dark-2x.png": "6129726306363aab53a72f0a2efcf688",
"splash/img/dark-1x.png": "87ad94678a1de7013e2de751479f6fee",
"splash/img/light-1x.png": "87ad94678a1de7013e2de751479f6fee",
"index.html": "45f4a1bf9ad01f2d13d82d5a3813f8ca",
"/": "45f4a1bf9ad01f2d13d82d5a3813f8ca",
"main.dart.js": "82aeceea97ce9fdc8bf1ea124c4b9057",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b38a67094a9135f81bc6905516f3f02",
"assets/AssetManifest.json": "c210be53b7c8db2079b3e55f8f3ca8e5",
"assets/NOTICES": "5120cc974f3f3aa12e6395aad317541b",
"assets/FontManifest.json": "f5a6556b0eee69a61530aa8891073676",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "97650ad3560a8b49eed6403cf59e685d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "11e60cd918463b34aab5873b86c12064",
"assets/fonts/MaterialIcons-Regular.otf": "dc378012381cadb186dcc8c101bb699a",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/buyer.png": "6a8548054268f909473792e8416f1406",
"assets/assets/images/chatbot2.png": "5a63c42c12ed2f8f06d93e543e7626cb",
"assets/assets/images/blank.png": "cf89e8e6daa9dabc8174c303e4d53d3a",
"assets/assets/images/prediction.png": "eb2bc2ced255cb183b38e257bc0c10e3",
"assets/assets/images/hand-holding-seeding.png": "9b0cf7ad6c15e053edd76e4ebe18d3bc",
"assets/assets/images/Life%2520Lines.jpeg": "3cc00e4dd6800f47d3cf7b3b50be3ed8",
"assets/assets/images/crop-information.png": "479c99bfe02ebe4ed623f4ac193f2e48",
"assets/assets/images/nutrient.png": "7c63d5f8d3812af8cf539cefac6276b5",
"assets/assets/images/logo.png": "272e10de0b140a575b0a4e0cde7be70f",
"assets/assets/images/profile.jpeg": "728f1da6d887121e893042590ad4af49",
"assets/assets/images/chatbot.png": "7c81e54467d19da7a34fd72335ea76c1",
"assets/assets/Crop%2520Information.csv": "b3ea314db61d6760bd65fda741362a2a",
"assets/assets/logo/logo%2520with%2520background2.jpg": "7c09f2c428b50f3d36c4bf4411af9c80",
"assets/assets/logo/logo%2520with%2520background.jpg": "ee392f78b30e9aaf46668047dd1dbb52",
"assets/assets/logo/logo1.png": "d032c75bacf9c1cef65a5f4c94088fd7",
"assets/assets/logo/logo3.png": "14a1392f6f58d2fbbf4efd2d629a80fc",
"assets/assets/logo/logo2.png": "272e10de0b140a575b0a4e0cde7be70f",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
