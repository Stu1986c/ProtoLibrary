import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import useSmartlook from '../hooks/smartlook';
import NavBar from '../components/navbar';
import { useRouter } from 'next/router';




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
  ],
  variable: '--font-pp-neue-montreal',
});

function MyApp({ Component, pageProps }: AppProps) {
  useSmartlook();

  const router = useRouter();

  // List exact routes to hide the nav bar
  const hideNavExact = ['/'];
  // List route prefixes where nav bar should be hidden (e.g., /pwa/...)
  const hideNavPrefixes = ['/pwa'];

  // Determine if current route should have the nav bar
  const shouldShowNav =
    !hideNavExact.includes(router.pathname) &&
    !hideNavPrefixes.some(prefix => router.pathname.startsWith(prefix));


  return (
    <div className={ppNeueMontreal.variable}>
      {shouldShowNav && <NavBar />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
