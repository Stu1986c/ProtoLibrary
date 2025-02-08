// next.config.ts
import { NextConfig } from 'next';
import withTM from 'next-transpile-modules';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { isServer }) => {
    // Alias react-native to react-native-web
    config.resolve.alias['react-native'] = 'react-native-web';

    // Transpile react-native-wheel-of-fortune with babel-loader
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include: /node_modules[\\/]react-native-wheel-of-fortune/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    // (No additional rule for CSS is needed since Next.js handles it automatically)
    return config;
  },
};

const pwaOptions = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
};

// Use next-transpile-modules for react-native-wheel-of-fortune
const withTMConfig = withTM(['react-native-wheel-of-fortune']);

// Export the config wrapped with next-pwa and next-transpile-modules
export default withTMConfig(withPWA(pwaOptions)(nextConfig));
