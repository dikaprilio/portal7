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
})({"7SvX3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ae5be248d29bb997";
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

},{}],"kyksZ":[function(require,module,exports,__globalThis) {
// --- Global Variables & Initial Setup ---
let currentLang = localStorage.getItem('lang') || 'en'; // Default to Indonesian
let translations = {};
const langToggleButton = document.getElementById('lang-toggle');
const mainNavLinks = document.getElementById('main-nav-links');
const menuToggleButton = document.getElementById('mobile-menu-toggle');
let menuIcon = menuToggleButton ? menuToggleButton.querySelector('i') : null;
let pageTitleElement = null;
// --- Language Toggle Functionality ---
async function fetchTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }
        translations = await response.json();
        if (Object.keys(translations).length === 0) {
            console.error("Translations file loaded but is empty.");
            return;
        }
        applyTranslations(currentLang);
    } catch (error) {
        console.error("Could not load or parse translations:", error);
    }
}
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    if (langToggleButton && translations[lang] && translations[lang].lang_toggle) langToggleButton.textContent = translations[lang].lang_toggle;
    else if (langToggleButton) langToggleButton.textContent = lang === 'id' ? 'EN' : 'ID';
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    elementsToTranslate.forEach((el)=>{
        const key = el.dataset.translateKey;
        if (translations[lang] && typeof translations[lang][key] !== 'undefined') {
            if (el.children.length > 0 && el.innerHTML.includes("<i")) el.innerHTML = translations[lang][key];
            else el.textContent = translations[lang][key];
        }
    });
    if (pageTitleElement) {
        const titleKey = pageTitleElement.dataset.translateKey;
        if (translations[lang] && translations[lang][titleKey]) document.title = translations[lang][titleKey];
    }
    setupReadMoreToggles();
}
// --- AOS Initialization ---
function initializeAOS() {
    if (typeof AOS !== 'undefined') AOS.init({
        duration: 800,
        once: true
    });
}
// --- ACCURATE SMOOTH SCROLLING ---
function smoothScrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const navElement = document.querySelector('nav');
        const navHeight = navElement ? navElement.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return true;
    }
    return false;
}
// --- Mobile Navigation (with correct scroll call) ---
function closeMobileMenu() {
    if (mainNavLinks && mainNavLinks.classList.contains('active')) {
        mainNavLinks.classList.remove('active');
        if (menuToggleButton) menuToggleButton.setAttribute('aria-expanded', 'false');
        if (menuIcon) menuIcon.className = 'fas fa-bars';
        document.querySelectorAll('.nav-links .nav-item.dropdown.open').forEach((d)=>d.classList.remove('open'));
    }
}
function setupMobileNavigation() {
    if (menuToggleButton) menuToggleButton.addEventListener('click', (e)=>{
        e.stopPropagation();
        const isActive = mainNavLinks.classList.toggle('active');
        menuToggleButton.classList.toggle('active', isActive); // This line is added
        menuToggleButton.setAttribute('aria-expanded', isActive);
        // The old `menuIcon.className` logic is no longer needed as CSS handles the icon switch
        if (!isActive) document.querySelectorAll('.nav-links .nav-item.dropdown.open').forEach((d)=>d.classList.remove('open'));
    });
    document.querySelectorAll('.nav-links .dropdown-toggle').forEach((toggle)=>{
        toggle.addEventListener('click', function(e) {
            if (mainNavLinks && mainNavLinks.classList.contains('active')) {
                if (this.getAttribute('href') === '#') e.preventDefault();
                this.closest('.nav-item.dropdown')?.classList.toggle('open');
                e.stopPropagation();
            }
        });
    });
    document.querySelectorAll('a[href*="#"]').forEach((anchor)=>{
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isSamePageLink = href.startsWith('#') || href.startsWith('/#') || href.startsWith('index.html#');
            if (isSamePageLink) {
                const targetId = href.substring(href.indexOf('#') + 1);
                if (document.getElementById(targetId)) {
                    e.preventDefault();
                    smoothScrollToTarget(targetId); // Use the accurate scroll function
                    if (mainNavLinks.classList.contains('active')) closeMobileMenu();
                }
            }
        });
    });
    document.addEventListener('click', (event)=>{
        if (mainNavLinks && mainNavLinks.classList.contains('active')) {
            if (!mainNavLinks.contains(event.target) && !menuToggleButton.contains(event.target)) closeMobileMenu();
        }
    });
}
// In script.js, replace the existing setupPageTransitions function with this one.
function setupPageTransitions() {
    const body = document.body;
    const transitionDuration = 800; // Match your longest transition in CSS
    // --- Entry Animation ---
    window.addEventListener('load', ()=>{
        body.classList.remove('is-loading');
    });
    // --- Unified & Corrected Click Handler ---
    body.addEventListener('click', (e)=>{
        // Find the closest 'a' tag to where the user clicked.
        const link = e.target.closest('a');
        // 1. --- EXIT EARLY FOR INVALID CLICKS ---
        // If it's not a valid link, do nothing.
        if (!link || !link.hasAttribute('href')) return;
        const href = link.getAttribute('href');
        // Ignore special protocol links (mailto, tel)
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return;
        // Ignore links that are meant to open in a new tab
        if (link.hasAttribute('target') && link.getAttribute('target') === '_blank') return;
        // 2. --- CHECK IF IT'S A SAME-PAGE ANCHOR LINK ---
        // This is the core of the fix. It robustly checks if the link points to the current page.
        const currentPath = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
        const linkUrl = new URL(href, window.location.origin);
        const linkPath = linkUrl.pathname.endsWith('/') ? linkUrl.pathname : linkUrl.pathname + '/';
        const isSamePageAnchorLink = href.startsWith('#') || linkPath === currentPath && href.includes('#');
        if (isSamePageAnchorLink) {
            const targetId = href.substring(href.indexOf('#') + 1);
            // Check if the target element actually exists on the page
            if (document.getElementById(targetId)) {
                e.preventDefault(); // Prevent the default jump
                smoothScrollToTarget(targetId); // Use your smooth scroll function
                closeMobileMenu(); // Close mobile menu if it's open after navigation
            }
            return; // IMPORTANT: Stop execution here for same-page anchors
        }
        // 3. --- IF IT'S A DIFFERENT PAGE, RUN THE TRANSITION ---
        // If we reach here, it's a link to a different page.
        e.preventDefault(); // Prevent immediate navigation
        body.classList.add('is-transitioning'); // Start the exit animation
        setTimeout(()=>{
            window.location.href = href; // Navigate after the animation
        }, transitionDuration);
    });
}
// Sets up the "Read More" button on the Competition Hub
function setupReadMoreToggles() {
    document.querySelectorAll('.comp-card .read-more-btn').forEach((button)=>{
        if (button.hasAttribute('data-readmore-listener')) return;
        button.setAttribute('data-readmore-listener', 'true');
        button.addEventListener('click', ()=>{
            const expandableContent = button.closest('.description-wrapper').querySelector('.expandable-content');
            if (expandableContent) {
                const isExpanded = expandableContent.classList.toggle('expanded');
                button.textContent = isExpanded ? button.dataset.less || 'Read Less' : button.dataset.more || 'Read More';
            }
        });
    });
}
function handlePageLoadAnchors() {
    if (window.location.hash) // Use a timeout to ensure all content is loaded and heights are correct
    window.addEventListener('load', ()=>{
        setTimeout(()=>{
            smoothScrollToTarget(window.location.hash.substring(1));
        }, 100);
    }, {
        once: true
    });
}
// --- FAQ Accordion ---
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) faqQuestions.forEach((question)=>{
        question.addEventListener('click', ()=>{
            const currentItem = question.parentElement;
            const isActive = currentItem.classList.contains('active');
            currentItem.classList.toggle('active', !isActive);
            const currentIcon = question.querySelector('.faq-question .faq-icon i');
            if (currentIcon) currentIcon.className = currentItem.classList.contains('active') ? 'fas fa-minus' : 'fas fa-plus';
        });
    });
}
// --- Countdown Timer (Index Page) ---
function startCountdown() {
    const countdownTimerEl = document.getElementById("countdown-timer");
    if (!countdownTimerEl) return;
    const countdownDate = new Date("October 11, 2025 00:00:00").getTime();
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / 86400000);
        const hours = Math.floor(distance % 86400000 / 3600000);
        const minutes = Math.floor(distance % 3600000 / 60000);
        const seconds = Math.floor(distance % 60000 / 1000);
        daysEl.innerText = days < 10 ? "0" + days : days;
        hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
        if (distance < 0) {
            clearInterval(countdownFunction);
            const eventStartedKey = 'event_started_message';
            countdownTimerEl.innerHTML = `<span data-translate-key="${eventStartedKey}">${translations[currentLang] && translations[currentLang][eventStartedKey] || "EVENT HAS STARTED!"}</span>`;
            countdownTimerEl.style.fontSize = "1.5rem";
            countdownTimerEl.style.fontWeight = "bold";
            if (translations[currentLang] && translations[currentLang][eventStartedKey]) {
                const spanElement = countdownTimerEl.querySelector(`[data-translate-key="${eventStartedKey}"]`);
                if (spanElement) spanElement.textContent = translations[currentLang][eventStartedKey];
            }
        }
    }, 1000);
}
// --- Logo Animation (Index Page) ---
function setupLogoAnimation() {
    const heroLogo = document.querySelector('.hero-left img.portal-logo.hero-logo-entry');
    if (heroLogo) heroLogo.addEventListener('animationend', function handleDrawLogoEnd(event) {
        if (event.animationName === 'drawLogo') {
            heroLogo.classList.remove('hero-logo-entry');
            heroLogo.classList.add('hero-logo-float');
            heroLogo.removeEventListener('animationend', handleDrawLogoEnd);
        }
    });
}
// --- Media Content Loading (Index Page Previews) ---
async function loadMediaContent() {
    const mediaSection = document.getElementById('media');
    if (!mediaSection) return;
    const blogArticlesContainer = mediaSection.querySelector('#blog-articles-container .articles-grid');
    const galleryPhotosContainer = mediaSection.querySelector('#gallery-container .gallery-grid.photos');
    const galleryVideosContainer = mediaSection.querySelector('#gallery-container .gallery-grid.videos');
    const partnersSponsorsContainer = mediaSection.querySelector('#partners-sponsors-container .partners-grid');
    const galleryTabs = mediaSection.querySelectorAll('#media .gallery-tab-button');
    try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (blogArticlesContainer) renderBlogArticlesPreview(data.blogArticles, blogArticlesContainer);
        if (galleryPhotosContainer) renderGalleryPhotosPreview(data.gallery.photos, galleryPhotosContainer);
        if (galleryVideosContainer) renderGalleryVideosPreview(data.gallery.videos, galleryVideosContainer);
        if (galleryTabs.length > 0) galleryTabs.forEach((tab)=>{
            tab.addEventListener('click', ()=>{
                galleryTabs.forEach((t)=>t.classList.remove('active'));
                tab.classList.add('active');
                mediaSection.querySelectorAll('#media .gallery-grid').forEach((content)=>{
                    content.classList.remove('active-gallery-content');
                });
                const targetContentClass = tab.dataset.tab;
                const newActiveContent = mediaSection.querySelector(`#media .gallery-grid.${targetContentClass}`);
                if (newActiveContent) newActiveContent.classList.add('active-gallery-content');
            });
        });
        applyTranslations(currentLang);
        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error("Gagal memuat konten media (index):", error);
        if (blogArticlesContainer) blogArticlesContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_articles">Gagal memuat artikel.</p>`;
        if (galleryPhotosContainer) galleryPhotosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_photos">Gagal memuat foto.</p>`;
        if (galleryVideosContainer) galleryVideosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_videos">Gagal memuat video.</p>`;
        if (partnersSponsorsContainer) partnersSponsorsContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_partners">Gagal memuat mitra.</p>`;
        applyTranslations(currentLang);
    }
}
function renderBlogArticlesPreview(articles, container) {
    if (!container) return;
    if (!articles || articles.length === 0) {
        container.innerHTML = `<p data-translate-key="no_articles">Belum ada artikel.</p>`;
        return;
    }
    container.innerHTML = '';
    articles.slice(0, 3).forEach((article)=>{
        const articleCardHTML = `
            <div class="article-card" data-aos="fade-up" data-aos-anchor="#blog-articles-container">
                <a href="${article.link}" class="article-card-link">
                    <div class="article-image-wrapper">
                        <img src="${article.image}" alt="${article.title}" class="article-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="article-image-fallback" style="display: none;"><i class="fas fa-image fa-3x"></i></div>
                    </div>
                    <div class="article-content">
                        <h4 class="article-title">${article.title}</h4>
                        <p class="article-meta">${article.date} | <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p>
                        <p class="article-summary">${article.summary}</p>
                        <span class="article-link-text" data-translate-key="article_read_more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            </div>`;
        container.insertAdjacentHTML('beforeend', articleCardHTML);
    });
}
function renderGalleryPhotosPreview(photos, container) {
    if (!container) return;
    if (!photos || photos.length === 0) {
        container.innerHTML = `<p data-translate-key="no_photos">Belum ada foto.</p>`;
        return;
    }
    container.innerHTML = '';
    photos.slice(0, 6).forEach((photo)=>{
        const photoItem = `
            <div class="gallery-item photo" data-aos="zoom-in-up" data-aos-anchor="#gallery-container" onclick="openLightboxFromPreview('${photo.id}', 'photo')">
                <img src="${photo.thumbnailUrl}" alt="${photo.title}" onerror="this.src='https://placehold.co/300x300/e0e0e0/757575?text=Error&font=montserrat';">
                <div class="gallery-item-overlay">
                    <i class="fas fa-search-plus"></i>
                    <span>${photo.title} ${photo.year ? '(' + photo.year + ')' : ''}</span>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', photoItem);
    });
}
function renderGalleryVideosPreview(videos, container) {
    if (!container) return;
    if (!videos || videos.length === 0) {
        container.innerHTML = `<p data-translate-key="no_videos">Belum ada video.</p>`;
        return;
    }
    container.innerHTML = '';
    videos.slice(0, 3).forEach((video)=>{
        const videoItem = `
            <div class="gallery-item video" data-aos="zoom-in-up" data-aos-anchor="#gallery-container" onclick="openLightboxFromPreview('${video.id}', 'video')">
                <img src="${video.thumbnailUrl}" alt="${video.title}" onerror="this.src='https://placehold.co/300x200/e0e0e0/757575?text=Error&font=montserrat';">
                <div class="gallery-item-overlay">
                    <i class="fas fa-play-circle"></i>
                    <span>${video.title}</span>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', videoItem);
    });
}
function renderPartnersSponsors(items, container) {
    if (!container) return;
    if (!items || items.length === 0) {
        container.innerHTML = `<p data-translate-key="no_partners">Mitra akan segera tampil.</p>`;
        return;
    }
    container.innerHTML = '';
    items.forEach((item)=>{
        const partnerItem = `
            <div class="partner-item" data-aos="fade-up" data-aos-anchor="#partners-sponsors-container">
                <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer" title="${item.name} (${item.type})">
                    <img src="${item.logoUrl}" alt="${item.name}" onerror="this.parentElement.innerHTML = '<span class=\\'partner-name-fallback\\'>${item.name}</span>';">
                </a>
            </div>`;
        container.insertAdjacentHTML('beforeend', partnerItem);
    });
}
// --- Blog Page Specific ---
async function loadAllBlogArticles() {
    const fullArticlesGrid = document.getElementById('full-articles-grid');
    if (!fullArticlesGrid) return;
    try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.blogArticles) renderFullBlogArticles(data.blogArticles, fullArticlesGrid);
        else fullArticlesGrid.innerHTML = `<p class="error-message" data-translate-key="error_no_articles_found">No articles found in data.</p>`;
        applyTranslations(currentLang);
        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error("Gagal memuat semua artikel blog:", error);
        fullArticlesGrid.innerHTML = `<p class="error-message" data-translate-key="error_load_articles_full">Gagal memuat artikel. Silakan coba lagi nanti.</p>`;
        applyTranslations(currentLang);
    }
}
function renderFullBlogArticles(articles, container) {
    if (!container) return;
    if (!articles || articles.length === 0) {
        container.innerHTML = `<p data-translate-key="no_articles_available">Belum ada artikel untuk ditampilkan.</p>`;
        return;
    }
    container.innerHTML = '';
    articles.forEach((article)=>{
        const articleCardHTML = `
            <div class="article-card" data-aos="fade-up">
                <a href="${article.link}" class="article-card-link">
                    <div class="article-image-wrapper">
                        <img src="${article.image}" alt="${article.title}" class="article-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="article-image-fallback" style="display: none;"><i class="fas fa-image fa-3x"></i></div>
                    </div>
                    <div class="article-content">
                        <h4 class="article-title">${article.title}</h4>
                        <p class="article-meta">${article.date} | <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p>
                        <p class="article-summary">${article.summary}</p>
                        <span class="article-link-text" data-translate-key="article_read_more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></span>
                    </div>
                </a>
            </div>`;
        container.insertAdjacentHTML('beforeend', articleCardHTML);
    });
}
// --- Blog Detail Page Specific ---
async function loadSpecificBlogArticle() {
    const articleDetailWrapper = document.getElementById('article-detail-wrapper');
    if (!articleDetailWrapper) return;
    articleDetailWrapper.innerHTML = `<div class="loading-article"><p data-translate-key="blog_detail_loading">Memuat artikel...</p></div>`;
    applyTranslations(currentLang);
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    if (!articleId) {
        articleDetailWrapper.innerHTML = `<div class="article-not-found">
                                            <p data-translate-key="blog_detail_no_id">Artikel tidak ditemukan. ID artikel tidak disertakan.</p>
                                            <a href="/blog" class="back-to-blog-link" data-translate-key="blog_detail_back_button"><i class="fas fa-arrow-left"></i> Kembali ke Blog</a>
                                          </div>`;
        applyTranslations(currentLang);
        return;
    }
    try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const article = data.blogArticles.find((post)=>post.id === articleId);
        if (article) {
            const titleText = article.title;
            const authorText = article.author;
            const fullContent = article.fullContentHTML;
            if (pageTitleElement) document.title = titleText + " - Portal 7";
            let articleHTML = `
                <section class="blog-detail-hero">
                    <h1 class="article-title-main" data-aos="fade-up">${titleText}</h1>
                    <p class="article-meta-main" data-aos="fade-up" data-aos-delay="100">
                        <i class="fas fa-calendar-alt"></i> ${article.date} | <i class="fas fa-user"></i> <span data-translate-key="article_author_prefix">Oleh:</span> ${authorText}
                    </p>
                </section>
            `;
            if (article.image) articleHTML += `
                    <div class="article-featured-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
                        <img src="${article.image}" alt="${titleText}" class="article-featured-image">
                    </div>`;
            articleHTML += `
                <div class="article-content-container">
                    <article class="article-body" data-aos="fade-up" data-aos-delay="300">
                        ${fullContent || `<p data-translate-key="blog_detail_content_unavailable">Konten lengkap tidak tersedia.</p>`}
                    </article>
                    <div style="text-align: center;">
                       <a href="/blog" class="back-to-blog-link" data-translate-key="blog_detail_back_all_articles"><i class="fas fa-arrow-left"></i> Kembali ke Semua Artikel</a>
                    </div>
                </div>`;
            articleDetailWrapper.innerHTML = articleHTML;
            if (typeof AOS !== 'undefined') AOS.refresh();
            applyTranslations(currentLang);
        } else {
            articleDetailWrapper.innerHTML = `<div class="article-not-found">
                                                <p data-translate-key="blog_detail_not_found">Artikel tidak ditemukan.</p>
                                                <a href="/blog" class="back-to-blog-link" data-translate-key="blog_detail_back_button"><i class="fas fa-arrow-left"></i> Kembali ke Blog</a>
                                              </div>`;
            applyTranslations(currentLang);
        }
    } catch (error) {
        console.error("Gagal memuat artikel:", error);
        articleDetailWrapper.innerHTML = `<div class="article-not-found">
                                            <p data-translate-key="blog_detail_load_error">Gagal memuat artikel. Silakan coba lagi nanti.</p>
                                            <a href="/blog" class="back-to-blog-link" data-translate-key="blog_detail_back_button"><i class="fas fa-arrow-left"></i> Kembali ke Blog</a>
                                          </div>`;
        applyTranslations(currentLang);
    }
}
// --- Gallery Page Specific ---
let allGalleryPhotos = [];
let allGalleryVideos = [];
let currentLightboxItems = [];
let currentLightboxIndex = 0;
async function loadAllGalleryContent() {
    const allPhotosContainer = document.getElementById('all-photos-grid');
    const allVideosContainer = document.getElementById('all-videos-grid');
    if (!allPhotosContainer && !allVideosContainer) return;
    try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        allGalleryPhotos = data.gallery.photos || [];
        allGalleryVideos = data.gallery.videos || [];
        if (allPhotosContainer) renderGalleryItems(allGalleryPhotos, allPhotosContainer, 'photo');
        if (allVideosContainer) renderGalleryItems(allGalleryVideos, allVideosContainer, 'video');
        applyTranslations(currentLang);
        if (typeof AOS !== 'undefined') AOS.refresh();
    } catch (error) {
        console.error("Gagal memuat konten galeri lengkap:", error);
        if (allPhotosContainer) allPhotosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_photos_full">Gagal memuat foto.</p>`;
        if (allVideosContainer) allVideosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_videos_full">Gagal memuat video.</p>`;
        applyTranslations(currentLang);
    }
}
function renderGalleryItems(itemsToRender, container, itemType) {
    if (!container) return;
    if (!itemsToRender || itemsToRender.length === 0) {
        const noItemKey = itemType === 'photo' ? 'no_photos_available' : 'no_videos_available';
        container.innerHTML = `<p data-translate-key="${noItemKey}">Belum ada ${itemType === 'photo' ? 'foto' : 'video'} untuk ditampilkan.</p>`;
        return;
    }
    container.innerHTML = '';
    itemsToRender.forEach((item, index)=>{
        const galleryItemDiv = document.createElement('div');
        galleryItemDiv.classList.add('gallery-item', itemType);
        galleryItemDiv.setAttribute('data-aos', 'zoom-in-up');
        galleryItemDiv.setAttribute('data-item-id', item.id);
        galleryItemDiv.innerHTML = `
            <img src="${item.thumbnailUrl}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/300x300/e0e0e0/757575?text=Error&font=montserrat';">
            <div class="gallery-item-overlay">
                <i class="fas ${itemType === 'photo' ? 'fa-search-plus' : 'fa-play-circle'}"></i>
                <span>${item.title} ${item.year ? '(' + item.year + ')' : ''}</span>
            </div>`;
        galleryItemDiv.addEventListener('click', ()=>openLightbox(itemsToRender, index, itemType));
        container.appendChild(galleryItemDiv);
    });
}
function setupGalleryTabs() {
    const galleryPageTabs = document.querySelectorAll('.gallery-section .gallery-tab-button');
    if (galleryPageTabs.length > 0) galleryPageTabs.forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            galleryPageTabs.forEach((t)=>t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.gallery-section .gallery-grid').forEach((content)=>{
                content.classList.remove('active-gallery-content');
            });
            const targetContentClass = tab.dataset.tab;
            const newActiveContent = document.querySelector(`.gallery-section .gallery-grid.${targetContentClass}`);
            if (newActiveContent) newActiveContent.classList.add('active-gallery-content');
        });
    });
}
function openLightbox(items, index, type) {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) return;
    currentLightboxItems = items;
    currentLightboxIndex = index;
    updateLightboxContent(type);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
async function openLightboxFromPreview(itemId, itemType) {
    if (allGalleryPhotos.length === 0 && allGalleryVideos.length === 0) try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        allGalleryPhotos = data.gallery.photos || [];
        allGalleryVideos = data.gallery.videos || [];
    } catch (error) {
        console.error("Could not load gallery data for lightbox from preview:", error);
        return;
    }
    let itemsCollection = itemType === 'photo' ? allGalleryPhotos : allGalleryVideos;
    const itemIndex = itemsCollection.findIndex((item)=>item.id === itemId);
    if (itemIndex !== -1) openLightbox(itemsCollection, itemIndex, itemType);
    else console.error(`Item with ID ${itemId} of type ${itemType} not found for lightbox.`);
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    if (!lightbox) return;
    lightbox.style.display = 'none';
    if (lightboxImage) lightboxImage.style.display = 'none';
    if (lightboxVideo) {
        lightboxVideo.style.display = 'none';
        lightboxVideo.src = "";
    }
    document.body.style.overflow = 'auto';
}
function updateLightboxContent(itemType) {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    if (!currentLightboxItems || currentLightboxItems.length === 0 || !lightboxImage || !lightboxVideo || !lightboxCaption) return;
    const item = currentLightboxItems[currentLightboxIndex];
    if (!item) return;
    lightboxImage.style.display = 'none';
    lightboxVideo.style.display = 'none';
    lightboxVideo.src = "";
    if (itemType === 'photo') {
        lightboxImage.src = item.fullUrl || item.thumbnailUrl;
        lightboxImage.alt = item.title;
        lightboxImage.style.display = 'block';
    } else if (itemType === 'video' && item.videoUrl) {
        let videoEmbedUrl = item.videoUrl;
        if (videoEmbedUrl.includes("youtube.com/watch?v=")) videoEmbedUrl = videoEmbedUrl.replace("watch?v=", "embed/");
        else if (videoEmbedUrl.match(/googleusercontent\.com\/youtube\.com\/\d+/)) {
            const videoIdMatch = videoEmbedUrl.match(/googleusercontent\.com\/youtube\.com\/(\w+)/);
            if (videoIdMatch && videoIdMatch[1]) videoEmbedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
            else console.warn("Could not parse YouTube video ID from googleusercontent URL:", item.videoUrl);
        }
        lightboxVideo.src = videoEmbedUrl;
        lightboxVideo.style.display = 'block';
    }
    lightboxCaption.textContent = item.title + (item.description ? ` - ${item.description}` : '');
    if (lightboxPrev) lightboxPrev.style.display = currentLightboxItems.length > 1 ? 'block' : 'none';
    if (lightboxNext) lightboxNext.style.display = currentLightboxItems.length > 1 ? 'block' : 'none';
}
function showPrevLightboxItem() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
    const itemType = currentLightboxItems[currentLightboxIndex].videoUrl ? 'video' : 'photo';
    updateLightboxContent(itemType);
}
function showNextLightboxItem() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
    const itemType = currentLightboxItems[currentLightboxIndex].videoUrl ? 'video' : 'photo';
    updateLightboxContent(itemType);
}
function setupLightboxControls() {
    const lightboxCloseBtn = document.querySelector('.lightbox-close');
    const lightboxPrevBtn = document.querySelector('.lightbox-prev');
    const lightboxNextBtn = document.querySelector('.lightbox-next');
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightboxItem);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightboxItem);
    if (lightboxModal) lightboxModal.addEventListener('click', (e)=>{
        if (e.target === lightboxModal) closeLightbox();
    });
    document.addEventListener('keydown', (e)=>{
        if (lightboxModal && lightboxModal.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (currentLightboxItems.length > 1) {
                if (e.key === 'ArrowLeft') showPrevLightboxItem();
                if (e.key === 'ArrowRight') showNextLightboxItem();
            }
        }
    });
}
// --- Competition Hub & Seminar Page Accordions ---
function setupAccordions(accordionSelector, toggleSelector) {
    const accordions = document.querySelectorAll(accordionSelector);
    if (accordions.length > 0) document.querySelectorAll(toggleSelector).forEach((button)=>{
        button.addEventListener('click', ()=>{
            const accordionContent = button.nextElementSibling;
            const icon = button.querySelector('.accordion-icon');
            button.classList.toggle('active');
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
}
// --- Function to set up the infinite partner logo scroller ---
async function loadAndSetupPartnerScroller() {
    const scroller = document.querySelector(".partners-scroller");
    if (!scroller) return;
    const partnersList = scroller.querySelector(".partners-list");
    if (!partnersList) return;
    try {
        const response = await fetch('media-content.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.partnersSponsors && data.partnersSponsors.length > 0) {
            partnersList.innerHTML = ''; // Clear any placeholders
            data.partnersSponsors.forEach((partner)=>{
                const listItem = document.createElement('li');
                listItem.className = 'partner-logo-item';
                listItem.innerHTML = `
                    <a href="${partner.websiteUrl || '#'}" target="_blank" rel="noopener noreferrer" title="${partner.name}">
                        <img src="${partner.logoUrl}" alt="${partner.name} logo" onerror="this.style.display='none'; this.parentElement.innerHTML = '<span class=\\'partner-name-fallback\\'>${partner.name}</span>';">
                    </a>
                `;
                partnersList.appendChild(listItem);
            });
            // Set up the animation after logos are loaded
            setupAnimation(scroller);
        } else partnersList.innerHTML = '<li>No partners to display.</li>';
    } catch (error) {
        console.error("Could not load partners for scroller:", error);
        partnersList.innerHTML = '<li>Error loading partners.</li>';
    }
}
function setupAnimation(scroller) {
    // If a user prefers reduced motion, do not animate
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".partners-list");
        const scrollerContent = Array.from(scrollerInner.children);
        // Duplicate items for the seamless scroll effect
        scrollerContent.forEach((item)=>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    }
}
function setupCompetitionCarousel() {
    const wrapper = document.querySelector('.competition-carousel-wrapper');
    if (!wrapper) return;
    const slidesContainer = wrapper.querySelector('.carousel-slides-container');
    const slides = slidesContainer.querySelectorAll('.comp-card');
    const prevButton = wrapper.querySelector('.carousel-nav.prev');
    const nextButton = wrapper.querySelector('.carousel-nav.next');
    const dotsContainer = wrapper.querySelector('.carousel-dots');
    let currentSlide = 0;
    if (slides.length <= 1) {
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
        if (dotsContainer) dotsContainer.style.display = 'none';
        if (slides.length === 1) slides[0].classList.add('active');
        return;
    }
    dotsContainer.innerHTML = '';
    slides.forEach((_, i)=>{
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', ()=>showSlide(i));
        dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer.querySelectorAll('.dot');
    const showSlide = (index)=>{
        currentSlide = index;
        slides.forEach((slide, i)=>slide.classList.toggle('active', i === index));
        dots.forEach((dot, i)=>dot.classList.toggle('active', i === index));
    };
    const nextSlide = ()=>showSlide((currentSlide + 1) % slides.length);
    const prevSlide = ()=>showSlide((currentSlide - 1 + slides.length) % slides.length);
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    let touchstartX = 0;
    slidesContainer.addEventListener('touchstart', (e)=>{
        touchstartX = e.changedTouches[0].screenX;
    }, {
        passive: true
    });
    slidesContainer.addEventListener('touchend', (e)=>{
        const touchendX = e.changedTouches[0].screenX;
        if (touchendX < touchstartX - 50) nextSlide();
        if (touchendX > touchstartX + 50) prevSlide();
    }, {
        passive: true
    });
    showSlide(currentSlide);
}
function startSubmissionCountdown() {
    const countdownTimerEl = document.getElementById("submission-countdown");
    if (!countdownTimerEl) return;
    const countdownDate = new Date("September 3, 2025 23:59:59").getTime();
    const daysEl = document.getElementById("sub-days");
    const hoursEl = document.getElementById("sub-hours");
    const minutesEl = document.getElementById("sub-minutes");
    const secondsEl = document.getElementById("sub-seconds");
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    const interval = setInterval(()=>{
        const now = new Date().getTime();
        const distance = countdownDate - now;
        if (distance < 0) {
            clearInterval(interval);
            countdownTimerEl.innerHTML = `<span style="font-size: 1.5rem; font-weight: bold; color: var(--pink-accent);">SUBMISSION CLOSED</span>`;
            return;
        }
        const format = (num)=>String(num).padStart(2, '0');
        daysEl.innerText = format(Math.floor(distance / 86400000));
        hoursEl.innerText = format(Math.floor(distance % 86400000 / 3600000));
        minutesEl.innerText = format(Math.floor(distance % 3600000 / 60000));
        secondsEl.innerText = format(Math.floor(distance % 60000 / 1000));
    }, 1000);
}
// Set the loading class on the body immediately when the script runs.
// --- Main DOMContentLoaded Listener (Corrected & Unified) ---
document.addEventListener('DOMContentLoaded', async ()=>{
    // 1. Set up the page transition structure IMMEDIATELY. This is crucial.
    setupPageTransitions();
    initializeAOS();
    setupMobileNavigation();
    handlePageLoadAnchors();
    pageTitleElement = document.querySelector('title[data-translate-key]');
    // 2. Fetch translations and apply them initially
    await fetchTranslations();
    // 3. Setup all page-specific components
    if (document.getElementById("countdown-timer")) startCountdown();
    if (document.getElementById('media')) {
        // Run the new, correct function for the media scroller
        loadAndSetupPartnerScroller();
        // The functions for blog/gallery previews from the old loadMediaContent are still needed
        const blogArticlesContainer = document.querySelector('#blog-articles-container .articles-grid');
        const galleryPhotosContainer = document.querySelector('#gallery-container .gallery-grid.photos');
        const galleryVideosContainer = document.querySelector('#gallery-container .gallery-grid.videos');
        const galleryTabs = document.querySelectorAll('#media .gallery-tab-button');
        // Fetch media content to populate blog/gallery previews
        fetch('media-content.json').then((response)=>response.json()).then((data)=>{
            if (blogArticlesContainer) renderBlogArticlesPreview(data.blogArticles, blogArticlesContainer);
            if (galleryPhotosContainer) renderGalleryPhotosPreview(data.gallery.photos, galleryPhotosContainer);
            if (galleryVideosContainer) renderGalleryVideosPreview(data.gallery.videos, galleryVideosContainer);
            if (galleryTabs.length > 0) galleryTabs.forEach((tab)=>{
                tab.addEventListener('click', ()=>{
                    galleryTabs.forEach((t)=>t.classList.remove('active'));
                    tab.classList.add('active');
                    document.querySelectorAll('#media .gallery-grid').forEach((content)=>{
                        content.classList.remove('active-gallery-content');
                    });
                    const targetContentClass = tab.dataset.tab;
                    const newActiveContent = document.querySelector(`#media .gallery-grid.${targetContentClass}`);
                    if (newActiveContent) newActiveContent.classList.add('active-gallery-content');
                });
            });
        }).catch((error)=>console.error("Error loading blog/gallery previews:", error));
    }
    if (document.getElementById('full-articles-grid')) loadAllBlogArticles();
    if (document.getElementById('article-detail-wrapper')) loadSpecificBlogArticle();
    if (document.getElementById('all-photos-grid')) {
        setupGalleryTabs();
        loadAllGalleryContent();
        setupLightboxControls();
    }
    if (document.body.classList.contains('competition-hub-body')) {
        setupCompetitionCarousel();
        startSubmissionCountdown();
    }
    setupFAQAccordion();
    setupAccordions('.accordion-seminar', '.accordion-seminar-toggle');
    // 4. Set up the language toggle button event listener
    if (langToggleButton) langToggleButton.addEventListener('click', ()=>{
        const newLang = currentLang === 'id' ? 'en' : 'id';
        applyTranslations(newLang);
    });
    // 5. Set up the tribute functionality
    const tributeCode = [
        'n',
        'a',
        'r',
        'a'
    ];
    let currentPosition = 0;
    const tributeOverlay = document.getElementById('nara-tribute-overlay');
    const closeButton = document.querySelector('.close-tribute');
    function showTribute() {
        if (tributeOverlay) {
            tributeOverlay.style.display = 'flex';
            setTimeout(()=>{
                tributeOverlay.style.opacity = '1';
                tributeOverlay.querySelector('.tribute-modal').style.transform = 'scale(1)';
            }, 10);
        }
    }
    function hideTribute() {
        if (tributeOverlay) {
            tributeOverlay.style.opacity = '0';
            tributeOverlay.querySelector('.tribute-modal').style.transform = 'scale(0.9)';
            setTimeout(()=>{
                tributeOverlay.style.display = 'none';
            }, 500);
        }
    }
    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === tributeCode[currentPosition]) {
            currentPosition++;
            if (currentPosition === tributeCode.length) {
                showTribute();
                currentPosition = 0;
            }
        } else currentPosition = 0;
    });
    if (closeButton) closeButton.addEventListener('click', hideTribute);
    if (tributeOverlay) tributeOverlay.addEventListener('click', (e)=>{
        if (e.target === tributeOverlay) hideTribute();
    });
    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape' && tributeOverlay && tributeOverlay.style.display === 'flex') hideTribute();
    });
});
// --- NEW: Accurate Scroll Handling on Initial Page Load ---
// This waits for all resources (images, fonts) to load, ensuring nav height is accurate.
window.addEventListener('load', ()=>{
    if (window.location.hash) // A small timeout allows the browser to settle before we manually scroll.
    setTimeout(()=>{
        smoothScrollToTarget(window.location.hash.substring(1));
    }, 100);
});

},{}]},["7SvX3","kyksZ"], "kyksZ", "parcelRequirec3f4", {})

//# sourceMappingURL=Portal Website.d29bb997.js.map
