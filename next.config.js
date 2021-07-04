/* eslint-disable */
const path = require('path');

if (process.env.NEW_RELIC_ENABLED) {
  require('newrelic');
}

module.exports = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  },
  async redirects() {
    return [
      {
        source: '/mieten',
        destination: '/categories',
        permanent: false,
      },
      {
        source: '/impressum',
        destination: '/imprint',
        permanent: false,
      },
      {
        source: '/AGB',
        destination: '/terms',
        permanent: false,
      },
    ];
  },
};
