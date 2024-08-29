import { Inter } from 'next/font/google'
import '../globals.css'
const inter = Inter({ subsets: ['vietnamese'] })
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: {
    template: '%s ',
    default: 'PhoneShop'
  },
  description: 'Được tạo bởi Được Duy',
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
          <Header />
          {children}
      </body>
    </html>
  )
}