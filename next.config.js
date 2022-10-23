/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'links.papareact.com',
      'a0.muscache.com',
      'www.expatkings.com',
      'www.smartertravel.com',
      'cdn.bisnow.net',
      'media.cntraveler.com',
      'static.trip101.com',
      'image.insider.com',
    ],
  },
};

module.exports = nextConfig;
