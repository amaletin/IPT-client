const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withLess({
  cssModules: true,
  webpack(config, options) {
    if (!options.isServer) {
      for (let entry of options.defaultLoaders.less) {
        if (entry.loader === 'css-loader') {
          entry.loader = 'typings-for-css-modules-loader';
          break;
        }
      }
    }
    return config;
  },
}));
