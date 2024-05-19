import type { Metadata } from 'next';
import './globals.css';
import { type_second } from '@/functions/fonts';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { UserContextProvider } from '@/context/UserContext';
import userGetCache from '@/actions/userGet';

import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros.',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const { data } = await userGetCache();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <div>{modal}</div>
            <Footer />
          </div>
        </UserContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
