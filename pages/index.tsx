import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/Dark.png"
          alt="Cleo Dark Logo"
          width={150}
          height={75}
          priority
        />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Cleo Labs</h1>
        <Link className={styles.enterButton} href="/lab">Enter lab</Link>

      </main>
    </div>
  );
}
