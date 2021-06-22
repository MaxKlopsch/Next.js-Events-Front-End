import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Next Events {new Date().getFullYear()}</p>
      <p>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
      </p>
    </footer>
  );
}
