 import type { NextConfig } from 'next';

/** @type {NextConfig} */ 
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/kf-25-website",
  assetPrefix: "/"
  // Remove webpack configuration as it's not needed in Next.js 15
};

export default nextConfig;
