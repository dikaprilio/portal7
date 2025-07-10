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
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _translationsJson = require("./translations.json");
var _translationsJsonDefault = parcelHelpers.interopDefault(_translationsJson);
var _mediaContentJs = require("./media-content.js");
var _mediaContentJsDefault = parcelHelpers.interopDefault(_mediaContentJs);
let currentLang = localStorage.getItem('lang') || 'en'; // Default to English
const langToggleButton = document.getElementById('lang-toggle');
const mainNavLinks = document.getElementById('main-nav-links');
const menuToggleButton = document.getElementById('mobile-menu-toggle');
let menuIcon = menuToggleButton ? menuToggleButton.querySelector('i') : null;
let pageTitleElement = null;
// --- Language Toggle Functionality ---
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    if (langToggleButton && (0, _translationsJsonDefault.default)[lang] && (0, _translationsJsonDefault.default)[lang].lang_toggle) langToggleButton.textContent = (0, _translationsJsonDefault.default)[lang].lang_toggle;
    else if (langToggleButton) langToggleButton.textContent = lang === 'id' ? 'EN' : 'ID';
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    elementsToTranslate.forEach((el)=>{
        const key = el.dataset.translateKey;
        if ((0, _translationsJsonDefault.default)[lang] && typeof (0, _translationsJsonDefault.default)[lang][key] !== 'undefined') {
            if (el.children.length > 0 && el.innerHTML.includes("<i")) el.innerHTML = (0, _translationsJsonDefault.default)[lang][key];
            else el.textContent = (0, _translationsJsonDefault.default)[lang][key];
        }
    });
    if (pageTitleElement) {
        const titleKey = pageTitleElement.dataset.translateKey;
        if ((0, _translationsJsonDefault.default)[lang] && (0, _translationsJsonDefault.default)[lang][titleKey]) document.title = (0, _translationsJsonDefault.default)[lang][titleKey];
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
        menuToggleButton.classList.toggle('active', isActive);
        menuToggleButton.setAttribute('aria-expanded', isActive);
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
                    smoothScrollToTarget(targetId);
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
function setupPageTransitions() {
    const body = document.body;
    const transitionDuration = 800;
    window.addEventListener('load', ()=>{
        body.classList.remove('is-loading');
    });
    body.addEventListener('click', (e)=>{
        const link = e.target.closest('a');
        if (!link || !link.hasAttribute('href')) return;
        const href = link.getAttribute('href');
        if (href.startsWith('mailto:') || href.startsWith('tel:') || link.hasAttribute('target') && link.getAttribute('target') === '_blank') return;
        const currentPath = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
        const linkUrl = new URL(href, window.location.origin);
        const linkPath = linkUrl.pathname.endsWith('/') ? linkUrl.pathname : linkUrl.pathname + '/';
        const isSamePageAnchorLink = href.startsWith('#') || linkPath === currentPath && href.includes('#');
        if (isSamePageAnchorLink) {
            const targetId = href.substring(href.indexOf('#') + 1);
            if (document.getElementById(targetId)) {
                e.preventDefault();
                smoothScrollToTarget(targetId);
                closeMobileMenu();
            }
            return;
        }
        e.preventDefault();
        body.classList.add('is-transitioning');
        setTimeout(()=>{
            window.location.href = href;
        }, transitionDuration);
    });
}
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
    if (window.location.hash) window.addEventListener('load', ()=>{
        setTimeout(()=>{
            smoothScrollToTarget(window.location.hash.substring(1));
        }, 100);
    }, {
        once: true
    });
}
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
        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
        if (distance < 0) {
            clearInterval(countdownFunction);
            const eventStartedKey = 'event_started_message';
            countdownTimerEl.innerHTML = `<span data-translate-key="${eventStartedKey}">${(0, _translationsJsonDefault.default)[currentLang] && (0, _translationsJsonDefault.default)[currentLang][eventStartedKey] || "EVENT HAS STARTED!"}</span>`;
            countdownTimerEl.style.fontSize = "1.5rem";
            countdownTimerEl.style.fontWeight = "bold";
            if ((0, _translationsJsonDefault.default)[currentLang] && (0, _translationsJsonDefault.default)[currentLang][eventStartedKey]) {
                const spanElement = countdownTimerEl.querySelector(`[data-translate-key="${eventStartedKey}"]`);
                if (spanElement) spanElement.textContent = (0, _translationsJsonDefault.default)[currentLang][eventStartedKey];
            }
        }
    }, 1000);
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
function loadAllBlogArticles() {
    const fullArticlesGrid = document.getElementById('full-articles-grid');
    if (!fullArticlesGrid) return;
    if ((0, _mediaContentJsDefault.default) && (0, _mediaContentJsDefault.default).blogArticles) renderFullBlogArticles((0, _mediaContentJsDefault.default).blogArticles, fullArticlesGrid);
    else fullArticlesGrid.innerHTML = `<p class="error-message" data-translate-key="error_no_articles_found">No articles found in data.</p>`;
    applyTranslations(currentLang);
    if (typeof AOS !== 'undefined') AOS.refresh();
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
function loadSpecificBlogArticle() {
    const articleDetailWrapper = document.getElementById('article-detail-wrapper');
    if (!articleDetailWrapper) return;
    articleDetailWrapper.innerHTML = `<div class="loading-article"><p data-translate-key="blog_detail_loading">Memuat artikel...</p></div>`;
    applyTranslations(currentLang);
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    if (!articleId) {
        articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_no_id">Artikel tidak ditemukan...</p></div>`;
        applyTranslations(currentLang);
        return;
    }
    if ((0, _mediaContentJsDefault.default) && (0, _mediaContentJsDefault.default).blogArticles) {
        const article = (0, _mediaContentJsDefault.default).blogArticles.find((post)=>post.id === articleId);
        if (article) {
            if (pageTitleElement) document.title = article.title + " - Portal 7";
            let articleHTML = `<section class="blog-detail-hero"><h1 class="article-title-main" data-aos="fade-up">${article.title}</h1><p class="article-meta-main" data-aos="fade-up" data-aos-delay="100"><i class="fas fa-calendar-alt"></i> ${article.date} | <i class="fas fa-user"></i> <span data-translate-key="article_author_prefix">Oleh:</span> ${article.author}</p></section>`;
            if (article.image) articleHTML += `<div class="article-featured-image-wrapper" data-aos="zoom-in" data-aos-delay="200"><img src="${article.image}" alt="${article.title}" class="article-featured-image"></div>`;
            articleHTML += `<div class="article-content-container"><article class="article-body" data-aos="fade-up" data-aos-delay="300">${article.fullContentHTML || `<p data-translate-key="blog_detail_content_unavailable">Konten lengkap tidak tersedia.</p>`}</article></div>`;
            articleDetailWrapper.innerHTML = articleHTML;
            if (typeof AOS !== 'undefined') AOS.refresh();
        } else articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_not_found">Artikel tidak ditemukan.</p></div>`;
    } else articleDetailWrapper.innerHTML = `<div class="article-not-found"><p data-translate-key="blog_detail_load_error">Gagal memuat artikel.</p></div>`;
    applyTranslations(currentLang);
}
let allGalleryPhotos = [];
let allGalleryVideos = [];
let currentLightboxItems = [];
let currentLightboxIndex = 0;
function loadAllGalleryContent() {
    const allPhotosContainer = document.getElementById('all-photos-grid') || document.getElementById('gallery-container');
    const allVideosContainer = document.getElementById('all-videos-grid');
    if (!allPhotosContainer && !allVideosContainer) return;
    if ((0, _mediaContentJsDefault.default) && (0, _mediaContentJsDefault.default).gallery) {
        allGalleryPhotos = (0, _mediaContentJsDefault.default).gallery.photos || [];
        allGalleryVideos = (0, _mediaContentJsDefault.default).gallery.videos || [];
        if (allPhotosContainer) renderGalleryItems(allGalleryPhotos, allPhotosContainer, 'photo');
        if (allVideosContainer) renderGalleryItems(allGalleryVideos, allVideosContainer, 'video');
        applyTranslations(currentLang);
        if (typeof AOS !== 'undefined') AOS.refresh();
    } else {
        console.error("Gallery content not found in media-content.js");
        if (allPhotosContainer) allPhotosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_photos_full">Gagal memuat foto.</p>`;
        if (allVideosContainer) allVideosContainer.innerHTML = `<p class="error-message" data-translate-key="error_load_videos_full">Gagal memuat video.</p>`;
        applyTranslations(currentLang);
    }
}
function renderGalleryItems(itemsToRender, container, itemType) {
    if (!container) return;
    if (!itemsToRender || itemsToRender.length === 0) {
        const noItemKey = itemType === 'photo' ? 'no_photos_available' : 'no_videos_available';
        container.innerHTML = `<p data-translate-key="${noItemKey}">Belum ada ${itemType} untuk ditampilkan.</p>`;
        return;
    }
    container.innerHTML = '';
    itemsToRender.forEach((item, index)=>{
        const imageUrl = item.thumbnailUrl;
        const galleryItemDiv = document.createElement('div');
        galleryItemDiv.classList.add('gallery-item', itemType);
        galleryItemDiv.setAttribute('data-aos', 'zoom-in-up');
        galleryItemDiv.setAttribute('data-item-id', item.id);
        galleryItemDiv.innerHTML = `
            <img src="${imageUrl}" alt="${item.title}" loading="lazy" onerror="this.src='https://placehold.co/300x300/e0e0e0/757575?text=Error&font=montserrat';">
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
window.openLightboxFromPreview = function(itemId, itemType) {
    let itemsCollection = itemType === 'photo' ? allGalleryPhotos : allGalleryVideos;
    if (itemsCollection.length === 0) {
        allGalleryPhotos = (0, _mediaContentJsDefault.default).gallery.photos || [];
        allGalleryVideos = (0, _mediaContentJsDefault.default).gallery.videos || [];
        itemsCollection = itemType === 'photo' ? allGalleryPhotos : allGalleryVideos;
    }
    const itemIndex = itemsCollection.findIndex((item)=>item.id === itemId);
    if (itemIndex !== -1) openLightbox(itemsCollection, itemIndex, itemType);
    else console.error(`Item with ID ${itemId} of type ${itemType} not found for lightbox.`);
};
function openLightbox(items, index, type) {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) return;
    currentLightboxItems = items;
    currentLightboxIndex = index;
    updateLightboxContent(type);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
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
        if (videoEmbedUrl.includes("watch?v=")) videoEmbedUrl = videoEmbedUrl.replace("watch?v=", "embed/");
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
function loadAndSetupPartnerScroller() {
    const scroller = document.querySelector(".partners-scroller");
    if (!scroller) return;
    const partnersList = scroller.querySelector(".partners-list");
    if (!partnersList) return;
    if ((0, _mediaContentJsDefault.default).partnersSponsors && (0, _mediaContentJsDefault.default).partnersSponsors.length > 0) {
        partnersList.innerHTML = '';
        (0, _mediaContentJsDefault.default).partnersSponsors.forEach((partner)=>{
            const logoUrl = partner.logoUrl;
            const listItem = document.createElement('li');
            listItem.className = 'partner-logo-item';
            listItem.innerHTML = `<a href="${partner.websiteUrl || '#'}" target="_blank"><img src="${logoUrl}" alt="${partner.name} logo"></a>`;
            partnersList.appendChild(listItem);
        });
        setupAnimation(scroller);
    } else partnersList.innerHTML = '<li>No partners to display.</li>';
}
function setupAnimation(scroller) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".partners-list");
        const scrollerContent = Array.from(scrollerInner.children);
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
document.addEventListener('DOMContentLoaded', ()=>{
    setupPageTransitions();
    initializeAOS();
    setupMobileNavigation();
    handlePageLoadAnchors();
    pageTitleElement = document.querySelector('title[data-translate-key]');
    applyTranslations(currentLang);
    if (document.getElementById("countdown-timer")) startCountdown();
    if (document.getElementById('media')) {
        loadAndSetupPartnerScroller();
        const blogArticlesContainer = document.querySelector('#blog-articles-container .articles-grid');
        const galleryPhotosContainer = document.querySelector('#gallery-container .gallery-grid.photos');
        const galleryVideosContainer = document.querySelector('#gallery-container .gallery-grid.videos');
        if (0, _mediaContentJsDefault.default) {
            if (blogArticlesContainer) renderBlogArticlesPreview((0, _mediaContentJsDefault.default).blogArticles, blogArticlesContainer);
            if (galleryPhotosContainer) renderGalleryPhotosPreview((0, _mediaContentJsDefault.default).gallery.photos, galleryPhotosContainer);
            if (galleryVideosContainer) renderGalleryVideosPreview((0, _mediaContentJsDefault.default).gallery.videos, galleryVideosContainer);
        }
        const galleryTabs = document.querySelectorAll('#media .gallery-tab-button');
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
    }
    if (document.getElementById('full-articles-grid')) loadAllBlogArticles();
    if (document.getElementById('article-detail-wrapper')) loadSpecificBlogArticle();
    if (document.querySelector('.gallery-page-hero')) {
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
    if (langToggleButton) langToggleButton.addEventListener('click', ()=>{
        const newLang = currentLang === 'id' ? 'en' : 'id';
        applyTranslations(newLang);
    });
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
window.addEventListener('load', ()=>{
    if (window.location.hash) setTimeout(()=>{
        smoothScrollToTarget(window.location.hash.substring(1));
    }, 100);
});

},{"./translations.json":"lPYiT","./media-content.js":"lF3WC","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lPYiT":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"en":{"nav_beranda":"Home","nav_tentang_portal":"About Portal <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_tentang_kami":"About Us","nav_highlight":"Highlights","nav_sdg_commitment":"SDG Commitment","nav_linimasa":"Timeline","nav_guest_stars":"Guest Star","nav_peserta":"Who Can Join?","nav_faq":"FAQ","nav_sponsorship":"Join Partnership","nav_event":"Event <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_kompetisi":"Competition","nav_seminar":"Seminar","nav_media":"Media <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_blog":"Blog","nav_gallery":"Gallery","nav_kontak_kami":"Contact Us","nav_pendaftaran":"Registration","lang_toggle":"ID","index_page_title_meta":"Portal 7: Empower Digital - Official Landing Page","hero_tagline":"Embrace Your Potential: Empowered by Inspiration, Driven by Innovation","hero_countdown_hari":"Days","hero_countdown_jam":"Hours","hero_countdown_menit":"Minutes","hero_countdown_detik":"Seconds","hero_button_daftar":"Register Now","hero_button_what_is":"What is Portal?","event_started_message":"EVENT HAS STARTED!","about_title":"About Portal 7","about_what_is_portal_title":"What is Portal 7?","about_what_is_portal_p1":"In today\'s ever-evolving digital era, the youth play a crucial role as agents of change. Portal 7 emerges as a space for digital expression and innovation, encouraging participants not only to create visually appealing works but also to embed them with values of sustainability and social impact, in line with the Sustainable Development Goals (SDGs).","about_what_is_portal_p2":"Organized by the Student Executive Board of IPB University\'s Vocational School, Portal 7 serves as a platform to connect ideas, broaden horizons, and shape digital creators who are inspiring, solution-oriented, and ready to face global challenges through the power of innovation.","inspire_framework_title":"INSPIRE Framework: Our Vision & Mission Foundation","inspire_i1":"Inspiration","inspire_i1_desc":"Igniting new ideas and limitless creative spirit.","inspire_n":"Networking","inspire_n_desc":"Building strong and sustainable connections and collaborations.","inspire_s":"Solution","inspire_s_desc":"Encouraging the creation of creative solutions for real challenges.","inspire_p":"Potential","inspire_p_desc":"Exploring and maximizing the unique potential of each individual.","inspire_i2":"Innovation","inspire_i2_desc":"Presenting new breakthroughs in technology and digital creativity.","inspire_r":"Relevance","inspire_r_desc":"Connecting learning with the needs of industry and society.","inspire_e":"Empowerment","inspire_e_desc":"Empowering the young generation to take roles and create positive impacts.","sdg_commitment_title_span":"Our Commitment","sdg_commitment_title_main":"to Global Goals","sdg_commitment_subtitle":"Portal 7 actively champions the Sustainable Development Goals through digital innovation and youth empowerment.","sdg_2_title_1":"Zero","sdg_2_title_2":"Hunger","sdg_2_desc":"Fostering digital solutions and awareness campaigns that contribute to food security, sustainable agriculture, and improved nutrition through innovative projects.","sdg_4_title":"Quality Education","sdg_4_desc":"Providing accessible digital skills training, insightful seminars, and competitive platforms that enhance learning opportunities and promote lifelong education for all.","sdg_7_title":"Affordable & Clean Energy","sdg_7_desc":"Encouraging projects and discussions on leveraging technology for sustainable energy solutions, promoting awareness, and inspiring innovation in clean energy adoption.","wow_guest_star_title_part1":"This Year\'s","wow_guest_star_title_wow":"WOW!","wow_guest_star_title_part2":"Guest Star","wow_guest_star_subtitle":"Get ready to be inspired by a leading voice and innovator of 2025!","mysterious_guest_name":"An Exciting & Mysterious Guest Star!","mysterious_guest_title":"Renowned for groundbreaking work in the creative industry.","mysterious_guest_teaser":"Get ready for an unforgettable session that will spark your imagination and redefine possibilities!","highlight_title_span":"Unlock","highlight_title_main":"Your Digital Superpowers","highlight_subtitle":"This is where creativity ignites and innovation takes flight. Choose your arena, sharpen your skills.","highlight_arena_title_main":"The Arena:","highlight_arena_title_accent":"Compete & Conquer","highlight_arena_intro":"Forge your legend. Showcase your talent. The ultimate digital battleground awaits your genius.","highlight_uiux_title":"UI/UX Design","highlight_uiux_desc":"Sculpt intuitive digital experiences that captivate and convert. Design the future, today.","highlight_poster_title":"Campaign Digital Poster","highlight_poster_desc":"Unleash visual symphonies. Craft posters that don\'t just speak, they roar your message.","highlight_movie_title":"Short Movie","highlight_movie_desc":"Tell world-changing stories in minutes. Direct your vision, captivate hearts, inspire action.","highlight_prize_label":"WIN SPECTACULAR TOTAL PRIZES","highlight_prize_details":"*Plus bragging rights & eternal glory!","highlight_knowledge_title_main":"The Knowledge Hub:","highlight_knowledge_title_accent":"Learn & Elevate","highlight_knowledge_intro":"Ignite your curiosity. Absorb game-changing insights from the masters of digital craft.","highlight_mentorship_span":"Exclusive Mentorship:","highlight_mentorship_text":"Top 10 Finalists Coached by Pros","highlight_pitch_day_span":"Pitch Day Powerhouse:","highlight_pitch_day_text":"Spotlight Your Groundbreaking Vision","highlight_awarding_span":"The Grand Awarding:","highlight_awarding_text":"Celebrate Victory & Witness Brilliance","highlight_future_talks_span":"Future Forward Talks:","highlight_future_talks_text":"Decode Trends with Industry Titans","highlight_button_explore":"Explore Challenges <i class=\\"fas fa-arrow-right btn-icon\\"></i>","highlight_button_discover":"Discover the Lineup <i class=\\"fas fa-arrow-right btn-icon\\"></i>","timeline_title":"Event Timeline","timeline_1_date":"June 10 \u2013 July 10, 2025","timeline_1_event":"Participant Registration","timeline_2_date":"August 12, 2025","timeline_2_event":"Technical Meeting","timeline_3_date":"August 28 \u2013 September 3, 2025","timeline_3_event":"Work Submission","timeline_4_date":"September 4 \u2013 10, 2025","timeline_4_event":"Work Judging Period","timeline_5_date":"September 12, 2025","timeline_5_event":"Top 10 Works Announcement (Semifinalists)","timeline_6_date":"September 13 \u2013 15, 2025","timeline_6_event":"Coaching & Top 10 Presentation","timeline_7_date":"October 11, 2025","timeline_7_event":"Winners Announcement (Seminar & Awarding Day)","past_guest_stars_title":"Past Guest Stars","past_guest_stars_subtitle":"We have featured inspiring digital creators:","kevin_anggara_name":"\uD83C\uDFAC Kevin Anggara","kevin_anggara_role":"Writer, YouTuber","aulion_name":"\uD83C\uDFA8 Aulion","aulion_role":"Visual artist & content creator","jovial_da_lopez_name":"\uD83C\uDFA5 Jovial da Lopez","jovial_da_lopez_role":"Filmmaker, Cameo Project","benazio_putra_name":"\uD83E\uDDE0 Benazio Putra (Bena Kribo)","benazio_putra_role":"Entrepreneur & educational content creator","registration_title_span":"Register","registration_title_main":"Now!","registration_subtitle":"Don\'t miss the golden opportunity to be part of Portal 7! Choose your registration batch and get ready to innovate.","registration_flow_title":"Registration Flow 2025","registration_batch1_title":"Batch 1","registration_batch_status_soon":"Opening Soon","registration_batch_status_open":"Open","registration_batch_note":"Registration links will be active according to the schedule. Make sure you don\'t miss out!","registration_form_status_title":"Registration Not Yet Open","registration_form_status_message":"The registration portal will open according to the batch schedule. Time to prepare yourself!","registration_form_status_timer":"Awaiting Batch 1 opening!","registration_guidebook_button":"<i class=\\"fas fa-book-open\\"></i> Read Guidebook Now!","registration_process_title":"Registration Process & Work Submission","registration_process_info":"Registration is done online via the links on the right. Complete details for work submission and other documents are available in the guidebook.","registration_choose_comp_title":"Choose Your Arena","registration_click_to_register":"Click to open the registration form","faq_title":"FAQ \u2013 Frequently Asked Questions","faq_q1":"Is the competition paid?","faq_a1":"Yes, there is a registration fee stated in the guidebook.","faq_q2":"Can participants register for more than one competition category?","faq_a2":"Yes, as long as it complies with the terms and by filling out the form for each category.","faq_q3":"Do participants have to be from IPB?","faq_a3":"No. Portal 7 is open to participants from all over Indonesia and internationally.","faq_q4":"Will all participants receive a certificate?","faq_a4":"Yes, all participants who meet the requirements will receive an e-certificate.","faq_q5":"How to access the work submission platform?","faq_a5":"Details and submission links will be provided after participants complete registration.","who_can_join_title":"Who Can Join?","who_can_join_subtitle":"Open to everyone with an interest in the digital creative world!","who_can_join_list_item1":"<i class=\\"fas fa-university\\"></i> D3/D4/S1 students from all over Indonesia & internationally","who_can_join_team_info":"Participants can register as individuals or teams. No prior experience required, only creativity!","cta_bottom_title":"Ready to create, compete, and connect?","cta_bottom_subtitle":"Join now and realize your vision through digital works with Portal 7.","cta_bottom_button_register":"Register Now","cta_bottom_button_guidebook":"Download Guidebook","media_section_title":"Portal 7 News & Media","media_section_subtitle":"Follow the latest developments, get creative insights, and look back at unforgettable moments from Portal 7!","media_articles_title":"Articles & Insights","media_articles_loading":"Loading articles...","media_articles_view_all":"View All Articles","media_gallery_title":"Photo & Video Gallery","media_gallery_tab_photos":"Photo Documentation","media_gallery_tab_videos":"Video Highlights","media_gallery_photos_loading":"Loading photos...","media_gallery_videos_loading":"Loading videos...","media_gallery_view_all":"Open Full Gallery","media_partners_title":"Our Media Partners","media_partners_loading":"Loading partners & sponsors...","contact_title_span":"Have Questions?","contact_subtitle":"We\'re ready to hear your brilliant ideas or answer your queries. Let\'s get in touch!","contact_direct_chat_title":"Chat Directly","contact_pic_whatsapp":"PIC Portal 7 (WhatsApp):","contact_sponsorship":"Join Sponsorship:","contact_medpar":"Join Media Partner:","contact_proposal":"Sponsorship Proposal:","contact_proposal_link_text":"Download Here","contact_official_email":"Official Email:","contact_follow_us_title":"Follow Our Digital Footprint","contact_send_message_title":"Send Your Message","contact_form_name_label":"Your Full Name","contact_form_email_label":"Your Active Email Address","contact_form_message_label":"Your Message Here...","contact_form_button_send":"Wooosh, Send!","contact_map_title":"Event Venue : Auditorium Andi Hakim Nasution, IPB University","footer_nav_cepat":"Quick Navigation","footer_hubungi_kami":"Connect With Us","footer_copyright_line1":"\xa9 2025 Student Executive Board Vocational School IPB University. All rights reserved.","footer_copyright_line2":"Empowered by Inspiration, Driven by Innovation.","sponsorship_combined_title":"Become Our Partner","sponsorship_combined_subtitle":"Join us in empowering digital creativity and connect with a vibrant, innovative community. We have exciting opportunities for collaboration.","sponsorship_proposal_title":"Sponsorship Proposal","sponsorship_sponsor_title":"Become a Sponsor","sponsorship_card_desc":"Support the next wave of digital talent and gain prominent exposure. View our proposal for detailed partnership tiers and benefits.","sponsorship_card_button_contact":"<i class=\\"fab fa-whatsapp\\"></i> Contact Majesty","medpar_card_title":"Become a Media Partner","medpar_card_desc":"Collaborate with us to share the stories of innovation and creativity from Portal 7. Let\'s amplify our reach together.","medpar_card_button_contact":"<i class=\\"fab fa-whatsapp\\"></i> Contact Griffith","competition_hub_page_title_meta":"Competition Hub - Portal 7 Challenges","competition_hub_hero_title_main":"The Arenas of Innovation","competition_hub_hero_subtitle":"This is where your ideas take form and your skills are put to the test. Explore our competition branches, find your passion, and create to make an impact.","timer_title":"Submission Deadline","competition_uiux_title":"UI/UX Design Competition","sub_themes_title":"Sub-Themes","sdg_2_title_full":"Feeding Fair Future (SDG 2: Zero Hunger)","sdg_4_title_full":"Learning That Listens (SDG 4: Quality Education)","sdg_7_title_full":"Every Watt Counts (SDG 7: Affordable and Clean Energy)","assessment_criteria_title":"Assessment Criteria","competition_uiux_c1_name":"Problem & SDG Impact","competition_uiux_c1_value":"25%","competition_uiux_c2_name":"Design Aesthetics","competition_uiux_c2_value":"25%","competition_uiux_c3_name":"Creativity & Innovation","competition_uiux_c3_value":"20%","competition_uiux_c4_name":"UX Flow & Usability","competition_uiux_c4_value":"30%","prize_pool_title":"Prize Pool","prize_pool_uiux":"IDR 6,000,000","contact_person_title":"Contact Person","cp_uiux_name":"Contact Farhan","register_now_button":"Register for UI/UX <i class=\\"fas fa-arrow-right\\"></i>","competition_poster_title":"Digital Campaign Poster","competition_poster_c1_name":"Creativity","competition_poster_c1_value":"30%","competition_poster_c2_name":"Theme Alignment","competition_poster_c2_value":"30%","competition_poster_c3_name":"Originality","competition_poster_c3_value":"20%","competition_poster_c4_name":"Rule Compliance","competition_poster_c4_value":"20%","prize_pool_poster":"IDR 5,000,000","cp_poster_name":"Contact Syifa","register_now_button_poster":"Register for Poster <i class=\\"fas fa-arrow-right\\"></i>","competition_short_movie_title":"Short Movie Competition","competition_short_movie_c1_name":"Creativity","competition_short_movie_c1_value":"20%","competition_short_movie_c2_name":"Storytelling","competition_short_movie_c2_value":"30%","competition_short_movie_c3_name":"Visuals","competition_short_movie_c3_value":"25%","competition_short_movie_c4_name":"Theme Alignment","competition_short_movie_c4_value":"25%","prize_pool_movie":"IDR 6,000,000","cp_movie_name":"Contact Naurah","register_now_button_movie":"Register for Short Movie <i class=\\"fas fa-arrow-right\\"></i>","seminar_page_title_meta":"Seminar Portal 7 - Inspiration & Digital Innovation","seminar_hero_title_main":"PORTAL","seminar_hero_title_accent":"7","seminar_hero_title_series":"SEMINAR","seminar_hero_subtitle":"Unlock Insights: Engaging Talk Shows, Exclusive Coaching, and a Spectacular Awarding Night!","seminar_series_events_title":"Seminar & Event Series","seminar_talkshow_title":"Inspiring Talkshow: Digital Frontiers","seminar_talkshow_date":"<i class=\\"far fa-calendar-alt\\"></i> Saturday, October 11, 2025 (Awarding Day)","seminar_talkshow_desc":"Dive into the latest insights from leaders in digital technology, design, and creativity. Expand your horizons and ignite your innovative spirit.","seminar_speaker_wow_tag":"WOW! GUEST","seminar_mysterious_guest_name":"An Exciting & Mysterious Guest Star!","seminar_mysterious_guest_role":"Renowned for groundbreaking work in the creative industry.","seminar_mysterious_guest_teaser":"Get ready for an unforgettable session that will spark your imagination!","seminar_other_speakers_button":"Other Featured Speakers <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_other_speaker_1":"Speaker Name 2 - Expertise (e.g., UI/UX Lead)","seminar_other_speaker_2":"Speaker Name 3 - Expertise (e.g., Pro Content Creator)","seminar_location_note":"Location: [To Be Announced / Virtual Platform] <br><em>Open to the public and competition participants.</em>","seminar_coaching_title":"Coaching Clinic & Pitching Day","seminar_coaching_date":"<i class=\\"far fa-calendar-alt\\"></i> Late September 2025 (Exact Date TBA)","seminar_coaching_desc":"An exclusive session for the top 10 finalists. Receive direct guidance to perfect your project and polish your final presentation.","seminar_coaching_focus_button":"Coaching Focus <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_coaching_focus_1":"Idea Development & Storytelling Mastery","seminar_coaching_focus_2":"Effective Presentation & Pitching Techniques","seminar_coaching_focus_3":"Digital Product/Work Strategy","seminar_coaching_note":"<em>Exclusive for Portal 7 Competition Finalists.</em>","seminar_awarding_title":"Awarding Night & Grand Networking","seminar_awarding_date":"<i class=\\"far fa-calendar-alt\\"></i> Saturday, October 11, 2025","seminar_awarding_desc":"The pinnacle of Portal 7! Celebrate achievements, witness the crowning of champions, and connect with fellow creators and industry professionals.","seminar_awarding_agenda_button":"Main Agenda <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_awarding_agenda_1":"Winner Announcements (All Categories)","seminar_awarding_agenda_2":"Prize & Certificate Ceremony","seminar_awarding_agenda_3":"Dynamic Networking Session","seminar_awarding_agenda_4":"Special Entertainment","seminar_awarding_note":"Attended by finalists, judges, speakers, and invited guests.","seminar_cta_title":"Ready to be Inspired?","seminar_cta_subtitle":"Details for seminar registration (if separate from the competition) or ticket information will be announced soon. Stay tuned to our social media!","seminar_cta_button":"View Competition Registration","read_more_text":"Read More","read_less_text":"Read Less","uiux_detail_page_title_meta":"UI/UX Competition Technical Guide - Portal 7","uiux_detail_hero_title":"Final Technical Guide: UI/UX Competition","uiux_detail_hero_subtitle":"This document is the official technical guide, updated according to the change to a team-based competition system. All participants are expected to follow this guide in preparing their submissions.","uiux_detail_submission_title":"A. Submission Requirements","uiux_detail_submission_intro":"Each team is required to submit the following three main components:","uiux_detail_submission_item1":"High-Fidelity Figma Prototype Link (View-Only Access).","uiux_detail_submission_item2":"Presentation Pitch Deck (.PPT or .PDF Format).","uiux_detail_submission_item3":"Demonstration Video (YouTube/Google Drive Link).","uiux_detail_pitchdeck_title":"B. Detailed Pitch Deck Guide (Max. 25 Slides)","uiux_detail_pitchdeck_intro":"The Pitch Deck is a primary assessment component that must narrate your team\'s entire process, from idea to solution.","uiux_detail_pd_cover_title":"1. Cover & Team Identity","uiux_detail_pd_cover_item1":"Work Title & Team Name.","uiux_detail_pd_cover_item2":"Team Identity: Include the full names of all members (2-3 people) along with their main roles/contributions in the project (e.g., UX Researcher, UI Designer, Project Manager).","uiux_detail_pd_cover_item3":"The chosen sub-theme and SDG.","uiux_detail_pd_research_title":"2. Research & Idea Validation","uiux_detail_pd_research_bg_label":"Background & Problem:","uiux_detail_pd_research_bg_desc":"Explain the context, urgency, and specific problem you aim to solve.","uiux_detail_pd_research_method_label":"Research Method","uiux_badge_mandatory":"Mandatory: Min. 1","uiux_detail_pd_research_method_desc":"To validate your problem, choose and conduct at least ONE of the following research methods:","uiux_detail_pd_research_method1":"<strong>User Interview:</strong> Conduct in-depth interviews with 3-5 people who are your target audience.","uiux_detail_pd_research_method2":"<strong>Online Survey:</strong> Distribute an online questionnaire to obtain quantitative data.","uiux_detail_pd_research_method3":"<strong>Competitor Analysis:</strong> Analyze 2-3 existing similar products/applications to find their strengths and weaknesses.","uiux_detail_pd_research_method4":"<strong>Secondary Research (Desk Research):</strong> Collect and analyze existing data, articles, journals, or reports to support your argument about the urgency of the problem.","uiux_detail_pd_research_method5":"<strong>Forum & Review Analysis:</strong> Dig for insights from reviews on the App Store/Play Store or discussions in online forums (like Reddit, etc.) to find real user complaints and needs.","uiux_detail_pd_research_results_label":"Research Findings & Persona:","uiux_detail_pd_research_results_desc":"Present the key findings from your research and summarize them in the form of:","uiux_detail_pd_research_persona":"<strong>User Persona:</strong> One representative fictional user profile.","uiux_detail_pd_research_painpoints":"<strong>Pain Points:</strong> 3-5 main difficulties faced by the persona.","uiux_detail_pd_ideation_title":"3. Ideation & Solution Priority","uiux_detail_pd_ideation_item1":"Show how your team brainstormed to generate solution ideas.","uiux_detail_pd_ideation_item2":"Explain the main features you propose and provide reasons why these features are a priority.","uiux_detail_pd_userflow_title":"4. User Flow","uiux_detail_pd_userflow_item1":"Illustrate the most crucial user interaction flow in using your solution, from start to goal achievement.","uiux_detail_pd_hifi_title":"5. Design Showcase (High-Fidelity Screens)","uiux_detail_pd_hifi_item1":"Present several of the most representative screens from your application.","uiux_detail_pd_hifi_item2":"Also, include a simple Design System (Colors, Typography, Icons) that you used to maintain consistency.","uiux_detail_pd_vision_title":"6. Vision & Development Potential","uiux_detail_pd_vision_intro":"Explain the long-term vision of your project. You can choose 1-2 of the areas below that are most relevant to describe:","uiux_detail_pd_vision_item1":"<strong>Product Evolution:</strong> What\'s the next big feature? How will this product evolve in the next year?","uiux_detail_pd_vision_item2":"<strong>Growth & Outreach:</strong> How will you reach more users or collaborate with other parties?","uiux_detail_pd_vision_item3":"<strong>Sustainable Impact:</strong> How will you measure the success of your project\'s social impact?","uiux_detail_pd_closing_title":"7. Closing & Prototype Link","uiux_detail_pd_closing_item1":"Close your presentation with a strong conclusion.","uiux_detail_pd_closing_item2":"Re-include the view-only link to your interactive prototype in Figma.","uiux_detail_video_title":"C. Detailed Demonstration Video Guide","uiux_detail_video_intro":"The demonstration video is a mandatory component aimed at showcasing the function and value of your solution visually and engagingly.","uiux_detail_video_format_title":"1. Duration & Format","uiux_detail_video_format_item1":"Maximum duration: 3 minutes.","uiux_detail_video_format_item2":"Minimum video resolution of 1080p (Full HD) with MP4 file format.","uiux_detail_video_audio_title":"2. Audio & Language","uiux_detail_video_audio_item1":"Narration (voice-over) in English with clear audio quality is mandatory.","uiux_detail_video_audio_item2":"Videos without narration or with only music/text will not be judged maximally.","uiux_detail_video_structure_title":"3. Video Structure & Content (Sequential Order Required)","uiux_detail_video_structure_intro_title":"Opening (0-20 seconds):","uiux_detail_video_structure_intro_item1":"Introduce the project title, team name, and all members.","uiux_detail_video_structure_intro_item2":"State the problem and the SDG being addressed.","uiux_detail_video_structure_intro_item3":"Display the Portal 7 & Ditmawa logos.","uiux_detail_video_structure_demo_title":"Scenario-Based Demonstration (\xb1 2 minutes):","uiux_detail_video_structure_demo_item1":"Must show one most crucial user flow from start to finish.","uiux_detail_video_structure_demo_item2":"Narrate the scenario being performed by the user, not just randomly clicking buttons.","uiux_detail_video_structure_outro_title":"Closing (\xb1 30 seconds):","uiux_detail_video_structure_outro_item1":"Provide a brief statement about the expected impact of your solution.","uiux_detail_video_structure_outro_item2":"End the video with a call-to-action or hope for future development.","uiux_detail_appendix_title":"D. Appendix: Research Proof Format","uiux_badge_recommended":"Recommended","uiux_detail_appendix_intro":"To strengthen your arguments and validation, it is highly recommended to include research proof as an appendix at the end of your presentation (within the 25-slide limit). Here are the suggested formats:","uiux_detail_appendix_interview_title":"For User Interviews:","uiux_detail_appendix_interview_item1":"<strong>Documentation:</strong> Screenshot of the conversation (chat) or a photo of the interview session (interviewee\'s face may be blurred for privacy).","uiux_detail_appendix_interview_item2":"<strong>Summary:</strong> A simple table containing a list of key questions and a summary of the most important answers or quotes from the interviewees.","uiux_detail_appendix_survey_title":"For Short Surveys:","uiux_detail_appendix_survey_item1":"<strong>Link & Demographics:</strong> Include a link to the active survey (e.g., Google Forms) and a summary of respondent demographics (e.g., \\"50 respondents, 60% students, 40% workers\\").","uiux_detail_appendix_survey_item2":"<strong>Key Results:</strong> Screenshot 2-3 of the most relevant charts or diagrams from your survey results that support your main arguments.","uiux_detail_appendix_secondary_title":"For Secondary Research:","uiux_detail_appendix_secondary_item1":"<strong>List of Sources:</strong> Create a list of the sources you used (e.g., Article/Report Title, Author, Year, and Link). 3-5 of the most relevant sources are sufficient.","uiux_detail_appendix_forum_title":"For Forum & Review Analysis:","uiux_detail_appendix_forum_item1":"<strong>Screenshot Collection:</strong> Present 3-5 of the most representative screenshots of reviews (from App Store/Play Store) or comments/discussions (from online forums). Highlight or mark the most important parts of the text."},"id":{"nav_beranda":"Beranda","nav_tentang_portal":"Tentang Portal <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_tentang_kami":"Tentang Kami","nav_highlight":"Highlights","nav_sdg_commitment":"Komitmen SDG","nav_linimasa":"Linimasa","nav_guest_stars":"Guest Star","nav_peserta":"Siapa Peserta?","nav_faq":"FAQ","nav_sponsorship":"Join Partnership","nav_event":"Event <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_kompetisi":"Kompetisi","nav_seminar":"Seminar","nav_media":"Media <i class=\\"fas fa-chevron-down dropdown-icon\\"></i>","nav_blog":"Blog","nav_gallery":"Galeri","nav_kontak_kami":"Kontak Kami","nav_pendaftaran":"Pendaftaran","lang_toggle":"EN","index_page_title_meta":"Portal 7: Empower Digital - Halaman Utama Resmi","hero_tagline":"Embrace Your Potential: Empowered by Inspiration, Driven by Innovation","hero_countdown_hari":"Hari","hero_countdown_jam":"Jam","hero_countdown_menit":"Menit","hero_countdown_detik":"Detik","hero_button_daftar":"Daftar Sekarang","hero_button_what_is":"What is Portal?","event_started_message":"EVENT TELAH DIMULAI!","about_title":"Tentang Portal 7","about_what_is_portal_title":"Apa itu Portal 7?","about_what_is_portal_p1":"Di era digital yang terus berkembang, generasi muda memiliki peran penting sebagai agen perubahan. Portal 7 hadir sebagai ruang ekspresi dan inovasi digital yang mendorong peserta untuk tidak hanya menciptakan karya menarik secara visual, tetapi juga memiliki nilai keberlanjutan dan berdampak sosial, sejalan dengan Sustainable Development Goals (SDGs).","about_what_is_portal_p2":"Diselenggarakan oleh BEM Sekolah Vokasi IPB University, Portal 7 menjadi wadah untuk menghubungkan ide, memperluas wawasan, dan membentuk kreator digital yang inspiratif, solutif, dan siap menghadapi tantangan global melalui kekuatan inovasi.","inspire_framework_title":"INSPIRE Framework: Landasan Visi & Misi Kami","inspire_i1":"Inspirasi","inspire_i1_desc":"Memicu ide-ide baru dan semangat berkarya tanpa batas.","inspire_n":"Networking","inspire_n_desc":"Membangun koneksi dan kolaborasi yang kuat dan berkelanjutan.","inspire_s":"Solusi","inspire_s_desc":"Mendorong penciptaan solusi kreatif untuk tantangan nyata.","inspire_p":"Potensi","inspire_p_desc":"Menggali dan memaksimalkan potensi unik setiap individu.","inspire_i2":"Inovasi","inspire_i2_desc":"Menghadirkan terobosan baru dalam teknologi dan kreativitas digital.","inspire_r":"Relevansi","inspire_r_desc":"Menghubungkan pembelajaran dengan kebutuhan industri dan masyarakat.","inspire_e":"Empowerment","inspire_e_desc":"Memberdayakan generasi muda untuk mengambil peran dan menciptakan dampak positif.","sdg_commitment_title_span":"Komitmen Kami","sdg_commitment_title_main":"untuk Tujuan Global","sdg_commitment_subtitle":"Portal 7 secara aktif mendukung Tujuan Pembangunan Berkelanjutan melalui inovasi digital dan pemberdayaan pemuda.","sdg_2_title_1":"Tanpa","sdg_2_title_2":"Kelaparan","sdg_2_desc":"Mendorong solusi digital dan kampanye kesadaran yang berkontribusi pada ketahanan pangan, pertanian berkelanjutan, dan peningkatan gizi melalui proyek inovatif.","sdg_4_title":"Pendidikan Berkualitas","sdg_4_desc":"Menyediakan pelatihan keterampilan digital yang dapat diakses, seminar yang mendalam, dan platform kompetitif yang meningkatkan peluang belajar dan mempromosikan pendidikan seumur hidup untuk semua.","sdg_7_title":"Energi Bersih & Terjangkau","sdg_7_desc":"Mendorong proyek dan diskusi tentang pemanfaatan teknologi untuk solusi energi berkelanjutan, mempromosikan kesadaran, dan menginspirasi inovasi dalam adopsi energi bersih.","wow_guest_star_title_part1":"Guest Star","wow_guest_star_title_wow":"WOW!","wow_guest_star_title_part2":"Tahun Ini","wow_guest_star_subtitle":"Bersiaplah untuk terinspirasi oleh suara terdepan dan inovator tahun 2025!","mysterious_guest_name":"Guest Star Seru & Misterius!","mysterious_guest_title":"Dikenal atas karya terobosan di industri kreatif.","mysterious_guest_teaser":"Bersiaplah untuk sesi tak terlupakan yang akan memicu imajinasimu dan mendefinisikan ulang kemungkinan!","highlight_title_span":"Buka Potensi","highlight_title_main":"Superpower Digitalmu","highlight_subtitle":"Di sinilah kreativitas menyala dan inovasi melambung tinggi. Pilih arenmu, asah kemampuanmu.","highlight_arena_title_main":"Arena:","highlight_arena_title_accent":"Berkompetisi & Taklukkan","highlight_arena_intro":"Ukir legendamu. Tunjukkan bakatmu. Medan pertempuran digital terhebat menanti kejeniusanmu.","highlight_uiux_title":"Desain UI/UX","highlight_uiux_desc":"Ciptakan pengalaman digital intuitif yang memikat dan mengubah. Rancang masa depan, hari ini.","highlight_poster_title":"Poster Kampanye Digital","highlight_poster_desc":"Lepaskan simfoni visual. Buat poster yang tidak hanya berbicara, tetapi meneriakkan pesanmu.","highlight_movie_title":"Film Pendek","highlight_movie_desc":"Ceritakan kisah yang mengubah dunia dalam hitungan menit. Arahkan visimu, pikat hati, inspirasi tindakan.","highlight_prize_label":"REBUT TOTAL HADIAH SPEKTAKULER","highlight_prize_details":"*Plus hak pamer & kemuliaan abadi!","highlight_knowledge_title_main":"Pusat Pengetahuan:","highlight_knowledge_title_accent":"Belajar & Tingkatkan Diri","highlight_knowledge_intro":"Nyalakan rasa ingin tahumu. Serap wawasan yang mengubah permainan dari para master kerajinan digital.","highlight_mentorship_span":"Mentorship Eksklusif:","highlight_mentorship_text":"10 Finalis Terbaik Dibimbing oleh Profesional","highlight_pitch_day_span":"Pitch Day Penuh Kekuatan:","highlight_pitch_day_text":"Sorot Visi Terobosannmu","highlight_awarding_span":"Penganugerahan Akbar:","highlight_awarding_text":"Rayakan Kemenangan & Saksikan Kecemerlangan","highlight_future_talks_span":"Obrolan Masa Depan:","highlight_future_talks_text":"Pecahkan Tren bersama Titan Industri","highlight_button_explore":"Jelajahi Tantangan <i class=\\"fas fa-arrow-right btn-icon\\"></i>","highlight_button_discover":"Temukan Daftar Pengisi Acara <i class=\\"fas fa-arrow-right btn-icon\\"></i>","timeline_title":"Linimasa Kegiatan","timeline_1_date":"10 Juni \u2013 10 Juli 2025","timeline_1_event":"Pendaftaran Peserta","timeline_2_date":"12 Agustus 2025","timeline_2_event":"Technical Meeting","timeline_3_date":"28 Agustus \u2013 3 September 2025","timeline_3_event":"Pengumpulan Karya","timeline_4_date":"4 \u2013 10 September 2025","timeline_4_event":"Penjurian Karya","timeline_5_date":"12 September 2025","timeline_5_event":"Pengumuman 10 Karya Terbaik (Semifinalis)","timeline_6_date":"13 \u2013 15 September 2025","timeline_6_event":"Coaching & Presentasi Top 10","timeline_7_date":"11 Oktober 2025","timeline_7_event":"Pengumuman Pemenang (Seminar & Awarding Day)","past_guest_stars_title":"Guest Star Sebelumnya","past_guest_stars_subtitle":"Kami telah menghadirkan para kreator digital inspiratif:","kevin_anggara_name":"\uD83C\uDFAC Kevin Anggara","kevin_anggara_role":"Penulis, YouTuber","aulion_name":"\uD83C\uDFA8 Aulion","aulion_role":"Seniman visual & kreator konten","jovial_da_lopez_name":"\uD83C\uDFA5 Jovial da Lopez","jovial_da_lopez_role":"Sutradara, Cameo Project","benazio_putra_name":"\uD83E\uDDE0 Benazio Putra (Bena Kribo)","benazio_putra_role":"Pengusaha & kreator konten edukatif","registration_title_span":"Daftar","registration_title_main":"Sekarang!","registration_subtitle":"Jangan lewatkan kesempatan emas untuk menjadi bagian dari Portal 7! Pilih batch pendaftaranmu dan bersiaplah untuk berinovasi.","registration_flow_title":"Alur Registrasi 2025","registration_batch1_title":"Gelombang 1","registration_batch_status_soon":"Segera Dibuka","registration_batch_status_open":"Dibuka","registration_batch_note":"Link pendaftaran akan aktif sesuai jadwal. Pastikan kamu tidak ketinggalan!","registration_form_status_title":"Pendaftaran Belum Dibuka","registration_form_status_message":"Portal pendaftaran akan terbuka sesuai jadwal batch. Saatnya persiapkan dirimu!","registration_form_status_timer":"Nantikan pembukaan Batch 1!","registration_guidebook_button":"<i class=\\"fas fa-book-open\\"></i> Baca Guidebook Sekarang!","registration_process_title":"Proses Pendaftaran & Pengumpulan Karya","registration_process_info":"Pendaftaran dilakukan online melalui link di sebelah kanan. Detail lengkap pengumpulan karya dan dokumen lain tersedia di dalam guidebook.","registration_choose_comp_title":"Pilih Arenamu","registration_click_to_register":"Klik untuk membuka formulir pendaftaran","faq_title":"FAQ \u2013 Pertanyaan Umum","faq_q1":"Apakah kompetisinya berbayar?","faq_a1":"Ya, terdapat biaya registrasi yang tertera dalam guidebook.","faq_q2":"Apakah peserta bisa mendaftar lebih dari satu cabang lomba?","faq_a2":"Bisa, asalkan sesuai ketentuan dan mengisi formulir untuk masing-masing cabang.","faq_q3":"Apakah harus berasal dari IPB?","faq_a3":"Tidak. Portal 7 terbuka untuk peserta dari seluruh Indonesia dan internasional.","faq_q4":"Apakah semua peserta akan mendapat sertifikat?","faq_a4":"Ya, semua peserta yang memenuhi ketentuan akan mendapatkan e-sertifikat.","faq_q5":"Bagaimana cara mengakses platform pengumpulan karya?","faq_a5":"Detail dan link pengumpulan akan diberikan setelah peserta menyelesaikan registrasi.","who_can_join_title":"Siapa Saja yang Bisa Ikut?","who_can_join_subtitle":"Terbuka untuk semua kalangan dengan minat di dunia kreatif digital!","who_can_join_list_item1":"<i class=\\"fas fa-university\\"></i> Mahasiswa D3/D4/S1 dari seluruh Indonesia & internasional","who_can_join_team_info":"Peserta dapat mendaftar sebagai individu atau tim. Tidak memerlukan pengalaman sebelumnya, hanya kreativitas!","cta_bottom_title":"Siap untuk mencipta, berkompetisi, dan terhubung?","cta_bottom_subtitle":"Gabung sekarang dan wujudkan visimu melalui karya digital bersama Portal 7.","cta_bottom_button_register":"Daftar Sekarang","cta_bottom_button_guidebook":"Unduh Guidebook","media_section_title":"Berita & Media Portal 7","media_section_subtitle":"Ikuti perkembangan terbaru, dapatkan insight kreatif, dan lihat kembali momen-momen tak terlupakan dari Portal 7!","media_articles_title":"Artikel & Insight","media_articles_loading":"Memuat artikel...","media_articles_view_all":"Lihat Semua Artikel","media_gallery_title":"Galeri Foto & Video","media_gallery_tab_photos":"Foto Dokumentasi","media_gallery_tab_videos":"Video Highlights","media_gallery_photos_loading":"Memuat foto...","media_gallery_videos_loading":"Memuat video...","media_gallery_view_all":"Buka Galeri Lengkap","media_partners_title":"Mitra Media Kami","media_partners_loading":"Memuat mitra & sponsor...","contact_title_span":"Ada Pertanyaan?","contact_subtitle":"Kami siap mendengar ide brilian atau menjawab kebingunganmu. Yuk, hubungi kami!","contact_direct_chat_title":"Ngobrol Langsung","contact_pic_whatsapp":"PIC Portal 7 (WhatsApp):","contact_sponsorship":"Gabung Sponsorship:","contact_medpar":"Gabung Mitra Media:","contact_proposal":"Proposal Sponsorship:","contact_proposal_link_text":"Unduh di Sini","contact_official_email":"Email Resmi:","contact_follow_us_title":"Ikuti Jejak Digital Kami","contact_send_message_title":"Kirim Pesanmu","contact_form_name_label":"Nama Lengkap Kamu","contact_form_email_label":"Alamat Email Aktif","contact_form_message_label":"Isi Pesanmu Disini...","contact_form_button_send":"Wuzzz, Kirim!","contact_map_title":"Venue Acara : Auditorium Andi Hakim Nasution, IPB University","footer_nav_cepat":"Navigasi Cepat","footer_hubungi_kami":"Terhubung Dengan Kami","footer_copyright_line1":"\xa9 2025 Badan Eksekutif Mahasiswa Sekolah Vokasi IPB University. Hak cipta dilindungi.","footer_copyright_line2":"Diberdayakan oleh Inspirasi, Didorong oleh Inovasi.","sponsorship_combined_title":"Jadilah Mitra Kami","sponsorship_combined_subtitle":"Bergabunglah dengan kami dalam memberdayakan kreativitas digital dan terhubung dengan komunitas yang dinamis dan inovatif. Kami memiliki peluang kolaborasi yang menarik.","sponsorship_proposal_title":"Proposal Sponsorship","sponsorship_sponsor_title":"Menjadi Sponsor","sponsorship_card_desc":"Dukung gelombang talenta digital berikutnya dan dapatkan eksposur yang menonjol. Lihat proposal kami untuk tingkatan dan manfaat kemitraan yang terperinci.","sponsorship_card_button_contact":"<i class=\\"fab fa-whatsapp\\"></i> Hubungi Majesty","medpar_card_title":"Menjadi Mitra Media","medpar_card_desc":"Berkolaborasi dengan kami untuk berbagi kisah inovasi dan kreativitas dari Portal 7. Mari kita perluas jangkauan kita bersama.","medpar_card_button_contact":"<i class=\\"fab fa-whatsapp\\"></i> Hubungi Griffith","competition_hub_page_title_meta":"Pusat Kompetisi - Tantangan Portal 7","competition_hub_hero_title_main":"Arena Inovasi","competition_hub_hero_subtitle":"Di sinilah idemu terbentuk dan keahlianmu diuji. Jelajahi cabang kompetisi kami, temukan pasionmu, dan ciptakan karya untuk membuat dampak.","timer_title":"Batas Waktu Pengumpulan","competition_uiux_title":"Kompetisi Desain UI/UX","sub_themes_title":"Sub-Tema","sdg_2_title_full":"Masa Depan Pangan yang Adil (SDG 2: Tanpa Kelaparan)","sdg_4_title_full":"Pembelajaran yang Mendengar (SDG 4: Pendidikan Berkualitas)","sdg_7_title_full":"Setiap Watt Berharga (SDG 7: Energi Bersih dan Terjangkau)","assessment_criteria_title":"Indikator Penilaian","competition_uiux_c1_name":"Masalah & Dampak SDG","competition_uiux_c1_value":"25%","competition_uiux_c2_name":"Estetika Desain","competition_uiux_c2_value":"25%","competition_uiux_c3_name":"Kreativitas & Inovasi","competition_uiux_c3_value":"20%","competition_uiux_c4_name":"Alur UX & Kegunaan","competition_uiux_c4_value":"30%","prize_pool_title":"Total Hadiah","prize_pool_uiux":"Rp6.000.000","contact_person_title":"Narahubung","cp_uiux_name":"Hubungi Farhan","register_now_button":"Daftar UI/UX <i class=\\"fas fa-arrow-right\\"></i>","competition_poster_title":"Poster Kampanye Digital","competition_poster_c1_name":"Kreativitas","competition_poster_c1_value":"30%","competition_poster_c2_name":"Kesesuaian Tema","competition_poster_c2_value":"30%","competition_poster_c3_name":"Orisinalitas","competition_poster_c3_value":"20%","competition_poster_c4_name":"Sesuai Aturan","competition_poster_c4_value":"20%","prize_pool_poster":"Rp5.000.000","cp_poster_name":"Hubungi Syifa","register_now_button_poster":"Daftar Poster <i class=\\"fas fa-arrow-right\\"></i>","competition_short_movie_title":"Kompetisi Film Pendek","competition_short_movie_c1_name":"Kreativitas","competition_short_movie_c1_value":"20%","competition_short_movie_c2_name":"Penceritaan","competition_short_movie_c2_value":"30%","competition_short_movie_c3_name":"Visual","competition_short_movie_c3_value":"25%","competition_short_movie_c4_name":"Kesesuaian Tema","competition_short_movie_c4_value":"25%","prize_pool_movie":"Rp6.000.000","cp_movie_name":"Hubungi Naurah","register_now_button_movie":"Daftar Film Pendek <i class=\\"fas fa-arrow-right\\"></i>","seminar_page_title_meta":"Seminar Portal 7 - Inspirasi & Inovasi Digital","seminar_hero_title_main":"PORTAL","seminar_hero_title_accent":"7","seminar_hero_title_series":"SEMINAR","seminar_hero_subtitle":"Buka Wawasan: Talkshow Menarik, Coaching Eksklusif, dan Malam Penganugerahan Spektakuler!","seminar_series_events_title":"Rangkaian Seminar & Acara","seminar_talkshow_title":"Talkshow Inspiratif: Batas Digital","seminar_talkshow_date":"<i class=\\"far fa-calendar-alt\\"></i> Sabtu, 11 Oktober 2025 (Hari Penganugerahan)","seminar_talkshow_desc":"Selami wawasan terbaru dari para pemimpin teknologi digital, desain, dan kreatif. Perluas cakrawala Anda dan sulut semangat inovatif Anda.","seminar_speaker_wow_tag":"WOW! GUEST","seminar_mysterious_guest_name":"Guest Star Seru & Misterius!","seminar_mysterious_guest_role":"Dikenal atas karya terobosan di industri kreatif.","seminar_mysterious_guest_teaser":"Bersiaplah untuk sesi tak terlupakan yang akan memicu imajinasimu!","seminar_other_speakers_button":"Pembicara Unggulan Lainnya <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_other_speaker_1":"Nama Pembicara 2 - Keahlian (mis., UI/UX Lead)","seminar_other_speaker_2":"Nama Pembicara 3 - Keahlian (mis., Kreator Konten Pro)","seminar_location_note":"Lokasi: [Akan Diumumkan / Platform Virtual] <br><em>Terbuka untuk umum dan peserta kompetisi.</em>","seminar_coaching_title":"Coaching Clinic & Pitching Day","seminar_coaching_date":"<i class=\\"far fa-calendar-alt\\"></i> Akhir September 2025 (Tanggal Pasti TBA)","seminar_coaching_desc":"Sesi eksklusif untuk 10 finalis terbaik. Terima bimbingan langsung untuk menyempurnakan proyek Anda dan mematangkan presentasi akhir Anda.","seminar_coaching_focus_button":"Fokus Coaching <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_coaching_focus_1":"Pengembangan Ide & Penguasaan Penceritaan","seminar_coaching_focus_2":"Teknik Presentasi & Pitching Efektif","seminar_coaching_focus_3":"Strategi Produk/Karya Digital","seminar_coaching_note":"<em>Eksklusif untuk Finalis Kompetisi Portal 7.</em>","seminar_awarding_title":"Malam Penganugerahan & Networking Akbar","seminar_awarding_date":"<i class=\\"far fa-calendar-alt\\"></i> Sabtu, 11 Oktober 2025","seminar_awarding_desc":"Puncak Portal 7! Rayakan pencapaian, saksikan penobatan para juara, dan terhubung dengan sesama kreator dan profesional industri.","seminar_awarding_agenda_button":"Agenda Utama <i class=\\"fas fa-chevron-down accordion-icon\\"></i>","seminar_awarding_agenda_1":"Pengumuman Pemenang (Semua Kategori)","seminar_awarding_agenda_2":"Upacara Penyerahan Hadiah & Sertifikat","seminar_awarding_agenda_3":"Sesi Networking Dinamis","seminar_awarding_agenda_4":"Hiburan Spesial","seminar_awarding_note":"Dihadiri oleh finalis, juri, pembicara, dan tamu undangan.","seminar_cta_title":"Siap Terinspirasi?","seminar_cta_subtitle":"Detail pendaftaran seminar (jika terpisah dari kompetisi) atau informasi tiket akan segera diumumkan. Pantau terus media sosial kami!","seminar_cta_button":"Lihat Pendaftaran Kompetisi","read_more_text":"Baca Selengkapnya","read_less_text":"Baca Sedikit","uiux_detail_page_title_meta":"Panduan Teknis Kompetisi UI/UX - Portal 7","uiux_detail_hero_title":"Panduan Teknis Final: Kompetisi UI/UX","uiux_detail_hero_subtitle":"Dokumen ini merupakan panduan teknis resmi yang telah diperbarui sesuai dengan perubahan sistem kompetisi menjadi format tim. Semua peserta diharapkan untuk mengikuti panduan ini dalam mempersiapkan karya mereka.","uiux_detail_submission_title":"A. Ketentuan Pengumpulan Karya","uiux_detail_submission_intro":"Setiap tim wajib mengumpulkan tiga komponen utama berikut:","uiux_detail_submission_item1":"Link Prototype Figma High-Fidelity (Akses View-Only).","uiux_detail_submission_item2":"Pitch Deck Presentasi (Format .PPT atau .PDF).","uiux_detail_submission_item3":"Video Demonstrasi (Link YouTube/Google Drive).","uiux_detail_pitchdeck_title":"B. Panduan Detail Pitch Deck (Maks. 25 Slide)","uiux_detail_pitchdeck_intro":"Pitch Deck adalah komponen utama penilaian yang harus menceritakan keseluruhan proses tim Anda, dari ide hingga solusi.","uiux_detail_pd_cover_title":"1. Cover & Identitas Tim","uiux_detail_pd_cover_item1":"Judul Karya & Nama Tim.","uiux_detail_pd_cover_item2":"Identitas Tim: Cantumkan nama lengkap semua anggota (2-3 orang) beserta peran/kontribusi utamanya dalam proyek (Contoh: UX Researcher, UI Designer, Project Manager).","uiux_detail_pd_cover_item3":"Subtema dan SDG yang diangkat.","uiux_detail_pd_research_title":"2. Riset & Validasi Ide","uiux_detail_pd_research_bg_label":"Latar Belakang & Masalah:","uiux_detail_pd_research_bg_desc":"Jelaskan konteks, urgensi, dan masalah spesifik yang ingin Anda selesaikan.","uiux_detail_pd_research_method_label":"Metode Riset","uiux_badge_mandatory":"Wajib: Min. 1","uiux_detail_pd_research_method_desc":"Untuk memvalidasi masalah Anda, pilih dan lakukan minimal SATU metode riset berikut:","uiux_detail_pd_research_method1":"<strong>Wawancara Pengguna (User Interview):</strong> Lakukan wawancara mendalam dengan 3-5 orang yang menjadi target audiens.","uiux_detail_pd_research_method2":"<strong>Survei Singkat (Online Survey):</strong> Sebarkan kuesioner online untuk mendapatkan data kuantitatif.","uiux_detail_pd_research_method3":"<strong>Analisis Kompetitor (Competitor Analysis):</strong> Analisis 2-3 produk/aplikasi sejenis yang sudah ada untuk menemukan kelebihan dan kekurangannya.","uiux_detail_pd_research_method4":"<strong>Riset Sekunder (Desk Research):</strong> Kumpulkan dan analisis data, artikel, jurnal, atau laporan yang sudah ada untuk mendukung argumen tentang urgensi masalah Anda.","uiux_detail_pd_research_method5":"<strong>Analisis Forum & Ulasan (Forum & Review Analysis):</strong> Gali insight dari ulasan di App Store/Play Store atau diskusi di forum online (seperti Reddit, Kaskus, dll.) untuk menemukan keluhan dan kebutuhan nyata dari pengguna.","uiux_detail_pd_research_results_label":"Hasil Riset & Persona:","uiux_detail_pd_research_results_desc":"Sajikan temuan kunci dari riset Anda dan rangkum dalam bentuk:","uiux_detail_pd_research_persona":"<strong>User Persona:</strong> Satu profil pengguna fiktif yang representatif.","uiux_detail_pd_research_painpoints":"<strong>Pain Points:</strong> 3-5 kesulitan utama yang dihadapi oleh persona.","uiux_detail_pd_ideation_title":"3. Ideation & Prioritas Solusi","uiux_detail_pd_ideation_item1":"Tunjukkan bagaimana tim Anda melakukan brainstorming untuk menghasilkan ide solusi.","uiux_detail_pd_ideation_item2":"Jelaskan fitur-fitur utama yang Anda usulkan dan berikan alasan mengapa fitur tersebut menjadi prioritas.","uiux_detail_pd_userflow_title":"4. Alur Pengguna (User Flow)","uiux_detail_pd_userflow_item1":"Gambarkan alur interaksi pengguna yang paling krusial dalam menggunakan solusi Anda, dari awal hingga tujuan tercapai.","uiux_detail_pd_hifi_title":"5. Tampilan Desain (High-Fidelity Screens)","uiux_detail_pd_hifi_item1":"Sajikan beberapa tampilan layar (screens) yang paling representatif dari aplikasi Anda.","uiux_detail_pd_hifi_item2":"Sertakan juga Design System sederhana (Warna, Tipografi, Ikon) yang Anda gunakan untuk menjaga konsistensi.","uiux_detail_pd_vision_title":"6. Visi & Potensi Pengembangan","uiux_detail_pd_vision_intro":"Jelaskan visi jangka panjang dari proyek Anda. Anda dapat memilih 1-2 area di bawah ini yang paling relevan untuk dijelaskan:","uiux_detail_pd_vision_item1":"<strong>Evolusi Produk:</strong> Apa fitur besar selanjutnya? Bagaimana produk ini akan berkembang dalam 1 tahun ke depan?","uiux_detail_pd_vision_item2":"<strong>Pertumbuhan & Jangkauan:</strong> Bagaimana cara Anda menjangkau lebih banyak pengguna atau berkolaborasi dengan pihak lain?","uiux_detail_pd_vision_item3":"<strong>Dampak Berkelanjutan:</strong> Bagaimana Anda mengukur keberhasilan dampak sosial dari proyek Anda?","uiux_detail_pd_closing_title":"7. Penutup & Link Prototype","uiux_detail_pd_closing_item1":"Tutup presentasi Anda dengan kesimpulan yang kuat.","uiux_detail_pd_closing_item2":"Sertakan kembali link view-only ke prototipe interaktif Anda di Figma.","uiux_detail_video_title":"C. Panduan Detail Video Demonstrasi","uiux_detail_video_intro":"Video demonstrasi adalah komponen wajib yang bertujuan untuk menampilkan fungsi dan nilai dari solusi Anda secara visual dan menarik.","uiux_detail_video_format_title":"1. Durasi & Format","uiux_detail_video_format_item1":"Durasi maksimal: 3 menit.","uiux_detail_video_format_item2":"Resolusi video minimal 1080p (Full HD) dengan format file MP4.","uiux_detail_video_audio_title":"2. Audio & Bahasa","uiux_detail_video_audio_item1":"Wajib menggunakan narasi (voice-over) dalam Bahasa Inggris dengan kualitas audio yang jernih.","uiux_detail_video_audio_item2":"Video tanpa narasi atau hanya dengan musik/teks tidak akan dinilai maksimal.","uiux_detail_video_structure_title":"3. Struktur & Konten Video (Wajib Berurutan)","uiux_detail_video_structure_intro_title":"Pembukaan (0-20 detik):","uiux_detail_video_structure_intro_item1":"Perkenalkan judul proyek, nama tim, dan semua anggota.","uiux_detail_video_structure_intro_item2":"Sebutkan masalah dan SDG yang diangkat.","uiux_detail_video_structure_intro_item3":"Tampilkan logo Portal 7 & Ditmawa.","uiux_detail_video_structure_demo_title":"Demonstrasi Berbasis Skenario (\xb1 2 menit):","uiux_detail_video_structure_demo_item1":"Wajib menunjukkan satu alur pengguna (user flow) yang paling krusial dari awal hingga selesai.","uiux_detail_video_structure_demo_item2":"Ceritakan skenario yang sedang dijalankan oleh pengguna, bukan hanya mengklik tombol secara acak.","uiux_detail_video_structure_outro_title":"Penutup (\xb1 30 detik):","uiux_detail_video_structure_outro_item1":"Berikan pernyataan singkat mengenai dampak yang diharapkan dari solusi Anda.","uiux_detail_video_structure_outro_item2":"Tutup video dengan call-to-action atau harapan untuk pengembangan selanjutnya.","uiux_detail_appendix_title":"D. Lampiran: Format Bukti Riset","uiux_badge_recommended":"Disarankan","uiux_detail_appendix_intro":"Untuk memperkuat argumen dan validasi Anda, sangat disarankan untuk menyertakan lampiran bukti riset di akhir presentasi Anda (di dalam batas 25 slide). Berikut adalah format yang disarankan:","uiux_detail_appendix_interview_title":"Untuk Wawancara Pengguna:","uiux_detail_appendix_interview_item1":"<strong>Dokumentasi:</strong> Screenshot percakapan (chat) atau foto sesi wawancara (wajah narasumber boleh diblur untuk menjaga privasi).","uiux_detail_appendix_interview_item2":"<strong>Rangkuman:</strong> Tabel sederhana berisi daftar pertanyaan kunci dan rangkuman jawaban atau kutipan paling penting dari narasumber.","uiux_detail_appendix_survey_title":"Untuk Survei Singkat:","uiux_detail_appendix_survey_item1":"<strong>Tautan & Demografi:</strong> Cantumkan link survei yang masih aktif (misal: Google Forms) dan ringkasan demografi responden (misal: \\"50 responden, 60% mahasiswa, 40% pekerja\\").","uiux_detail_appendix_survey_item2":"<strong>Hasil Kunci:</strong> Screenshot 2-3 grafik atau diagram paling relevan dari hasil survei Anda yang mendukung argumen utama.","uiux_detail_appendix_secondary_title":"Untuk Riset Sekunder:","uiux_detail_appendix_secondary_item1":"<strong>Daftar Sumber:</strong> Buat daftar sumber yang Anda gunakan (misal: Judul Artikel/Laporan, Penulis, Tahun, dan Link). Cukup 3-5 sumber paling relevan.","uiux_detail_appendix_forum_title":"Untuk Analisis Forum & Ulasan:","uiux_detail_appendix_forum_item1":"<strong>Kumpulan Screenshot:</strong> Sajikan 3-5 screenshot ulasan (dari App Store/Play Store) atau komentar/diskusi (dari forum online) yang paling representatif. Beri highlight atau tanda pada bagian teks yang paling penting."}}');

},{}],"lF3WC":[function(require,module,exports,__globalThis) {
// Import all local images using the url: scheme.
// This tells Parcel to bundle the asset and return its public URL.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _img3203Jpg = require("url:./img/IMG_3203.jpg");
var _img3203JpgDefault = parcelHelpers.interopDefault(_img3203Jpg);
var _img3281Jpg = require("url:./img/IMG_3281.jpg");
var _img3281JpgDefault = parcelHelpers.interopDefault(_img3281Jpg);
var _img3227Jpg = require("url:./img/IMG_3227.jpg");
var _img3227JpgDefault = parcelHelpers.interopDefault(_img3227Jpg);
var _s0952298Jpg = require("url:./img/S0952298.jpg");
var _s0952298JpgDefault = parcelHelpers.interopDefault(_s0952298Jpg);
var _img3058Jpg = require("url:./img/IMG_3058.jpg");
var _img3058JpgDefault = parcelHelpers.interopDefault(_img3058Jpg);
var _img3376Jpg = require("url:./img/IMG_3376.jpg");
var _img3376JpgDefault = parcelHelpers.interopDefault(_img3376Jpg);
var _img3104Jpg = require("url:./img/IMG_3104.jpg");
var _img3104JpgDefault = parcelHelpers.interopDefault(_img3104Jpg);
var _rickrollJpg = require("url:./img/rickroll.jpg");
var _rickrollJpgDefault = parcelHelpers.interopDefault(_rickrollJpg);
var _medpartMicroitPng = require("url:./img/medpart-microit.png");
var _medpartMicroitPngDefault = parcelHelpers.interopDefault(_medpartMicroitPng);
var _medpartLikistaPng = require("url:./img/medpart-likista.png");
var _medpartLikistaPngDefault = parcelHelpers.interopDefault(_medpartLikistaPng);
var _medpartInfosvipbPng = require("url:./img/medpart-infosvipb.png");
var _medpartInfosvipbPngDefault = parcelHelpers.interopDefault(_medpartInfosvipbPng);
const mediaContent = {
    "blogArticles": [
        {
            "id": "artikel-1",
            "title": "UX/UI Trend Alert: Bento Grids Are Going Mainstream",
            "date": "7 June 2025",
            "author": "Team Portal IPB",
            "summary": "Inspired by Japanese bento boxes, this modular layout is reshaping digital interfaces in 2025. Here's why designers love it.",
            "image": "https://placehold.co/600x400/3B82F6/FFFFFF?text=Bento+Grids+Trend&font=montserrat",
            "link": "/blog-detail?id=artikel-1",
            "fullContentHTML": "<p>Bento Grids\u2014named after the clean and compact layout of bento lunch boxes\u2014are redefining user interfaces across websites and apps. Each card serves a clear purpose, whether it's a feature, call-to-action, or testimonial.</p><h2>Why Bento Grids Work</h2><p>They balance visual harmony with functional clarity. In competitions like Portal 7, using a Bento Grid layout can help communicate complex ideas in a structured, elegant way.</p>"
        },
        {
            "id": "artikel-2",
            "title": "The UX Design Trends You Can\u2019t Ignore in 2025",
            "date": "6 June 2025",
            "author": "Team Portal IPB",
            "summary": "From ethical design to inclusive interfaces and AI co-creation, these trends are shaping how we create for people in 2025.",
            "image": "https://placehold.co/600x400/EC4899/FFFFFF?text=UX+Trends+2025&font=montserrat",
            "link": "/blog-detail?id=artikel-2",
            "fullContentHTML": "<p>2025 is a year of intentional UX. We\u2019re seeing greater emphasis on accessibility, ethical tech, and personalization powered by AI. Designers are now co-creating with technology while maintaining their role as human storytellers.</p><h2>How You Can Apply This</h2><p>In Portal 7 competitions, think beyond aesthetics. Consider accessibility tools, diverse user needs, and how your UI/UX design can support ethical, meaningful digital experiences.</p>"
        },
        {
            "id": "artikel-3",
            "title": "From Puppets to Pixels: IPB Students Tackle Literacy Through Creativity",
            "date": "5 June 2025",
            "author": "Team Portal IPB",
            "summary": "IPB's BONA program shows how traditional storytelling and digital tools can combine to solve real-world challenges like childhood literacy.",
            "image": "https://placehold.co/600x400/F97316/FFFFFF?text=BONA+IPB+Project&font=montserrat",
            "link": "/blog-detail?id=artikel-3",
            "fullContentHTML": "<p>The BONA (Boneka Dongeng Anak) project blends puppet shows with digital storytelling to improve literacy among children. Created by IPB\u2019s Digital Communication students, it's a model of user-centered innovation with cultural roots.</p><h2>What You Can Learn</h2><p>Good design solves problems. Look for local or social issues that can inspire your competition entry, just like BONA did\u2014with empathy, creativity, and a clear message.</p>"
        },
        {
            "id": "artikel-4",
            "title": "Material You Comes to Wearables: What Designers Should Know",
            "date": "4 June 2025",
            "author": "Team Portal IPB",
            "summary": "Google's Wear OS 6 introduces Material 3 Expressive and deep personalization. Here's how this affects UI/UX in the wearable space.",
            "image": "https://placehold.co/600x400/10B981/FFFFFF?text=Wear+OS+6&font=montserrat",
            "link": "/blog-detail?id=artikel-4",
            "fullContentHTML": "<p>With the launch of Wear OS 6, designers can now create ultra-personalized experiences using Google's Material You system. Colors, components, and interactions adjust dynamically based on user preferences, making design more fluid than ever.</p><h2>Takeaway for Designers</h2><p>Adaptivity is key. Whether you\u2019re designing a smartwatch interface or a mobile app, consider how your UI could evolve in real-time to match user behavior, mood, or environment.</p>"
        }
    ],
    "gallery": {
        "photos": [
            {
                "id": "foto-1",
                "title": "Guest Speaker Session",
                "year": "2024",
                "thumbnailUrl": (0, _img3203JpgDefault.default),
                "fullUrl": (0, _img3203JpgDefault.default),
                "description": "Guest speaker Kevin Anggara sharing insights during the Portal 6 talkshow."
            },
            {
                "id": "foto-2",
                "title": "Certificate of Appreciation",
                "year": "2024",
                "thumbnailUrl": (0, _img3281JpgDefault.default),
                "fullUrl": (0, _img3281JpgDefault.default),
                "description": "Presenting a certificate of appreciation to guest speaker Kevin Anggara."
            },
            {
                "id": "foto-3",
                "title": "Audience Engagement",
                "year": "2024",
                "thumbnailUrl": (0, _img3227JpgDefault.default),
                "fullUrl": (0, _img3227JpgDefault.default),
                "description": "The audience listening intently during a Portal 6 seminar session."
            },
            {
                "id": "foto-4",
                "title": "Q&A Session",
                "year": "2024",
                "thumbnailUrl": (0, _s0952298JpgDefault.default),
                "fullUrl": (0, _s0952298JpgDefault.default),
                "description": "The Q&A session in full swing, fostering interactive discussion."
            },
            {
                "id": "foto-5",
                "title": "Participant Registration",
                "year": "2024",
                "thumbnailUrl": (0, _img3058JpgDefault.default),
                "fullUrl": (0, _img3058JpgDefault.default),
                "description": "Participants registering at the front desk, ready for the event."
            },
            {
                "id": "foto-6",
                "title": "Portal 6 Committee",
                "year": "2024",
                "thumbnailUrl": (0, _img3376JpgDefault.default),
                "fullUrl": (0, _img3376JpgDefault.default),
                "description": "The dedicated committee of Portal 6 posing for a group photo."
            },
            {
                "id": "foto-7",
                "title": "Enthusiastic Participants & Speakers",
                "year": "2024",
                "thumbnailUrl": (0, _img3104JpgDefault.default),
                "fullUrl": (0, _img3104JpgDefault.default),
                "description": "Speakers and participants sharing a moment of connection."
            }
        ],
        "videos": [
            {
                "id": "video-1",
                "title": "Company Profile Portal 7 (User)",
                "type": "company-profile",
                "thumbnailUrl": "https://i.ytimg.com/vi/gwOYv7uwp1U/hqdefault.jpg",
                "videoUrl": "https://www.youtube.com/watch?v=gwOYv7uwp1U",
                "description": "Kenali lebih dekat Portal 7: Visi, Misi, dan Semangat Kami! (User version)"
            },
            {
                "id": "video-2",
                "title": "Aftermovie Portal 6 (2024) (User)",
                "type": "documentation",
                "year": "2024",
                "thumbnailUrl": (0, _rickrollJpgDefault.default),
                "videoUrl": "youtube.com/watch?v=7",
                "description": "Kilas balik semua keseruan dan momen tak terlupakan di Portal 6. (User version)"
            },
            {
                "id": "video-3",
                "title": "Portal 7 - Official Hype Trailer (AI)",
                "type": "trailer",
                "thumbnailUrl": (0, _rickrollJpgDefault.default),
                "videoUrl": "youtube.com/watch?v=9",
                "description": "Get ready for the most epic digital event of the year! (Sound on!)"
            },
            {
                "id": "video-4",
                "title": "Portal 6 (2024) - Aftermovie Madness (AI)",
                "type": "documentation",
                "year": "2024",
                "thumbnailUrl": (0, _rickrollJpgDefault.default),
                "videoUrl": "youtu.be/1",
                "description": "Relive the best moments from last year's Portal event!"
            },
            {
                "id": "video-5",
                "title": "Speaker Sneak Peek: Dr. Codesalot (AI)",
                "type": "speaker-intro",
                "thumbnailUrl": (0, _rickrollJpgDefault.default),
                "videoUrl": "youtu.be/3",
                "description": "A quick word from one of our amazing upcoming speakers!"
            }
        ]
    },
    "partnersSponsors": [
        {
            "id": "partner-1",
            "name": "HIMAVO Micro IT",
            "logoUrl": (0, _medpartMicroitPngDefault.default),
            "type": "media_partner",
            "websiteUrl": "https://www.instagram.com/micro_ipb/?hl=en"
        },
        {
            "id": "partner-2",
            "name": "HIMAVO LIKISTA",
            "logoUrl": (0, _medpartLikistaPngDefault.default),
            "type": "media_partner",
            "websiteUrl": "https://www.instagram.com/likista_ipb/?hl=en"
        },
        {
            "id": "partner-3",
            "name": "Info SV IPB",
            "logoUrl": (0, _medpartInfosvipbPngDefault.default),
            "type": "media_partner",
            "websiteUrl": "https://www.instagram.com/infosvipb/?hl=en"
        }
    ]
};
exports.default = mediaContent;

},{"url:./img/IMG_3203.jpg":"dIi1b","url:./img/IMG_3281.jpg":"f2Sbt","url:./img/IMG_3227.jpg":"biUb5","url:./img/S0952298.jpg":"a98jg","url:./img/IMG_3058.jpg":"7axgJ","url:./img/IMG_3376.jpg":"hCWkQ","url:./img/IMG_3104.jpg":"cvOue","url:./img/rickroll.jpg":"luomu","url:./img/medpart-microit.png":"fAwOn","url:./img/medpart-likista.png":"1iYPz","url:./img/medpart-infosvipb.png":"bOTbj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dIi1b":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3203.0057dd0b.jpg") + "?" + Date.now();

},{}],"f2Sbt":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3281.78729178.jpg") + "?" + Date.now();

},{}],"biUb5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3227.d63c2804.jpg") + "?" + Date.now();

},{}],"a98jg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("S0952298.ef7562d6.jpg") + "?" + Date.now();

},{}],"7axgJ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3058.6a9a4147.jpg") + "?" + Date.now();

},{}],"hCWkQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3376.705079b6.jpg") + "?" + Date.now();

},{}],"cvOue":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("IMG_3104.fcc981d9.jpg") + "?" + Date.now();

},{}],"luomu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("rickroll.7e61a98e.jpg") + "?" + Date.now();

},{}],"fAwOn":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("medpart-microit.9c3a33f6.png") + "?" + Date.now();

},{}],"1iYPz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("medpart-likista.fa6ce509.png") + "?" + Date.now();

},{}],"bOTbj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("medpart-infosvipb.df9726af.png") + "?" + Date.now();

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7SvX3","kyksZ"], "kyksZ", "parcelRequirec3f4", {}, "./", "/")

//# sourceMappingURL=blog-detail.d29bb997.js.map
