/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["kennis-bucket.s3.eu-central-1.amazonaws.com", "cdn.kennismusic.app"],
  },
};

module.exports = nextConfig;
