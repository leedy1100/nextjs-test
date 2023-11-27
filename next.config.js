/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.js config
  images: {
    domains: ["fastly.picsum.photos", "picsum.photos"],
  },
  disable: process.env.NODE_ENV === "local",
};

module.exports = withPWA(nextConfig);
