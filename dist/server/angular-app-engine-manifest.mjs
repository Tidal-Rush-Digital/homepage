
export default {
  basePath: 'https://Tidal-Rush-Digital.github.io/homepage',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
