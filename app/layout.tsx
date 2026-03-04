import './globals.css'
import ApolloProvider from './components/providers/ApolloProvider'
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'
import { Raleway, Nunito_Sans } from 'next/font/google'

const displayFont = Raleway({ subsets: ['latin'], variable: '--font-raleway', display: 'swap', weight: ['400', '500', '600', '700', '800', '900'] })
const bodyFont = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans', display: 'swap', weight: ['400', '500', '600', '700'] })

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 }

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://${process.env.HOST || 'localhost'}:${process.env.PORT || '3000'}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: 'Compass Realty Group', template: `%s | Compass Realty Group` },
  description: 'Full-service real estate solutions for buyers, sellers, and investors with local expertise and personalized service.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: [{ url: '/icon', sizes: '32x32', type: 'image/png' }, { url: '/favicon.ico', sizes: 'any' }], apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <DemoModeBanner />
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  )
}
