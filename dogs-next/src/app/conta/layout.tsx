import { ReactNode } from 'react';
import AccountHeader from '@/components/account/accountHeader/AccountHeader';

export default async function contaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container">
      <AccountHeader />
      {children}
    </div>
  );
}
