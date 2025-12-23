import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DownloadPopup from '@/components/DownloadPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GYMADAY - Why Commit? Just Gym it.',
  description: 'GYMADAY is a revolutionary fitness platform that connects gym enthusiasts with premium fitness facilities across India.',
  icons: {
    icon: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <DownloadPopup />
        </div>
      </body>
    </html>
  )
}

