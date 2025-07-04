// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ THIS disables ESLint in Vercel builds
  },
};

export default nextConfig;
