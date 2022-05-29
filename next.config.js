/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://kennis-bucket.s3.eu-central-1.amazonaws.com/"],
  },
};

module.exports = nextConfig;
