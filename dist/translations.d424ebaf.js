// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"1X5Lm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0cc5ecb6d424ebaf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lPYiT":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"en":{"nav_beranda":"Home","nav_tentang_portal":"About Portal <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_tentang_kami":"About Us","nav_highlight":"Highlights","nav_sdg_commitment":"SDG Commitment","nav_linimasa":"Timeline","nav_guest_stars":"Guest Star","nav_peserta":"Who Can Join?","nav_faq":"FAQ","nav_event":"Event <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_kompetisi":"Competition","nav_seminar":"Seminar","nav_media":"Media <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_blog":"Blog","nav_gallery":"Gallery","nav_kontak_kami":"Contact Us","nav_pendaftaran":"Registration","lang_toggle":"ID","index_page_title_meta":"Portal 7: Empower Digital - Official Landing Page","hero_tagline":"Embrace Your Potential: Empowered by Inspiration, Driven by Innovation","hero_countdown_hari":"Days","hero_countdown_jam":"Hours","hero_countdown_menit":"Minutes","hero_countdown_detik":"Seconds","hero_button_daftar":"Register Now","hero_button_what_is":"What is Portal?","event_started_message":"EVENT HAS STARTED!","about_title":"About Portal 7","about_what_is_portal_title":"What is Portal 7?","about_what_is_portal_p1":"In today\'s ever-evolving digital era, the youth play a crucial role as agents of change. Portal 7 emerges as a space for digital expression and innovation, encouraging participants not only to create visually appealing works but also to embed them with values of sustainability and social impact, in line with the Sustainable Development Goals (SDGs).","about_what_is_portal_p2":"Organized by the Student Executive Board of IPB University\'s Vocational School, Portal 7 serves as a platform to connect ideas, broaden horizons, and shape digital creators who are inspiring, solution-oriented, and ready to face global challenges through the power of innovation.","inspire_framework_title":"INSPIRE Framework: Our Vision & Mission Foundation","inspire_i1":"Inspiration","inspire_i1_desc":"Igniting new ideas and limitless creative spirit.","inspire_n":"Networking","inspire_n_desc":"Building strong and sustainable connections and collaborations.","inspire_s":"Solution","inspire_s_desc":"Encouraging the creation of creative solutions for real challenges.","inspire_p":"Potential","inspire_p_desc":"Exploring and maximizing the unique potential of each individual.","inspire_i2":"Innovation","inspire_i2_desc":"Presenting new breakthroughs in technology and digital creativity.","inspire_r":"Relevance","inspire_r_desc":"Connecting learning with the needs of industry and society.","inspire_e":"Empowerment","inspire_e_desc":"Empowering the young generation to take roles and create positive impacts.","sdg_commitment_title_span":"Our Commitment","sdg_commitment_title_main":"to Global Goals","sdg_commitment_subtitle":"Portal 7 actively champions the Sustainable Development Goals through digital innovation and youth empowerment.","sdg_2_title_1":"Zero","sdg_2_title_2":"Hunger","sdg_2_desc":"Fostering digital solutions and awareness campaigns that contribute to food security, sustainable agriculture, and improved nutrition through innovative projects.","sdg_4_title":"Quality Education","sdg_4_desc":"Providing accessible digital skills training, insightful seminars, and competitive platforms that enhance learning opportunities and promote lifelong education for all.","sdg_7_title":"Affordable & Clean Energy","sdg_7_desc":"Encouraging projects and discussions on leveraging technology for sustainable energy solutions, promoting awareness, and inspiring innovation in clean energy adoption.","wow_guest_star_title_part1":"This Year\'s","wow_guest_star_title_wow":"WOW!","wow_guest_star_title_part2":"Guest Star","wow_guest_star_subtitle":"Get ready to be inspired by a leading voice and innovator of 2025!","mysterious_guest_name":"An Exciting & Mysterious Guest Star!","mysterious_guest_title":"Renowned for groundbreaking work in the creative industry.","mysterious_guest_teaser":"Get ready for an unforgettable session that will spark your imagination and redefine possibilities!","highlight_title_span":"Unlock","highlight_title_main":"Your Digital Superpowers","highlight_subtitle":"This is where creativity ignites and innovation takes flight. Choose your arena, sharpen your skills.","highlight_arena_title_main":"The Arena:","highlight_arena_title_accent":"Compete & Conquer","highlight_arena_intro":"Forge your legend. Showcase your talent. The ultimate digital battleground awaits your genius.","highlight_uiux_title":"UI/UX Design","highlight_uiux_desc":"Sculpt intuitive digital experiences that captivate and convert. Design the future, today.","highlight_poster_title":"Campaign Digital Poster","highlight_poster_desc":"Unleash visual symphonies. Craft posters that don\'t just speak, they roar your message.","highlight_movie_title":"Short Movie","highlight_movie_desc":"Tell world-changing stories in minutes. Direct your vision, captivate hearts, inspire action.","highlight_prize_label":"WIN SPECTACULAR TOTAL PRIZES","highlight_prize_details":"*Plus bragging rights & eternal glory!","highlight_knowledge_title_main":"The Knowledge Hub:","highlight_knowledge_title_accent":"Learn & Elevate","highlight_knowledge_intro":"Ignite your curiosity. Absorb game-changing insights from the masters of digital craft.","highlight_mentorship_span":"Exclusive Mentorship:","highlight_mentorship_text":"Top 10 Finalists Coached by Pros","highlight_pitch_day_span":"Pitch Day Powerhouse:","highlight_pitch_day_text":"Spotlight Your Groundbreaking Vision","highlight_awarding_span":"The Grand Awarding:","highlight_awarding_text":"Celebrate Victory & Witness Brilliance","highlight_future_talks_span":"Future Forward Talks:","highlight_future_talks_text":"Decode Trends with Industry Titans","highlight_button_explore":"Explore Challenges <i class=\\"fas fa-arrow-right btn-icon\\"></i>","highlight_button_discover":"Discover the Lineup <i class=\\"fas fa-arrow-right btn-icon\\"></i>","timeline_title":"Event Timeline","timeline_1_date":"June 10 \u2013 July 10, 2025","timeline_1_event":"Participant Registration","timeline_2_date":"August 12, 2025","timeline_2_event":"Technical Meeting","timeline_3_date":"August 28 \u2013 September 3, 2025","timeline_3_event":"Work Submission","timeline_4_date":"September 4 \u2013 10, 2025","timeline_4_event":"Work Judging Period","timeline_5_date":"September 12, 2025","timeline_5_event":"Top 10 Works Announcement (Semifinalists)","timeline_6_date":"September 13 \u2013 15, 2025","timeline_6_event":"Coaching & Top 10 Presentation","timeline_7_date":"October 11, 2025","timeline_7_event":"Winners Announcement (Seminar & Awarding Day)","past_guest_stars_title":"Past Guest Stars","past_guest_stars_subtitle":"We have featured inspiring digital creators:","kevin_anggara_name":"\uD83C\uDFAC Kevin Anggara","kevin_anggara_role":"Writer, YouTuber","aulion_name":"\uD83C\uDFA8 Aulion","aulion_role":"Visual artist & content creator","jovial_da_lopez_name":"\uD83C\uDFA5 Jovial da Lopez","jovial_da_lopez_role":"Filmmaker, Cameo Project","benazio_putra_name":"\uD83E\uDDE0 Benazio Putra (Bena Kribo)","benazio_putra_role":"Entrepreneur & educational content creator","registration_title_span":"Register","registration_title_main":"Now!","registration_subtitle":"Don\'t miss the golden opportunity to be part of Portal 7! Choose your registration batch and get ready to innovate.","registration_flow_title":"Registration Flow","registration_batch1_title":"Registration Period","registration_batch1_dates":"June 10 \u2013 July 10","registration_batch_status_soon":"Opening Soon","registration_batch_note":"Registration links will be active according to the schedule. Make sure you don\'t miss out!","registration_form_status_title":"Registration Not Yet Open","registration_form_status_message":"The registration portal will open according to the batch schedule. Time to prepare yourself!","registration_form_status_timer":"Awaiting Batch 1 opening!","registration_guidebook_button":"<i class=\\"fas fa-book-open\\"></i> Read Guidebook Now!","registration_process_title":"Registration Process & Work Submission","registration_process_desc":"Registration is done online via the link that will appear here. Complete details for work submission and documents will be in the guidebook and form.","faq_title":"FAQ \u2013 Frequently Asked Questions","faq_q1":"Is the competition paid?","faq_a1":"Yes, there is a registration fee stated in the guidebook.","faq_q2":"Can participants register for more than one competition category?","faq_a2":"Yes, as long as it complies with the terms and by filling out the form for each category.","faq_q3":"Do participants have to be from IPB?","faq_a3":"No. Portal 7 is open to participants from all over Indonesia and internationally.","faq_q4":"Will all participants receive a certificate?","faq_a4":"Yes, all participants who meet the requirements will receive an e-certificate.","faq_q5":"How to access the work submission platform?","faq_a5":"Details and submission links will be provided after participants complete registration.","who_can_join_title":"Who Can Join?","who_can_join_subtitle":"Open to everyone with an interest in the digital creative world!","who_can_join_list_item1":"<i class=\\"fas fa-university\\"></i> D3/D4/S1 students from all over Indonesia & internationally","who_can_join_team_info":"Participants can register as individuals or teams. No prior experience required, only creativity!","cta_bottom_title":"Ready to create, compete, and connect?","cta_bottom_subtitle":"Join now and realize your vision through digital works with Portal 7.","cta_bottom_button_register":"Register Now","cta_bottom_button_guidebook":"Download Guidebook","media_section_title":"Portal 7 News & Media","media_section_subtitle":"Follow the latest developments, get creative insights, and look back at unforgettable moments from Portal 7!","media_articles_title":"Articles & Insights","media_articles_loading":"Loading articles...","media_articles_view_all":"View All Articles","media_gallery_title":"Photo & Video Gallery","media_gallery_tab_photos":"Photo Documentation","media_gallery_tab_videos":"Video Highlights","media_gallery_photos_loading":"Loading photos...","media_gallery_videos_loading":"Loading videos...","media_gallery_view_all":"Open Full Gallery","media_partners_title":"Supported By","media_partners_loading":"Loading partners & sponsors...","contact_title_span":"Have Questions?","contact_subtitle":"We\'re ready to hear your brilliant ideas or answer your queries. Let\'s get in touch!","contact_direct_chat_title":"Chat Directly","contact_pic_whatsapp":"PIC Portal 7 (WhatsApp):","contact_official_email":"Official Email:","contact_follow_us_title":"Follow Our Digital Footprint","contact_send_message_title":"Send Your Message","contact_form_name_label":"Your Full Name","contact_form_email_label":"Your Active Email Address","contact_form_message_label":"Your Message Here...","contact_form_button_send":"Wooosh, Send!","contact_map_title":"Event Venue : Auditorium Andi Hakim Nasution, IPB University","footer_nav_cepat":"Quick Navigation","footer_hubungi_kami":"Connect With Us","footer_copyright_line1":"\xa9 2025 Student Executive Board Vocational School IPB University. All rights reserved.","footer_copyright_line2":"Empowered by Inspiration, Driven by Innovation.","competition_hub_page_title_meta":"Competition Hub - Portal 7 Challenges","competition_hub_hero_title_main":"The Arenas of Innovation","competition_hub_hero_subtitle":"This is where your ideas take form and your skills are put to the test. Explore our competition branches, find your passion, and create to make an impact.","competition_theme":"Theme: \\"Create to Impact: Digital Creativity for Achieving SDGs\\"","competition_uiux_title":"UI/UX Design Competition","competition_uiux_desc_full":"This competition challenges you to design digital solutions that address real-world problems aligned with the SDGs. Focusing on user-centric thinking and impactful execution, you will create interfaces or experiences that directly respond to challenges in food security, education, or clean energy. The goal is not just to showcase design skills, but to meaningfully contribute by turning creativity into measurable change.","sub_themes_title":"Sub-Themes","sdg_2_title_full":"Feeding Fair Future (SDG 2: Zero Hunger)","sdg_4_title_full":"Learning That Listens (SDG 4: Quality Education)","sdg_7_title_full":"Every Watt Counts (SDG 7: Affordable and Clean Energy)","assessment_criteria_title":"Assessment Criteria","competition_uiux_c1":"Problem Alignment & SDGs Impact","competition_uiux_c2":"Design Aesthetics","competition_uiux_c3":"Creativity & Innovation","competition_uiux_c4":"UX Flow","contact_person_title":"Contact Person","cp_uiux_name":"Contact :","register_now_button":"Register for UI/UX <i class=\\"fas fa-arrow-right\\"></i>","competition_poster_title":"Digital Campaign Poster","competition_poster_desc_full":"This competition is designed to hone your ability to simplify ideas and information, presenting them in a visually compelling way that is easily understood. Create posters that are persuasive, educational, and inspiring, using your creativity to craft powerful visual messages.","competition_poster_c1":"Creativity","competition_poster_c2":"Theme & Message Alignment","competition_poster_c3":"Originality","competition_poster_c4":"Systematics & Rule Compliance","cp_poster_name":"Contact :","register_now_button_poster":"Register for Poster <i class=\\"fas fa-arrow-right\\"></i>","competition_short_movie_title":"Short Movie Competition","competition_short_movie_desc_full":"This competition aims to encourage participants from diverse backgrounds to express their unique ideas, vision, and creativity in the form of a short film. Through this competition, you are expected to present a story with a compelling narrative and visuals, ensuring the underlying message is effectively conveyed to the audience.","competition_short_movie_c1":"Creativity","competition_short_movie_c2":"Storytelling","competition_short_movie_c3":"Visuals & Cinematography","competition_short_movie_c4":"Theme Alignment","competition_short_movie_c5":"Language (English Subtitles)","competition_short_movie_c6":"Originality","cp_movie_name":"Contact :","register_now_button_movie":"Register for Short Movie <i class=\\"fas fa-arrow-right\\"></i>","seminar_page_title_meta":"Seminar Portal 7 - Inspiration & Digital Innovation","seminar_hero_title_main":"PORTAL","seminar_hero_title_accent":"7","seminar_hero_title_series":"SEMINAR","seminar_hero_subtitle":"Unlock Insights: Engaging Talk Shows, Exclusive Coaching, and a Spectacular Awarding Night!","seminar_series_events_title":"Seminar & Event Series","seminar_talkshow_title":"Inspiring Talkshow: Digital Frontiers","seminar_talkshow_date":"<i class=\\"far fa-calendar-alt\\"></i> Saturday, October 11, 2025 (Awarding Day)","seminar_talkshow_desc":"Dive into the latest insights from leaders in digital technology, design, and creativity. Expand your horizons and ignite your innovative spirit.","seminar_speaker_wow_tag":"WOW! GUEST","seminar_mysterious_guest_name":"An Exciting & Mysterious Guest Star!","seminar_mysterious_guest_role":"Renowned for groundbreaking work in the creative industry.","seminar_mysterious_guest_teaser":"Get ready for an unforgettable session that will spark your imagination!","seminar_other_speakers_button":"Other Featured Speakers <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_other_speaker_1":"Speaker Name 2 - Expertise (e.g., UI/UX Lead)","seminar_other_speaker_2":"Speaker Name 3 - Expertise (e.g., Pro Content Creator)","seminar_location_note":"<strong>Location:</strong> [To Be Announced / Virtual Platform] <br><em>Open to the public and competition participants.</em>","seminar_coaching_title":"Coaching Clinic & Pitching Day","seminar_coaching_date":"<i class=\\"far fa-calendar-alt\\"></i> Late September 2025 (Exact Date TBA)","seminar_coaching_desc":"An exclusive session for the top 10 finalists. Receive direct guidance to perfect your project and polish your final presentation.","seminar_coaching_focus_button":"Coaching Focus <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_coaching_focus_1":"Idea Development & Storytelling Mastery","seminar_coaching_focus_2":"Effective Presentation & Pitching Techniques","seminar_coaching_focus_3":"Digital Product/Work Strategy","seminar_coaching_note":"<em>Exclusive for Portal 7 Competition Finalists.</em>","seminar_awarding_title":"Awarding Night & Grand Networking","seminar_awarding_date":"<i class=\\"far fa-calendar-alt\\"></i> Saturday, October 11, 2025","seminar_awarding_desc":"The pinnacle of Portal 7! Celebrate achievements, witness the crowning of champions, and connect with fellow creators and industry professionals.","seminar_awarding_agenda_button":"Main Agenda <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_awarding_agenda_1":"Winner Announcements (All Categories)","seminar_awarding_agenda_2":"Prize & Certificate Ceremony","seminar_awarding_agenda_3":"Dynamic Networking Session","seminar_awarding_agenda_4":"Special Entertainment","seminar_awarding_note":"Attended by finalists, judges, speakers, and invited guests.","seminar_cta_title":"Ready to be Inspired?","seminar_cta_subtitle":"Details for seminar registration (if separate from the competition) or ticket information will be announced soon. Stay tuned to our social media!","seminar_cta_button":"View Competition Registration","sponsorship_proposal_title":"Sponsorship Proposal","sponsorship_proposal_subtitle":"We invite you to be part of our journey in empowering digital innovation. Explore our proposal to see how we can collaborate.","nav_sponsorship":"Join Partnership"},"id":{"nav_beranda":"Beranda","nav_tentang_portal":"Tentang Portal <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_tentang_kami":"Tentang Kami","nav_highlight":"Highlights","nav_sdg_commitment":"Komitmen SDG","nav_linimasa":"Linimasa","nav_guest_stars":"Guest Star","nav_peserta":"Siapa Peserta?","nav_faq":"FAQ","nav_event":"Event <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_kompetisi":"Kompetisi","nav_seminar":"Seminar","nav_media":"Media <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_blog":"Blog","nav_gallery":"Galeri","nav_kontak_kami":"Kontak Kami","nav_pendaftaran":"Pendaftaran","lang_toggle":"EN","index_page_title_meta":"Portal 7: Empower Digital - Halaman Utama Resmi","hero_tagline":"Embrace Your Potential: Empowered by Inspiration, Driven by Innovation","hero_countdown_hari":"Hari","hero_countdown_jam":"Jam","hero_countdown_menit":"Menit","hero_countdown_detik":"Detik","hero_button_daftar":"Daftar Sekarang","hero_button_what_is":"What is Portal?","event_started_message":"EVENT TELAH DIMULAI!","about_title":"Tentang Portal 7","about_what_is_portal_title":"Apa itu Portal 7?","about_what_is_portal_p1":"Di era digital yang terus berkembang, generasi muda memiliki peran penting sebagai agen perubahan. Portal 7 hadir sebagai ruang ekspresi dan inovasi digital yang mendorong peserta untuk tidak hanya menciptakan karya menarik secara visual, tetapi juga memiliki nilai keberlanjutan dan berdampak sosial, sejalan dengan Sustainable Development Goals (SDGs).","about_what_is_portal_p2":"Diselenggarakan oleh BEM Sekolah Vokasi IPB University, Portal 7 menjadi wadah untuk menghubungkan ide, memperluas wawasan, dan membentuk kreator digital yang inspiratif, solutif, dan siap menghadapi tantangan global melalui kekuatan inovasi.","inspire_framework_title":"INSPIRE Framework: Landasan Visi & Misi Kami","inspire_i1":"Inspirasi","inspire_i1_desc":"Memicu ide-ide baru dan semangat berkarya tanpa batas.","inspire_n":"Networking","inspire_n_desc":"Membangun koneksi dan kolaborasi yang kuat dan berkelanjutan.","inspire_s":"Solusi","inspire_s_desc":"Mendorong penciptaan solusi kreatif untuk tantangan nyata.","inspire_p":"Potensi","inspire_p_desc":"Menggali dan memaksimalkan potensi unik setiap individu.","inspire_i2":"Inovasi","inspire_i2_desc":"Menghadirkan terobosan baru dalam teknologi dan kreativitas digital.","inspire_r":"Relevansi","inspire_r_desc":"Menghubungkan pembelajaran dengan kebutuhan industri dan masyarakat.","inspire_e":"Empowerment","inspire_e_desc":"Memberdayakan generasi muda untuk mengambil peran dan menciptakan dampak positif.","sdg_commitment_title_span":"Komitmen Kami","sdg_commitment_title_main":"untuk Tujuan Global","sdg_commitment_subtitle":"Portal 7 secara aktif mendukung Tujuan Pembangunan Berkelanjutan melalui inovasi digital dan pemberdayaan pemuda.","sdg_2_title_1":"Tanpa","sdg_2_title_2":"Kelaparan","sdg_2_desc":"Mendorong solusi digital dan kampanye kesadaran yang berkontribusi pada ketahanan pangan, pertanian berkelanjutan, dan peningkatan gizi melalui proyek inovatif.","sdg_4_title":"Pendidikan Berkualitas","sdg_4_desc":"Menyediakan pelatihan keterampilan digital yang dapat diakses, seminar yang mendalam, dan platform kompetitif yang meningkatkan peluang belajar dan mempromosikan pendidikan seumur hidup untuk semua.","sdg_7_title":"Energi Bersih & Terjangkau","sdg_7_desc":"Mendorong proyek dan diskusi tentang pemanfaatan teknologi untuk solusi energi berkelanjutan, mempromosikan kesadaran, dan menginspirasi inovasi dalam adopsi energi bersih.","wow_guest_star_title_part1":"Guest Star","wow_guest_star_title_wow":"WOW!","wow_guest_star_title_part2":"Tahun Ini","wow_guest_star_subtitle":"Bersiaplah untuk terinspirasi oleh suara terdepan dan inovator tahun 2025!","mysterious_guest_name":"Guest Star Seru & Misterius!","mysterious_guest_title":"Dikenal atas karya terobosan di industri kreatif.","mysterious_guest_teaser":"Bersiaplah untuk sesi tak terlupakan yang akan memicu imajinasimu dan mendefinisikan ulang kemungkinan!","highlight_title_span":"Buka Potensi","highlight_title_main":"Superpower Digitalmu","highlight_subtitle":"Di sinilah kreativitas menyala dan inovasi melambung tinggi. Pilih arenmu, asah kemampuanmu.","highlight_arena_title_main":"Arena:","highlight_arena_title_accent":"Berkompetisi & Taklukkan","highlight_arena_intro":"Ukir legendamu. Tunjukkan bakatmu. Medan pertempuran digital terhebat menanti kejeniusanmu.","highlight_uiux_title":"Desain UI/UX","highlight_uiux_desc":"Ciptakan pengalaman digital intuitif yang memikat dan mengubah. Rancang masa depan, hari ini.","highlight_poster_title":"Poster Kampanye Digital","highlight_poster_desc":"Lepaskan simfoni visual. Buat poster yang tidak hanya berbicara, tetapi meneriakkan pesanmu.","highlight_movie_title":"Film Pendek","highlight_movie_desc":"Ceritakan kisah yang mengubah dunia dalam hitungan menit. Arahkan visimu, pikat hati, inspirasi tindakan.","highlight_prize_label":"REBUT TOTAL HADIAH SPEKTAKULER","highlight_prize_details":"*Plus hak pamer & kemuliaan abadi!","highlight_knowledge_title_main":"Pusat Pengetahuan:","highlight_knowledge_title_accent":"Belajar & Tingkatkan Diri","highlight_knowledge_intro":"Nyalakan rasa ingin tahumu. Serap wawasan yang mengubah permainan dari para master kerajinan digital.","highlight_mentorship_span":"Mentorship Eksklusif:","highlight_mentorship_text":"10 Finalis Terbaik Dibimbing oleh Profesional","highlight_pitch_day_span":"Pitch Day Penuh Kekuatan:","highlight_pitch_day_text":"Sorot Visi Terobosannmu","highlight_awarding_span":"Penganugerahan Akbar:","highlight_awarding_text":"Rayakan Kemenangan & Saksikan Kecemerlangan","highlight_future_talks_span":"Obrolan Masa Depan:","highlight_future_talks_text":"Pecahkan Tren bersama Titan Industri","highlight_button_explore":"Jelajahi Tantangan <i class=\\"fas fa-arrow-right btn-icon\\"></i>","highlight_button_discover":"Temukan Daftar Pengisi Acara <i class=\\"fas fa-arrow-right btn-icon\\"></i>","timeline_title":"Linimasa Kegiatan","timeline_1_date":"10 Juni \u2013 10 Juli 2025","timeline_1_event":"Pendaftaran Peserta","timeline_2_date":"12 Agustus 2025","timeline_2_event":"Technical Meeting","timeline_3_date":"28 Agustus \u2013 3 September 2025","timeline_3_event":"Pengumpulan Karya","timeline_4_date":"4 \u2013 10 September 2025","timeline_4_event":"Penjurian Karya","timeline_5_date":"12 September 2025","timeline_5_event":"Pengumuman 10 Karya Terbaik (Semifinalis)","timeline_6_date":"13 \u2013 15 September 2025","timeline_6_event":"Coaching & Presentasi Top 10","timeline_7_date":"11 Oktober 2025","timeline_7_event":"Pengumuman Pemenang (Seminar & Awarding Day)","past_guest_stars_title":"Guest Star Sebelumnya","past_guest_stars_subtitle":"Kami telah menghadirkan para kreator digital inspiratif:","kevin_anggara_name":"\uD83C\uDFAC Kevin Anggara","kevin_anggara_role":"Penulis, YouTuber","aulion_name":"\uD83C\uDFA8 Aulion","aulion_role":"Seniman visual & kreator konten","jovial_da_lopez_name":"\uD83C\uDFA5 Jovial da Lopez","jovial_da_lopez_role":"Sutradara, Cameo Project","benazio_putra_name":"\uD83E\uDDE0 Benazio Putra (Bena Kribo)","benazio_putra_role":"Pengusaha & kreator konten edukatif","registration_title_span":"Daftar","registration_title_main":"Sekarang!","registration_subtitle":"Jangan lewatkan kesempatan emas untuk menjadi bagian dari Portal 7! Pilih batch pendaftaranmu dan bersiaplah untuk berinovasi.","registration_flow_title":"Alur Registrasi","registration_batch1_title":"Periode Pendaftaran","registration_batch1_dates":"10 Juni \u2013 10 Juli","registration_batch_status_soon":"Segera Dibuka","registration_batch_note":"Link pendaftaran akan aktif sesuai jadwal. Pastikan kamu tidak ketinggalan!","registration_form_status_title":"Pendaftaran Belum Dibuka","registration_form_status_message":"Portal pendaftaran akan terbuka sesuai jadwal batch. Saatnya persiapkan dirimu!","registration_form_status_timer":"Nantikan pembukaan Batch 1!","registration_guidebook_button":"<i class=\\"fas fa-book-open\\"></i> Baca Guidebook Sekarang!","registration_process_title":"Proses Pendaftaran & Pengumpulan Karya","registration_process_desc":"Pendaftaran dilakukan online melalui link yang akan muncul di sini. Detail lengkap pengumpulan karya dan dokumen akan ada di guidebook dan formulir.","faq_title":"FAQ \u2013 Pertanyaan Umum","faq_q1":"Apakah kompetisinya berbayar?","faq_a1":"Ya, terdapat biaya registrasi yang tertera dalam guidebook.","faq_q2":"Apakah peserta bisa mendaftar lebih dari satu cabang lomba?","faq_a2":"Bisa, asalkan sesuai ketentuan dan mengisi formulir untuk masing-masing cabang.","faq_q3":"Apakah harus berasal dari IPB?","faq_a3":"Tidak. Portal 7 terbuka untuk peserta dari seluruh Indonesia dan internasional.","faq_q4":"Apakah semua peserta akan mendapat sertifikat?","faq_a4":"Ya, semua peserta yang memenuhi ketentuan akan mendapatkan e-sertifikat.","faq_q5":"Bagaimana cara mengakses platform pengumpulan karya?","faq_a5":"Detail dan link pengumpulan akan diberikan setelah peserta menyelesaikan registrasi.","who_can_join_title":"Siapa Saja yang Bisa Ikut?","who_can_join_subtitle":"Terbuka untuk semua kalangan dengan minat di dunia kreatif digital!","who_can_join_list_item1":"<i class=\\"fas fa-university\\"></i> Mahasiswa D3/D4/S1 dari seluruh Indonesia & internasional","who_can_join_team_info":"Peserta dapat mendaftar sebagai individu atau tim. Tidak memerlukan pengalaman sebelumnya, hanya kreativitas!","cta_bottom_title":"Siap untuk mencipta, berkompetisi, dan terhubung?","cta_bottom_subtitle":"Gabung sekarang dan wujudkan visimu melalui karya digital bersama Portal 7.","cta_bottom_button_register":"Daftar Sekarang","cta_bottom_button_guidebook":"Unduh Guidebook","media_section_title":"Berita & Media Portal 7","media_section_subtitle":"Ikuti perkembangan terbaru, dapatkan insight kreatif, dan lihat kembali momen-momen tak terlupakan dari Portal 7!","media_articles_title":"Artikel & Insight","media_articles_loading":"Memuat artikel...","media_articles_view_all":"Lihat Semua Artikel","media_gallery_title":"Galeri Foto & Video","media_gallery_tab_photos":"Foto Dokumentasi","media_gallery_tab_videos":"Video Highlights","media_gallery_photos_loading":"Memuat foto...","media_gallery_videos_loading":"Memuat video...","media_gallery_view_all":"Buka Galeri Lengkap","media_partners_title":"Didukung Oleh","media_partners_loading":"Memuat mitra & sponsor...","contact_title_span":"Ada Pertanyaan?","contact_subtitle":"Kami siap mendengar ide brilian atau menjawab kebingunganmu. Yuk, hubungi kami!","contact_direct_chat_title":"Ngobrol Langsung","contact_pic_whatsapp":"PIC Portal 7 (WhatsApp):","contact_official_email":"Email Resmi:","contact_follow_us_title":"Ikuti Jejak Digital Kami","contact_send_message_title":"Kirim Pesanmu","contact_form_name_label":"Nama Lengkap Kamu","contact_form_email_label":"Alamat Email Aktif","contact_form_message_label":"Isi Pesanmu Disini...","contact_form_button_send":"Wuzzz, Kirim!","contact_map_title":"Venue Acara : Auditorium Andi Hakim Nasution, IPB University","footer_nav_cepat":"Navigasi Cepat","footer_hubungi_kami":"Terhubung Dengan Kami","footer_copyright_line1":"\xa9 2025 Badan Eksekutif Mahasiswa Sekolah Vokasi IPB University. Hak cipta dilindungi.","footer_copyright_line2":"Diberdayakan oleh Inspirasi, Didorong oleh Inovasi.","competition_hub_page_title_meta":"Pusat Kompetisi - Tantangan Portal 7","competition_hub_hero_title_main":"Arena Inovasi","competition_hub_hero_subtitle":"Di sinilah idemu terbentuk dan keahlianmu diuji. Jelajahi cabang kompetisi kami, temukan pasionmu, dan ciptakan karya untuk membuat dampak.","competition_theme":"Tema: \\"Create to Impact: Digital Creativity for Achieving SDGs\\"","competition_uiux_title":"Kompetisi Desain UI/UX","competition_uiux_desc_full":"Kompetisi ini menantang Anda untuk merancang solusi digital yang menjawab permasalahan nyata yang selaras dengan SDGs. Berfokus pada pemikiran yang berpusat pada pengguna dan eksekusi yang berdampak, Anda akan menciptakan antarmuka atau pengalaman yang secara langsung merespons tantangan dalam ketahanan pangan, pendidikan, atau energi bersih. Tujuannya bukan hanya untuk menunjukkan keterampilan desain, tetapi juga berkontribusi secara bermakna dengan mengubah kreativitas menjadi perubahan yang terukur.","sub_themes_title":"Sub-Tema","sdg_2_title_full":"Masa Depan Pangan yang Adil (SDG 2: Tanpa Kelaparan)","sdg_4_title_full":"Pembelajaran yang Mendengar (SDG 4: Pendidikan Berkualitas)","sdg_7_title_full":"Setiap Watt Berharga (SDG 7: Energi Bersih dan Terjangkau)","assessment_criteria_title":"Indikator Penilaian","competition_uiux_c1":"Kesesuaian Masalah & Dampak SDGs","competition_uiux_c2":"Estetika Desain","competition_uiux_c3":"Kreativitas & Inovasi","competition_uiux_c4":"Alur Pengalaman Pengguna (UX)","contact_person_title":"Narahubung","cp_uiux_name":"Hubungi :","register_now_button":"Daftar UI/UX <i class=\\"fas fa-arrow-right\\"></i>","competition_poster_title":"Poster Kampanye Digital","competition_poster_desc_full":"Kompetisi ini dirancang untuk mengasah kemampuan Anda dalam menyederhanakan ide dan informasi, menyajikannya dalam bentuk visual yang menarik dan mudah dipahami. Ciptakan poster yang persuasif, edukatif, dan inspiratif, menggunakan kreativitas Anda untuk merangkai pesan visual yang kuat.","competition_poster_c1":"Kreativitas","competition_poster_c2":"Kesesuaian Tema & Nilai Pesan","competition_poster_c3":"Orisinalitas","competition_poster_c4":"Sistematika & Kesesuaian Ketentuan","cp_poster_name":"Hubungi :","register_now_button_poster":"Daftar Poster <i class=\\"fas fa-arrow-right\\"></i>","competition_short_movie_title":"Kompetisi Film Pendek","competition_short_movie_desc_full":"Kompetisi ini bertujuan mendorong peserta dengan berbagai latar belakang untuk menuangkan ide, visi, dan kreativitas unik mereka dalam bentuk film pendek. Melalui kompetisi ini, Anda diharapkan mampu menyajikan cerita dengan alur dan visual yang menarik, memastikan pesan yang terkandung tersampaikan secara efektif kepada penonton.","competition_short_movie_c1":"Kreativitas","competition_short_movie_c2":"Penceritaan (Storytelling)","competition_short_movie_c3":"Visual & Sinematografi","competition_short_movie_c4":"Kesesuaian Tema","competition_short_movie_c5":"Bahasa (Subtitle Inggris)","competition_short_movie_c6":"Orisinalitas","cp_movie_name":"Hubungi :","register_now_button_movie":"Daftar Film Pendek <i class=\\"fas fa-arrow-right\\"></i>","seminar_page_title_meta":"Seminar Portal 7 - Inspirasi & Inovasi Digital","seminar_hero_title_main":"PORTAL","seminar_hero_title_accent":"7","seminar_hero_title_series":"SEMINAR","seminar_hero_subtitle":"Buka Wawasan: Talkshow Menarik, Coaching Eksklusif, dan Malam Penganugerahan Spektakuler!","seminar_series_events_title":"Rangkaian Seminar & Acara","seminar_talkshow_title":"Talkshow Inspiratif: Batas Digital","seminar_talkshow_date":"<i class=\\"far fa-calendar-alt\\"></i> Sabtu, 11 Oktober 2025 (Hari Penganugerahan)","seminar_talkshow_desc":"Selami wawasan terbaru dari para pemimpin teknologi digital, desain, dan kreatif. Perluas cakrawala Anda dan sulut semangat inovatif Anda.","seminar_speaker_wow_tag":"WOW! GUEST","seminar_mysterious_guest_name":"Guest Star Seru & Misterius!","seminar_mysterious_guest_role":"Dikenal atas karya terobosan di industri kreatif.","seminar_mysterious_guest_teaser":"Bersiaplah untuk sesi tak terlupakan yang akan memicu imajinasimu!","seminar_other_speakers_button":"Pembicara Unggulan Lainnya <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_other_speaker_1":"Nama Pembicara 2 - Keahlian (mis., UI/UX Lead)","seminar_other_speaker_2":"Nama Pembicara 3 - Keahlian (mis., Kreator Konten Pro)","seminar_location_note":"<strong>Lokasi:</strong> [Akan Diumumkan / Platform Virtual] <br><em>Terbuka untuk umum dan peserta kompetisi.</em>","seminar_coaching_title":"Coaching Clinic & Pitching Day","seminar_coaching_date":"<i class=\\"far fa-calendar-alt\\"></i> Akhir September 2025 (Tanggal Pasti TBA)","seminar_coaching_desc":"Sesi eksklusif untuk 10 finalis terbaik. Terima bimbingan langsung untuk menyempurnakan proyek Anda dan mematangkan presentasi akhir Anda.","seminar_coaching_focus_button":"Fokus Coaching <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_coaching_focus_1":"Pengembangan Ide & Penguasaan Penceritaan","seminar_coaching_focus_2":"Teknik Presentasi & Pitching Efektif","seminar_coaching_focus_3":"Strategi Produk/Karya Digital","seminar_coaching_note":"<em>Eksklusif untuk Finalis Kompetisi Portal 7.</em>","seminar_awarding_title":"Malam Penganugerahan & Networking Akbar","seminar_awarding_date":"<i class=\\"far fa-calendar-alt\\"></i> Sabtu, 11 Oktober 2025","seminar_awarding_desc":"Puncak Portal 7! Rayakan pencapaian, saksikan penobatan para juara, dan terhubung dengan sesama kreator dan profesional industri.","seminar_awarding_agenda_button":"Agenda Utama <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_awarding_agenda_1":"Pengumuman Pemenang (Semua Kategori)","seminar_awarding_agenda_2":"Upacara Penyerahan Hadiah & Sertifikat","seminar_awarding_agenda_3":"Sesi Networking Dinamis","seminar_awarding_agenda_4":"Hiburan Spesial","seminar_awarding_note":"Dihadiri oleh finalis, juri, pembicara, dan tamu undangan.","seminar_cta_title":"Siap Terinspirasi?","seminar_cta_subtitle":"Detail pendaftaran seminar (jika terpisah dari kompetisi) atau informasi tiket akan segera diumumkan. Pantau terus media sosial kami!","seminar_cta_button":"Lihat Pendaftaran Kompetisi","sponsorship_proposal_title":"Proposal Sponsorship","sponsorship_proposal_subtitle":"Kami mengundang Anda untuk menjadi bagian dari perjalanan kami dalam memberdayakan inovasi digital. Jelajahi proposal kami untuk melihat bagaimana kita bisa berkolaborasi.","nav_sponsorship":"Gabung Kemitraan"}}');

},{}]},["1X5Lm","lPYiT"], "lPYiT", "parcelRequirec3f4", {})

//# sourceMappingURL=translations.d424ebaf.js.map
