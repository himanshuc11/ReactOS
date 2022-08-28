/** @type {import('next').NextConfig} */
const StylelintPlugin = require('stylelint-webpack-plugin'); // line to add
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  }
};

module.exports = nextConfig;
