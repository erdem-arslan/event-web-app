import '@/styles/reset.css'
import '@/styles/global.css'

import { Header, Footer } from '@/components'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children })
{

  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
