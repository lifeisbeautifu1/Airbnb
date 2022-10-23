/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key:
      'pk.eyJ1IjoibGlmZWlzYmVhdXRpZnUxIiwiYSI6ImNsOWt4ZzdlajBrOXQzdnBsYW9kdGprNTUifQ.D9wHvp76DCHqRn6C5cTLsw',
  },
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
