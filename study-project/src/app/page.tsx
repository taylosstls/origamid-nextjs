// solução de importação
import Acessos from '@/components/acessos';
import ServerFetch from '@/components/serverFetch';
import dynamic from 'next/dynamic';

export const Width = dynamic(() => import('@/components/width'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Acessos /> 
      <Width />

      <ServerFetch />
    </main>
  );
}
