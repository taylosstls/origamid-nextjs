import { Metadata } from 'next';
import AccountPhotoPhost from '@/components/account/accountPhotoPost/AccountPhotoPhost';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
};

export default async function PostarPage() {
  return <AccountPhotoPhost />;
}
