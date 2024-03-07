import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DlISQeB9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CFGEWjMD.mjs');
const _page1 = () => import('./chunks/_id__AB9uxGr-.mjs');
const _page2 = () => import('./chunks/_search__CVVw9B2r.mjs');
const _page3 = () => import('./chunks/index_Djl8hyvl.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/detail/[id].astro", _page1],
    ["src/pages/results/[search].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "84d355af-6b06-450f-9450-22c2194c07b4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
