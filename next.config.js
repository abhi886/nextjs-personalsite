module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
