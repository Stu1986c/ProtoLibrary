import { useEffect } from 'react';

// Extend the Window interface to include smartlook
declare global {
  interface Window {
    smartlook: (...args: any[]) => void;
  }
}

const useSmartlook = () => {
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined' && !window.smartlook) {
      (function (d: Document) {
        const o: any = function () {
          o.api.push(arguments);
        };
        o.api = [];
        const h = d.getElementsByTagName('head')[0];
        const c = d.createElement('script');
        c.async = true;
        c.type = 'text/javascript';
        c.charset = 'utf-8';
        c.src = 'https://web-sdk.smartlook.com/recorder.js';
        h.appendChild(c);
        // Attach our smartlook function to window
        window.smartlook = o;
      })(document);
    }
    // Initialize Smartlook with your ID and configuration
    window.smartlook('init', '2fa26ceb9ba74087c46636d7d08b53269918c10b', { region: 'eu' });
  }, []);
};

export default useSmartlook;
