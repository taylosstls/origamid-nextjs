import { Metadata } from 'next';

import photosGet from '@/actions/photosGet';
import Feed from '@/components/feed/Feed';
import userGetCache from '@/actions/userGet';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minha Conta | Dogs',
};

export default async function ContaPage() {
  const { data: user } = await userGetCache();
  const { data } = await photosGet({ user: user?.username })
  return (
    <main>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p
            style={{ color: '#444', fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={'/conta/postar'}
            className="button"
            style={{ display: 'inline-block' }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </main>
  );
}
