import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Image from 'next/image';
import styles from '../app/Prototype1.module.css';

const Cleogotchi: React.FC = () => {
  // URL for the PWA version of Prototype 1
  const pwaUrl = 'https://proto-library.vercel.app/pwa/cleogotchi';

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.textContent}>
          <h1>PWA Test</h1>
          <p className={styles.description}>
            This is the first prototype in the library. My first attempt at a Progressive Web App (PWA). 
          </p>
          <ul className={styles.description}>
            <li>Users can access prototypes on their phone without needing to download anything. Just scan a QR code!</li>
            <li>Uses our existing Frontend tech (with an extra sprinkle of magic)</li>
            <li>Uncoupled from our existing codebase (this is code created purely with the intentions of gaining user insights) </li>
          </ul>
        </div>
        <p className={styles.description}>
          We'd love for you to give it a try! Grab your phone and scan the QR code below to be taken to the prototype.
        </p>
        <div className={styles.qrCode}>
          <QRCodeCanvas
            value={pwaUrl}
            size={100}
            // imageSettings={{
            //   src: '/Cleo Light.png',  // Ensure this image is placed in your public folder
            //   height: 12.5,
            //   width: 25,
            //   excavate: true,
            // }}
          />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Image
          src="/PWA.png"
          alt="Prototype Preview"
          width={300}
          height={600}
        />
      </div>
    </div>
  );
};

export default Cleogotchi;
