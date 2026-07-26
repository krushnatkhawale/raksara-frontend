import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}