import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Exercise - To do',
  description: 'Entendendo como funciona o uso de requisição de uma API no NextJS14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
