
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
    'index.csr.html': {size: 564, hash: 'b6851aab39fd279f00bfdbc10f5302d8e84337acdd23896bf21119a40f2bf1dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: '2df2f1db8d37da75964dd001ac5ec73f45ec25645156847ff6d4f3479924a9cb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12718, hash: 'fbb7df1bba0021b329e35350b1d836a009fddfaa6c64e9cd9e196e4c8f7b9c00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
