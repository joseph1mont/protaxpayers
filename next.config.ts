import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enables the static export (creates the 'out' folder)
  output: 'export',

  // 2. Required for Static Hosting (Hostinger/Vercel Static)
  // This ensures images work without a Next.js server
  images: {
    unoptimized: true,
  },

  // 3. (Optional) If you are deploying to a sub-folder, add 'basePath'
  // basePath: '/my-sub-folder',

  // 4. Forces trailing slashes for better SEO and compatibility with static servers
  trailingSlash: true,
};

export default nextConfig;