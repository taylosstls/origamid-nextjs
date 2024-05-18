'use client';
import { useState } from 'react';
import styles from './PhotoDelete.module.css';
import photoDelete from '@/actions/photoDelete';

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      console.log('Deletar foto');
      await photoDelete(id);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
}
