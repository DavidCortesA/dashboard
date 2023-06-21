import Sidebar from '@/components/Sidebar'
import '@style/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard - Web App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
          {children} 
        </Sidebar>
      </body>
    </html>
  )
}
