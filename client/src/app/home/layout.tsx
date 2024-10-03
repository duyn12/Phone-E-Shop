
import '../globals.css'
const inter = Inter({ subsets: ['vietnamese'] })
import { Inter  } from "next/font/google"
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatLive from '@/components/Chat'


export const metadata: Metadata = {
  title: {
    template: '%s ',
    default: 'MobiTech'
  },
  description: 'Được tạo bởi Được Duy',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
          <Header />
          {children}
          <Footer />
      </body>
      <ChatLive />
    </html>

  )
}