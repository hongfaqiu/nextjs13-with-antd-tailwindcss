const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  transpilePackages: ['antd'],
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = withNextIntl(nextConfig);
