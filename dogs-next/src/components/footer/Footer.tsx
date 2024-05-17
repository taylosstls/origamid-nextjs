import Image from 'next/image';
import styles from './footer.module.css';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={'/assets/dogs-footer.svg'}
        alt="Dogs Logo"
        width={28}
        height={22}
      />
      <p>©2024 Dogs - Rede social para cães. Todos os direitos reservados.</p>
    </footer>
  );
}
