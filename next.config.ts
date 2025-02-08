// next.config.ts
import { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  // Other Next.js options (do not include a "pwa" property here)
  // For example:
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    disableStaticImages: true,
  },
  // ... any other options
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
