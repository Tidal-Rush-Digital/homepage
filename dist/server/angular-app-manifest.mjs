
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
    'index.csr.html': {size: 564, hash: 'bc2b3b36ab705d57326fa4323bdd846e963b7a53b53f0481a3fe73cb972d3c75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: '7a72ae68c98bf9a475ad98d56671c4924818b586c3ad1aa7053fd5d2a508727c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4795, hash: 'f30b2bd539d94408d3a5f7c05ecd8b3ae4156408c32281fd58c51870d50bfa13', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
