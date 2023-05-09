/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "vi", "en"],
    defaultLocale: "vi",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.vi",
        defaultLocale: "vi",
        http: true,
      },
    ],
  },
};

module.exports = nextConfig;
