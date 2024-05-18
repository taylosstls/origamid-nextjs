import { Metadata } from 'next';
import statsGet from '@/actions/statsGet';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
};

// Criar um lazyloading do componente
const AccountStatistics = dynamic(
  () => import('@/components/account/accountStatistics/AccountStatistics'),
  {
    ssr: false,
    loading: () => <p>Carregando...</p>,
  }
);

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <AccountStatistics data={data} />
    </section>
  );
}
