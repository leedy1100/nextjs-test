/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
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
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/map-geocode/v2/:path*',
        destination:
          'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/:path*', // Proxy for ar API
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
