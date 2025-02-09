// pages/lab.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/Lab.module.css';

export default function Lab() {
  // For demonstration, we'll render three rows.
  const rows = [1];
  const placeholderImage = "/phone placeholder.png"; // Ensure this image exists in your public folder

  return (
    <div className={styles.container}>
      <div className={styles.rowsContainer}>
        {rows.map((row, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.overview}>
              <h3 className={styles.mainHeading}>PWA Test</h3>
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
                alt="PWA"
                style={{ marginTop: '30px' }}
                width={300}
                height={600}
                layout="responsive"
              />
            </div>
            <div className={styles.overview}>
              <h3 className={styles.mainHeading}>Cleogotchi</h3>
              <p className={styles.description}>
                Who remembers the '90s? A time when everyone was walking around with a cyber pet in their pocket.
              </p>
              <p className={styles.description}>
                Let us give you a healthy dose of nostalgia with your very own Cleogotchi - modelled on my very own, Baloo.
              </p>
              <ul className={styles.description}>
                <li>His energy and happiness will deplete over time</li>
                <li>Play with him to cheer him up!</li>
                <li>Feed him to fill his hungry belly</li>
              </ul>
              <Link href="/cleogotchi" className={styles.button}>View Prototype</Link>
            </div>
            <div className={styles.imageBlock}>
              <Image
                src="/Cleogotchi.png"
                alt="Cleogotchi"
                style={{ marginTop: '30px' }}
                width={300}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.row}>
        <div className={styles.overview}>
          <h3 className={styles.mainHeading}>Another prototype in the making...</h3>
          <p className={styles.description}>
            Another prototype is currently being worked upon in our lab. Keep your eyes peeled for when it's ready to 
            be tried out!
          </p>
          <Link href="/lab" className={styles.button}>View Prototype</Link>
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
        <div className={styles.overview}>
          <h3 className={styles.mainHeading}>Another prototype in the making...</h3>
          <p className={styles.description}>
            Another prototype is currently being worked upon in our lab. Keep your eyes peeled for when it's ready to 
            be tried out!
          </p>
          <Link href="/lab" className={styles.button}>View Prototype</Link>
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
    </div>
  );
}
