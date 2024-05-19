import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/components/menu'
import { font_body, font_display, font_guerrilla } from '@/app/fonts/fonts'

export const metadata: Metadata = {
  title: 'Study Project',
  description: 'Entendendo como funciona o NextJS14',
}

console.log(font_body)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_body.variable} ${font_display.variable} ${font_guerrilla.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
