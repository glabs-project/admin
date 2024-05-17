import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import { cn } from '~/shared/lib'
import { Navbar } from '~/widgets'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'GLabs dashboard',
  description: 'Admin dashboard for online-services GLabs.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen w-full mx-auto font-sans antialiased',
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
