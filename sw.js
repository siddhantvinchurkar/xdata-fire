/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "CODE_OF_CONDUCT.md",
    "revision": "c705391b8834a912453248e4d16b2c53"
  },
  {
    "url": "components/index.clouds.html",
    "revision": "11ce7645003d66407eb9adad883545c7"
  },
  {
    "url": "components/index.skeleton.html",
    "revision": "b80e623e8a24f2fa2954ff63be5d4c73"
  },
  {
    "url": "CONTRIBUTING.md",
    "revision": "0ad491b97bb7ffe6f4c92d91f636945b"
  },
  {
    "url": "CONTRIBUTING.md~",
    "revision": "0ad491b97bb7ffe6f4c92d91f636945b"
  },
  {
    "url": "docs/index.html",
    "revision": "c8f462ba9b9803396b757061b2ed1413"
  },
  {
    "url": "firebase.json",
    "revision": "9f8832c4a73ffb7c677784d0bd4e486f"
  },
  {
    "url": "firestore.indexes.json",
    "revision": "7c66f9c17626f849c92bd1c0caffd514"
  },
  {
    "url": "firestore.rules",
    "revision": "fc029dbd9cab19099a150474dc715e1a"
  },
  {
    "url": "functions/index.js",
    "revision": "10be3e3e7e0ea62663880569677cc5c1"
  },
  {
    "url": "functions/package.json",
    "revision": "585f39bf3f85ad4b079bed67efcb5bb6"
  },
  {
    "url": "images/icons/favicon.ico",
    "revision": "3f850607d40aa85de2b89ed3385d5265"
  },
  {
    "url": "images/icons/favicon.png",
    "revision": "3b19f45f20ce319ecabe8d26e433af71"
  },
  {
    "url": "images/logos/github_logo_white.png",
    "revision": "6a751cad1cf3b12360fb7ef41bcd3c36"
  },
  {
    "url": "index.html",
    "revision": "466818310beb6788f5c5af2adbd0e0ea"
  },
  {
    "url": "index.html~",
    "revision": "466818310beb6788f5c5af2adbd0e0ea"
  },
  {
    "url": "index.skeleton.html",
    "revision": "07336ed61a1605b65fac6297dc307dc8"
  },
  {
    "url": "main.js",
    "revision": "b357a6492548a2dbcfc3355daf59b855"
  },
  {
    "url": "main.js~",
    "revision": "b357a6492548a2dbcfc3355daf59b855"
  },
  {
    "url": "main.min.css",
    "revision": "48a25eea7cee64719efde4f2ece26ddc"
  },
  {
    "url": "main.min.js",
    "revision": "ef30e7660d0ec8347d3f3dd5b20db741"
  },
  {
    "url": "main.skeleton.js",
    "revision": "bc98fdf2f28639034048fc0c8cc1ec12"
  },
  {
    "url": "manifest.json",
    "revision": "fe4db8ffc28a54d58d22f0af50a1fc7d"
  },
  {
    "url": "manifest.json~",
    "revision": "fe4db8ffc28a54d58d22f0af50a1fc7d"
  },
  {
    "url": "README.md",
    "revision": "d620a49d7e43eea14288a0618dc00de6"
  },
  {
    "url": "README.md~",
    "revision": "d620a49d7e43eea14288a0618dc00de6"
  },
  {
    "url": "storage.rules",
    "revision": "166a8a900000c71f8e5a5cb4247fa6d4"
  },
  {
    "url": "sw.js~",
    "revision": "5fd78c091ade547c75314d71addba932"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
