import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Miguel Ángel!',
  description: 'Candidato a Diputado independiente del circuito 9-1',
  openGraph: {
    images: ["https://vamos-miguel-angel.vercel.app/icon1.png"],
  },
}
import { Providers } from './Providers'
import { Toaster } from '@/components/ui/toaster'
import SesionObtions from '@/components/SesionObtions'


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

      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {/* <div className='flex items-center border-b bg-background/95 backdrop-blur '>
            <Navbar />
            <ModeToggle />
          </div> */}
        <Providers>

          <main className=' w-full h-full '>
            {/* <Navbar /> */}
            <div className=' '>
              <SesionObtions />
            </div>
            {children}
            <Toaster />
            {/* <Footer /> */}
          </main>
          {/* </ThemeProvider> */}

        </Providers>

      </body>
    </html>
  )
}
