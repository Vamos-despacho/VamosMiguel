import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, DM_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'



export const metadata: Metadata = {

  title: {
    default: 'Miguel Angel Campos Lima - Diputado del circuito 9-1',
    template: '%s | Miguel Ángel - Diputado del circuito 9-1'
  },
  description: 'Diputado independiente del circuito 9-1 Santiago de Veraguas.',

  openGraph: {
    images: ["https://www.vamosmiguelangel.com/icon1.png"],
  },
  verification: { google: "6PSbBKqUoAuPIQWB8vi85fN0U6LyCxSfMCAvo1_bPjw" }
}
import { Providers } from './Providers'
import { Toaster } from '@/components/ui/toaster'
const roboto_init = Roboto({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "700"],
})
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
})
const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
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

      <body className={dm_sans.className}>

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
