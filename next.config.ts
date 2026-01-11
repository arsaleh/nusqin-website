import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: 'standalone' removed for Cloudflare Pages compatibility
  // For Fly.io/Docker deployment, add back: output: 'standalone'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nusqin.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Cloudflare Pages: use unoptimized images or configure loader
    unoptimized: process.env.CLOUDFLARE_PAGES === 'true',
  },
};

export default nextConfig;
