/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // keep using public /assets paths directly
};

module.exports = nextConfig;
