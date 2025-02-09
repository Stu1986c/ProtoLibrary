import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/">
            <Image
              src="/Cleo Light.png"          // Replace with your logo file path in /public
              alt="Logo"
              width={100}               // Adjust size as needed
              height={50}
              priority
            />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.item}>
          <Link href="/lab">
            Lab
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
