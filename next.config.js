const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
};

const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(withCSS(nextConfig));
