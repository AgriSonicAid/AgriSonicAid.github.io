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
"index.html": "109509b1d402c1b681eaa3bfd66662db",
"/": "109509b1d402c1b681eaa3bfd66662db",
"main.dart.js": "e60282e305632e9400f51951a0efac76",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b38a67094a9135f81bc6905516f3f02",
".git/config": "7db39f728c3a78b0817f42b74a2f7a30",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/b129d1d8064b4d604da106853ab4915a2d54f0": "d89bb809bf2830f9dc3f941d0690ddff",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/e5ee70b615fde4b1fea62ea6f6dc0aa3e30230": "9a56c3498d0a303430b024220eb7ece8",
".git/objects/34/6450a9a9451b401380ff318c6bfde2c41a4c1a": "f43997e764a199213df4f9dbe629cbea",
".git/objects/33/3ed849ac2f52961890600c9a6f51da90d987fa": "c926a9759cb699836743d89ac70fc872",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/8f8092b64bc76d931739cb408d61b8c37acca7": "017315ee30d712fef5b0b96aeb85f75b",
".git/objects/ac/506e9c22fd4ed121cd40bfeeecb0b0bc85cb13": "dc3be698d6b4aec962530acec1f50bb3",
".git/objects/ac/9bb2bbf0b9b0ac32c004959833bb99c38f7264": "fbbebb52596dc65c9f8f0c9f7eca5379",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b3/1e5a26a1b3274875196b4e3e740ba4e4f26f30": "fcf8201122860ec73c37421040aea2b0",
".git/objects/da/896c74e64eb83faba78dfb41137435c8ce28d9": "05559f3e17f6c23a8944314351c7c39d",
".git/objects/d6/a3ae8cb2fd3a87ddf1096f081d6b55a4b291b6": "6266172bd9bbbc165007d0325ff9eb52",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fdaefd5d109aa1a8c994b688a9eb75d5a624d5": "8f98d17418bdf8726352f001ddcd6f1d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/3f9029e0e5b33919b0e3c402f27c985147a750": "6ac95b186024f63a55a2006fa0b4e3b8",
".git/objects/f5/aa0396a0f39b6a122d28b9f8d44f17ec83c947": "809105c1632f401be89f2007a17d612e",
".git/objects/cf/dff72918e6a7677c42cb58a7f034835d489f74": "71f41b04e8b5bce2847e1497cf62558e",
".git/objects/ca/4272bea9514c58df7d69026d55a201ae73f5f0": "72ed374e083c1b508f3f78f55a7b8dd7",
".git/objects/fe/a8f9c3e0645e936ad2bd503e8f7dcb9cb862cc": "29a776462838510774498a7f677543d6",
".git/objects/fe/9853afb4fc2e2c166cf1fe56af2dcca6eaa537": "2777afe28d81c2c5400a832d67376c69",
".git/objects/fb/6d259e897741317453890e6335da906a807097": "f51642fd1e460706022608d9fecaaad2",
".git/objects/20/0922fd5edbd2e76485761eeaad1a9480f90c3a": "4eb39d425dfb7c547bb604bc51dfc33a",
".git/objects/27/305faaaabc49eb32bd4849e878eb02d0b78b87": "7d39411a64d881fd84ff6ae2777a8ee3",
".git/objects/4b/46193c6a5380bff5a35f01b711fc6f6cf58d86": "2054ea686db0f774d5b54ec477a8e9b6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1f/6492a89fc427629439a45a1de87abce55ad0ac": "02c57a6da61c1781c3a4f27561314445",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/5e03c27a8dde30672325057eabe8e703f7c532": "caee84e1936e5e4ecc3fbad2b5486dac",
".git/objects/86/c093012f923a30cd8b2343995389e0563bf280": "273a3b73e6d173ecad7bb3425da859ba",
".git/objects/72/1d74f2e0e009f541b3d26bb9852fb8e485d039": "cca3d97da836ed26d0c92d4d7f9c7dd5",
".git/objects/43/5a98d2bad0372a436ffb9ad1456a8c03fe4513": "ef1b1b8a47185f840b13107b472b4c0d",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/289a01568548ea6841ea82e0bf4993bc71f117": "a0742925661f2116a3766f9bd0e722f5",
".git/objects/00/aef6de7c9f09c8ddbfcbd8a33c2bf0a7b333f0": "8571e24335f38bcad52e91af3dc00d53",
".git/objects/00/41ae4f417cb310a553a2461d6ef6694ebf1cc7": "f122943e01c741fd40b9a734ac435633",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/792f576dc8f9545946a8a5f551a8d8e4f1eb7d": "a1c539de22530d567103be284b68cd1f",
".git/objects/54/7714af555da09602073b21d837d0b593168d86": "b20bf10b86ec5c4bf4719b1aa463b028",
".git/objects/53/b55029d592d30f812349196269efecb9009a9e": "f334f2a41abdaae082ebccea82ff303c",
".git/objects/37/cacfbdc00d6311518c1e9f4499029575f97608": "b7000e27aeb4e08bf0e48f408a848bea",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/d801956d67500166c2f8dd06faf2453fa376d4": "c202c11b0b6aa104ecf26cb1caa488f9",
".git/objects/99/ce5c0753cc24c3754dde4b6a7d316933f400f2": "a454e87c1b6bac90a08fd50bad23efaa",
".git/objects/97/d49033514fba64c92c3efab805faee3d11636c": "a079d3d066aef8c1fa3a0e883db02634",
".git/objects/63/94f6519d1b2ee12ba26923c9b86c0bac599dcf": "9644c545a749338ba0147261275d6cbd",
".git/objects/64/411c02be58f0d99f261498c178998c8670bd03": "319c5cb4ca0a6cb44b726321c232db5d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d2/bf1f52156f400824cdaf2f43f66b2d0778d74c": "ee2bd6ba10b50e9632521a863539618a",
".git/objects/af/ca5fb172ff973f8ba2fb6cce7624294d354c2d": "9de474fb49768a740535a87415abe061",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/18bbc1de2974178886a65dc07dbf35f5d4154f": "56109cf88f925bc52df017ef3b9bde83",
".git/objects/ef/86aa420944c03287fcaec6b261586030658c99": "969b3f65f57d7376484e5efcfe5cb584",
".git/objects/c3/dd12096894eadfe90e95e77eb0baa2d5dc7c54": "546266fc7803be54c569ad9edec750ab",
".git/objects/e1/72ffd4d0399d67ae972181c82e5cd27e216fe9": "52ecd06a9416cbb098b4fd5c07e3654c",
".git/objects/cd/14108a5c84251f6c81766a9feee6713b4d842d": "9552145fe1df07810d3e0879158b414a",
".git/objects/f0/bcf786ea35431ea8f7cbc693163d902c457bab": "14386118342e9c0c4e0b44ffa7a0995b",
".git/objects/e8/cedcfc48dea69f7b539347043d2b769b45e02a": "a08223f5a4cd047f95c00a26fd1762ef",
".git/objects/fa/6059c4b3e71e6c3ec0ca1c0633206d4020be2e": "426ca2d052ead755d5ef1b370af5dd16",
".git/objects/c5/ea569ee576d7ea6bf3086b5456f64b09550016": "e935deaca820bf4c2daf4049943ab710",
".git/objects/e7/f9d02818a6a3d545369449c7d707b980eab57a": "f09e78fe066c25cef6956ea4e3e1efd0",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/cb/f931436d0bd93bdd50ec2db4ecec306fc9d78e": "be74a33ff6b8bc8c8c5e4cc838f46ddb",
".git/objects/cb/99eb6a6ee66dedb2e6472b8efcee5aac5c48f1": "0b76e1b85735d86debd5725b744cb1b1",
".git/objects/e0/eb965db0002813ccd1c96ef05603b9dabd0ac5": "ba3635a9dba45ce3800c33801e67ee58",
".git/objects/46/d2014a5cc91547a918fc253af6c4a6815b6bfc": "88b9e1c4737c13b3a466d9289be5b7c1",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/1b/f2cc4e8e64695ca661b33c5a8160932b00526b": "9ad4df5cb4af760b847e40e5cb583b7f",
".git/objects/1b/1d4fca375b540820c79ac4128ed635c57e57b2": "7a0385e49678c5d6052caed4dbf04011",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1e/0bc43823920bca477ae0e609a969e2d58c09be": "71c17bbb1f174000319b107ad215d78c",
".git/objects/1e/86484e01fcefe39c8ff6c35542dce8a7170be7": "761a77b4907bb878cf65122f96838c3d",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/68faedc8505bda37042393e9234ae872fc1a20": "c788e24241f3be8a5119d10cc6d3b4ca",
".git/objects/15/676db0f97d19f2684e3b7c6d2d6d115eed7096": "41ea6eb7161298c93b77c0fe2614ed8f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/d4a27e78cd646797a04bb57c54de469aaa5a13": "c313e8bee84654eaae9c346b98b67205",
".git/objects/40/5b921b3976ed11e362af43b1ce7e2476f935ce": "82686bf95d1404a18279ec348f1cfbe1",
".git/objects/78/41cbacc49ad68456d3c629bc7f121a67e26dc6": "c1a535be058b470eb65817df19a5edef",
".git/objects/8b/233524452f7bad83dda4bd5a9c4812af0620c3": "67cf391051b7a1b28f41eaa82630af24",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/ba6c9ccd6f5359c4b1fecfd28a60b03a34b36d": "2aaf630c09929b2e501138e8ce5a2d66",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cecdc5f4cf623693060d19f75ee6cb8a",
".git/logs/refs/heads/main": "cecdc5f4cf623693060d19f75ee6cb8a",
".git/logs/refs/remotes/origin/main": "90bfbaf6b429ea0f88a9f2251090f594",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fd1a39712af1736a433e805e5b83422c",
".git/refs/remotes/origin/main": "8f5c84ed15938d41299721b14fbae898",
".git/index": "5f85acd36925e5294a60acecb81b1355",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "47d31ce2e60c4dffa3e45035fbe9a58b",
"assets/AssetManifest.json": "c05f6e2143a60e0164176c6fe43ac45f",
"assets/NOTICES": "93acd4f558b4e10a3b4551d580d97455",
"assets/FontManifest.json": "f5a6556b0eee69a61530aa8891073676",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "97650ad3560a8b49eed6403cf59e685d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7bde7267e8e4e49769ceafdba4ba260c",
"assets/fonts/MaterialIcons-Regular.otf": "39d4fb434b91657bd4a78d2d0af7b5c5",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/buyer.png": "6a8548054268f909473792e8416f1406",
"assets/assets/images/blank.png": "cf89e8e6daa9dabc8174c303e4d53d3a",
"assets/assets/images/prediction.png": "eb2bc2ced255cb183b38e257bc0c10e3",
"assets/assets/images/hand-holding-seeding.png": "9b0cf7ad6c15e053edd76e4ebe18d3bc",
"assets/assets/images/Life%2520Lines.jpeg": "3cc00e4dd6800f47d3cf7b3b50be3ed8",
"assets/assets/images/crop-information.png": "479c99bfe02ebe4ed623f4ac193f2e48",
"assets/assets/images/nutrient.png": "7c63d5f8d3812af8cf539cefac6276b5",
"assets/assets/images/logo.png": "272e10de0b140a575b0a4e0cde7be70f",
"assets/assets/images/profile.jpeg": "728f1da6d887121e893042590ad4af49",
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
