import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Link from 'next/link';
import styles from '../app/Prototype1.module.css';

const Prototype1: React.FC = () => {
  // URL for the PWA version of Prototype 1.
  const pwaUrl = 'https://proto-library.vercel.app/pwa/prototype1';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Prototype 1 Details</h1>
      </header>
      <section className={styles.content}>
        <p className={styles.description}>
          Here are the details of Prototype 1. Users can try out this prototype by scanning the QR code below.
        </p>
        <div className={styles.qrContainer}>
          <QRCodeCanvas 
            value={pwaUrl}
            size={150} 
            imageSettings={{
              src: '/Cleo Light.png',  // Ensure this image is placed in your public folder
              height: 12.5,
              width: 25,
              excavate: true,
            }}
          />
        </div>
        <p className={styles.subDescription}>
          Or click{' '}
          <Link href="/pwa/prototype1" className={styles.link}>
          </Link>{' '}
          to try the PWA version.
        </p>
      </section>
    </div>
  );
};

export default Prototype1;
