'use client';
import { revalidatePathAction, revalidateTagAction } from '@/actions/revalidate-path';
import { useEffect } from 'react';

export default function Atualizar() {
  function handleClick() {
    revalidatePathAction('/acoes-cache')
    revalidateTagAction('acoes')
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      revalidatePathAction('/acoes-cache')
    }, 20 * 1000) // Atualiza sozinho a cada 20 segudos

    return () => clearInterval(intervalId)
  })


  return (
    <button onClick={handleClick}>Atualizar</button>
  );
}
