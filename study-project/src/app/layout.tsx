import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/components/menu'

export const metadata: Metadata = {
  title: 'Study Project',
  description: 'Entendendo como funciona o NextJS14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  )
}
