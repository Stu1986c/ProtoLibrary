// pages/_app.js or pages/_app.tsx
import localFont from 'next/font/local';
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

function MyApp({ Component, pageProps }) {
  return (
    <div className={ppNeueMontreal.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
