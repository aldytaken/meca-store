import { RootLayoutProps } from '@/types/layouts'
import { Inter } from 'next/font/google'
import { tw } from '@/lib/utils/tw'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout: React.FC<RootLayoutProps> = ({ children }) =>
{
  return (
    <html lang="es">
      <body className={tw(inter.className, 'bg-light-background dark:bg-dark-background antialiased')}>
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )  
}

export default RootLayout
