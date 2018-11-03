const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withLess({
  cssModules: false,
  webpack(config) {
    return config;
  },
}));
