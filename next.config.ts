import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  assetPrefix: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true, // Required for GitHub Pages (because it doesn’t support Next.js Image Optimization)
  },
};

export default nextConfig;
