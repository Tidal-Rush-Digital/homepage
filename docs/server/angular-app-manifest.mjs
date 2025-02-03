
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WebsiteAngularSPA/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/WebsiteAngularSPA"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: '2b26bb5d028e4fa5c27aff338817ee4c01339cb6e793144b24d3078668a918e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'eddb95cd23fe25ce83ba4ded1ea5fae480410fcb65f683c00cf655e5f0691f64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4035, hash: '0f82fc2d5ef1e368eb98bea97643d1bd208db132826be9fa39ead6ba2aedc8be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
