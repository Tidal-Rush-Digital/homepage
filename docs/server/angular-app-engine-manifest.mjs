
export default {
  basePath: '/WebsiteAngularSPA',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
