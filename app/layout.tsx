import './globals.css'
import type { Metadata } from 'next'
import { Andika } from 'next/font/google'
import {Nav, Footer} from '@/components'

const andika = Andika({ 
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
 })

export const metadata: Metadata = {
  title: 'RinatDev',
  description: 'Portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={andika.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
