'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useMedia from '@/hooks/useMedia';
import styles from './AccountHeader.module.css';

import FeedIcon from '@/icons/FeedIcon';
import StaticsIcon from '@/icons/StaticsIcon';
import AddIcon from '@/icons/AddIcon';
import LogoutIcon from '@/icons/LogoutIcon';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste Sua Foto';
    case '/conta/estatisticas':
      return 'Estatísticas';
    default:
      return 'Minha Conta';
  }
}


export default function AccountHeader() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    // userLogout();
  }

  return (
    <header className={styles.header}>
      <h1 className='title'>{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive
            }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
          }`}
      >
        <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link href="/conta/estatisticas" className={pathname === '/conta/estatisticas' ? 'active' : ''}>
          <StaticsIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link href="/conta/postar" className={pathname === '/conta/postar' ? 'active' : ''}>
          <AddIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};
