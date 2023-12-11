/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
