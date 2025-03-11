
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Tidal-Rush-Digital.github.io/homepage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://Tidal-Rush-Digital.github.io/homepage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 564, hash: '49ab5b915ff2ae4c4fcde8e5060990eb1cff90883658bb8c5dbe0b9da39fc6fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: '709e16c3b72ed12d845fda80f38e33b1bf4faa58e0b31c40564ad04d3e1393f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12573, hash: '8620b8d18ca72b1c8c3199740a140df9b4a1618a59799816a26788a295bc3f99', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
