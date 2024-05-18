'use client';
import { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { PhotoData } from '@/actions/photoGet';

import PhotoContent from '../photo/photoContent/PhotoContent';
import styles from './FeedModal.module.css';

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes('foto')) return null;

  function handleOutsideClick(event: MouseEvent<HTMLDivElement>) {
    //Verifica se o click foi na modal do lado de fora
    if (event.target === event.currentTarget) router.back();
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />;
    </div>
  );
}
