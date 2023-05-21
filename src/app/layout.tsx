import './globals.css'
import { ReactNode } from 'react'
import { Quicksand as Quick } from 'next/font/google'

const quicksand = Quick({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} bg-lightBg`}>{children}</body>
    </html>
  )
}
