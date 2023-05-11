import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ImageLink',
  description: 'Sube tus imagenes y obten un link con tu imagen optimizada'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <div className='fixed h-screen w-full bg-gradient-to-br from-purple-50 via-white to-cyan-50 -z-10' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
