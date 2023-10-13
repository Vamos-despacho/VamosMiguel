import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'

import { Footer } from '@/components/Footer'
import Image from 'next/image';
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Vamos Miguel Ángel!',
  description: 'Candidato a Diputado independiente del circuito 9-1',
  openGraph: {
    images: ["/v.png", "/logovm.png"],
  },
}

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content='/v.png' key="ogimage" />
        <meta
          property="og:image"
          content="/logovm.png"
        />

      </Head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {/* <div className='flex items-center border-b bg-background/95 backdrop-blur '>
            <Navbar />
            <ModeToggle />
          </div> */}

        <main className='flex w-full  flex-col '>
          <Navbar />
          {children}
        </main>
        <Footer />
        {/* </ThemeProvider> */}

      </body>
    </html>
  )
}
