// pages/lab.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/Lab.module.css';

export default function Lab() {
  // For demonstration, we'll render three rows.
  const rows = [1, 2];
  const placeholderImage = "/phone placeholder.png"; // Ensure this image exists in your public folder

  return (
    <div className={styles.container}>
      <div className={styles.rowsContainer}>
        {rows.map((row, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.overview}>
              <h3 className={styles.mainHeading}>My Initial PWA Test</h3>
              <p className={styles.description}>
                This is my initial attempt at a Progressive Web App (PWA). The benefits of a PWA include:
              </p>
              <ul className={styles.description}>
                <li>Users can access prototypes on their phone without needing to download anything. Just scan a QR code!</li>
                <li>Uses our existing Frontend tech (with an extra sprinkle of magic)</li>
                <li>Uncoupled from our existing codebase (this is code created with the intention of gaining user insights) </li>
              </ul>
              <Link href="/prototype1" className={styles.button}>View Prototype</Link>
            </div>
            <div className={styles.imageBlock}>
              <Image
                src="/PWA.png"
                alt="Placeholder"
                style={{ marginTop: '30px' }}
                width={300}
                height={600}
                layout="responsive"
              />
            </div>
            <div className={styles.overview}>
              <h3 className={styles.mainHeading}>Prototype Overview</h3>
              <p className={styles.description}>
                This is a brief description of the prototype. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link href="/prototype1" className={styles.button}>View Prototype</Link>
            </div>
            <div className={styles.imageBlock}>
              <Image
                src={placeholderImage}
                alt="Placeholder"
                width={300}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
