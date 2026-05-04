import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AUTO-Z — Automatize o Seu Stand Automóvel com IA',
  description:
    'Qualifique leads 24/7 em Portugal. O ATZ Agent responde em menos de 30 segundos, qualifica cada lead e entrega contactos com intenção real de compra.',
  keywords: [
    'automação stand automóvel',
    'qualificação leads automóvel',
    'IA stand automóvel Portugal',
    'resposta automática leads',
    'ATZ Agent',
    'AUTO-Z',
  ],
  openGraph: {
    title: 'AUTO-Z — Automatize o Seu Stand Automóvel com IA',
    description:
      'O seu stand perde leads todos os dias. Nós garantimos que nenhum fica sem resposta.',
    type: 'website',
    locale: 'pt_PT',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased bg-bg-base text-slate-100">
        {children}
      </body>
    </html>
  )
}
