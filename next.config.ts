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

    // Add a loader for PNG (and similar) assets inside react-native-wheel-of-fortune's assets folder
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      include: /node_modules[\\/]react-native-wheel-of-fortune[\\/]assets/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

const pwaOptions = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
};

// Use next-transpile-modules to transpile react-native-wheel-of-fortune
const withTMConfig = withTM(['react-native-wheel-of-fortune']);

// Wrap the config with next-pwa and next-transpile-modules
export default withTMConfig(withPWA(pwaOptions)(nextConfig));
