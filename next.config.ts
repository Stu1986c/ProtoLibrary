// next.config.ts
import { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  // Place any standard Next.js configuration options here.
};

export default withPWA({
  pwa: {
    dest: 'public', // Where the service worker and precache manifest will be generated.
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  },
  ...nextConfig,
});
