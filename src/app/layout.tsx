import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Miguel Angel Campos Lima - Candidato a Diputado del circuito 9-1',
    template: '%s | Miguel Ángel - Candidato a Diputado del circuito 9-1'
  },
  description: 'Candidato a Diputado independiente del circuito 9-1 Santiago de Veraguas.',

  openGraph: {
    images: ["https://www.vamosmiguelangel.com/icon1.png"],
  },
  verification: { google: "6PSbBKqUoAuPIQWB8vi85fN0U6LyCxSfMCAvo1_bPjw" }
}
import { Providers } from './Providers'
import { Toaster } from '@/components/ui/toaster'

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

        <Providers>

          <main className=' w-full h-full '>
            <Navbar />
            <div className=' '>

            </div>
            {children}
            <Toaster />
            <Footer />
          </main>
          {/* </ThemeProvider> */}

        </Providers>

      </body>
    </html>
  )
}
