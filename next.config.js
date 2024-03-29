/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "uk",
  },
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    });
    return config;
  },
};

module.exports = nextConfig;
