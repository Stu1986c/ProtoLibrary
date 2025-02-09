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
                    <h1>Cleogotchi</h1>
                    <p className={styles.description}>
                        This is a prototype that sees me taking a step into gamification - in particular, Cleo's own take on a Tamagotchi.
                    </p>
                    <p className={styles.description}>
                        Modelled on my own dog, Baloo, you can help keep him healthy by playing with him and feeding him.
                    </p>
                    <ul className={styles.description}>
                        <li>His energy and happiness will deplete over time</li>
                        <li>Play with him to cheer him up!</li>
                        <li>Feed him to fill his hungry belly</li>
                        <li>Don't worry - no harm will come to him if his Energy and Happiness deplete to 0</li>
                    </ul>
                    <p className={styles.description}>
                        <strong>NOTE:</strong>The animations are very limited in this prototype. Future iterations would look to improve these animations whilst also finding a stronger alignment between the pet and financial health.
                    </p>
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
                    src="/Cleogotchi.png"
                    alt="Cleogotchi"
                    width={300}
                    height={600}
                />
            </div>
        </div>
    );
};

export default Cleogotchi;
