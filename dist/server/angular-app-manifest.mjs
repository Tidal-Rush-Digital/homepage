
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
    'index.csr.html': {size: 545, hash: 'e8c2019c907bb14057cd73e8c10f50af5ca108333dffa484e6b6592deb153acc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: 'cc3946a37eee72ecca4152e7c799a9009012c313302f0297c75ee2c16bb6aa2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5184, hash: 'e7e3afb6ed58ab52af125fa3048b5f8ef6175f783df1c1e08e06af4af1a5fb36', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
