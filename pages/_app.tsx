import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import '../app/globals.css';

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/PPNeueMontreal/ppneuemontreal-medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPNeueMontreal/ppneuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Add other font weights and styles as needed
  ],
  variable: '--font-pp-neue-montreal',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={ppNeueMontreal.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
