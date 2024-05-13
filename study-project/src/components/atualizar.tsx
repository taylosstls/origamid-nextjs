'use client';
import { revalidatePathAction } from '@/actions/revalidate-path';

export default function Atualizar() {
  return (
    <button onClick={() => revalidatePathAction('/acoes-cache')}>Atualizar</button>
  );
}
