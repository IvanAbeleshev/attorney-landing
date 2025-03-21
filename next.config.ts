import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
