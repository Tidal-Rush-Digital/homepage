
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/homepage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/homepage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: '48f4f01461768be2d81d8987511045f28863659bb5a7cc1723f4ca3572904139', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'f00a01c8d25c0010adeb273da9bde426bbeb43f7b48f36a4d210a0e85428fc82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4551, hash: '73f6f974386b52858a1e2842bda9c31175c97e2f6d94c6cf902ecac5d82fa604', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
