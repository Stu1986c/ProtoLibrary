// pages/prototype1.tsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Link from 'next/link';

const Prototype1: React.FC = () => {
  // URL for the PWA version of Prototype 1.
  const pwaUrl = 'https://your-domain.com/pwa/prototype1';

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Prototype 1 Details</h1>
      <p>
        Here are the details of Prototype 1. Users can try out this prototype by scanning the QR code below.
      </p>
      <h2>Try It as a Progressive Web App</h2>
      <QRCodeCanvas value={pwaUrl} size={150} />
      <p>
        Or click{' '}
        <Link href="/pwa/prototype1">here</Link>
        to try the PWA version.
      </p>
    </div>
  );
};

export default Prototype1;
