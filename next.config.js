/** @type {import('next').NextConfig} */
const nextConfig = {
  // optimizeFonts: false,
  reactStrictMode: true,
  images: {
    domains: ["kennis-bucket.s3.eu-central-1.amazonaws.com", "cdn.kennismusic.app"],
  },
};

module.exports = nextConfig;
