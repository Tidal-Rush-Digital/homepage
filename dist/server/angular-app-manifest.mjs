
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
    'index.csr.html': {size: 545, hash: '6c43a69ea4830c6ea07d92b607b9ffa6c72907d9e68c125148d38110d0391a59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'e8bfb4d7e9932c0753d19dfa388adcb9421e5e71a7807726270d3d8008198af3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5546, hash: '1cb5796f984a0ee9f9b6dee01392d21d8a29be59efa3e10bae9be2bd0acebbaa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
