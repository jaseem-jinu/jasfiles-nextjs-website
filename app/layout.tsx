import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import './globals.css'
import Header from "./Header";
import Footer from "./Footer";
import '@/public/styles/fonts.css';
import '@/public/styles/default.css';
import '@/public/styles/main.css';
import '@/public/styles/main_new.css';
//import '../styles/who-we-are.module.css';
import '@/public/styles/responsive.css';
import '@/public/styles/animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JAS-Design',
  description: 'we are ready to create marvels design with your satisfaction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className="main-container" >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
