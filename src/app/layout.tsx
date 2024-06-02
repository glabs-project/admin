import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'

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
          <UserProvider>
            <Navbar />
            <main className="w-full container">{children}</main>
          </UserProvider>
      </body>
    </html>
  )
}
