import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/auto-repair-demo',
  assetPrefix: '/auto-repair-demo/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
