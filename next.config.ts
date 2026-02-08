import type { NextConfig } from "next";
// import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // 301 redirect
      },
    ]
  },
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};


export default nextConfig;
