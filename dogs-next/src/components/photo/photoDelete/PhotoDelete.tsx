'use client';
import styles from './PhotoDelete.module.css';

export default function PhotoDelete({ id }: { id: string }) {
  return <button className={styles.delete}>Deletar: {id}</button>;
}
