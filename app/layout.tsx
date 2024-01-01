import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '../styles/globals.css'
import Nav from '@/components/nav'

export const metadata: Metadata = {
  title: 'Tony Manh',
  description: '',
  icons: '👋',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  )
}
