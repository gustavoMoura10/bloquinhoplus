import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloquinho+ | Organize suas tarefas de forma fácil',
  description: 'Seu bloquinho com muito mais funções',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>

      </body>
    </html>
  )
}
