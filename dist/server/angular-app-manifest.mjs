
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/homepage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: '7f9c3da9e8905dfbd3cc05bb039af87ae53d5fd6308dba5b9800f258f504426e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'b28b5d4bfb9f9118c79151b3c320ae96325bbf33436694648ead2bf930cb6170', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'homepage/index.html': {size: 5148, hash: '4c138a0b05355b2dccc0003674c41572a208d3873270a107957dd49d5e749b43', text: () => import('./assets-chunks/homepage_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
