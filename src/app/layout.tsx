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
import Script from 'next/script'
import Head from 'next/head'
import { headers } from 'next/headers'
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

  const pathname = headers().get('x-next-pathname') as string;
  console.log(pathname)
  const headersList = headers();
  const referer = headersList.get("referer");
  console.log(referer)
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-KPRNQPQW" /> */}
      <head>
        <Script
          id='gtm'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPRNQPQW');
          `
          }}
        >

        </Script>
      </head>
      <body className={dm_sans.className}>
        <Providers>
          <main className=' w-full h-full '>
            <Navbar />

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
