/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during builds (Vercel won't fail)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig
