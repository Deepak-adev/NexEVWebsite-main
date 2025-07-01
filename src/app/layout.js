import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Cursor from '../components/ui/Cursor'
import VideoBackground from '../components/ui/VideoBackground'
import BlurEffect from '../components/ui/BlurEffect'
import BackToTop from '../components/ui/BackToTop'
import Layout from '../components/Layout'
import Script from 'next/script'
import CookieConsent from '../components/ui/CookieConsent'
import ScrollProgress from '../components/ui/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NexEV',
  url: 'https://nexev.com',
  logo: 'https://nexev.com/assets/images/logo.png',
  description: 'Leading provider of electric vehicle solutions, specializing in battery systems and innovative EV technology.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your Region',
    postalCode: 'Your Postal Code',
    addressCountry: 'Your Country'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-8900',
    contactType: 'customer service',
    email: 'contact@nexev.com'
  },
  sameAs: [
    'https://twitter.com/nexev',
    'https://www.linkedin.com/company/nexev',
    'https://www.facebook.com/nexev'
  ]
}

export const metadata = {
  metadataBase: new URL('https://nexev.com'),
  title: {
    default: 'NexEV - Electric Vehicle Solutions',
    template: '%s | NexEV'
  },
  description: 'Leading provider of electric vehicle solutions, specializing in battery systems and innovative EV technology.',
  keywords: ['electric vehicles', 'EV technology', 'battery systems', 'sustainable transportation'],
  authors: [{ name: 'NexEV Team' }],
  creator: 'NexEV',
  publisher: 'NexEV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NexEV - Electric Vehicle Solutions',
    description: 'Leading provider of electric vehicle solutions, specializing in battery systems and innovative EV technology.',
    url: 'https://nexev.com',
    siteName: 'NexEV',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NexEV - Electric Vehicle Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexEV - Electric Vehicle Solutions',
    description: 'Leading provider of electric vehicle solutions, specializing in battery systems and innovative EV technology.',
    images: ['/assets/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ScrollProgress />
        <Layout>
        <div className="min-h-screen bg-[#000B1D] text-white relative">
          <VideoBackground speed={1.2} opacity={0.15} />

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50" />
          </div>
          <Cursor />
          <Header />
          {children}
          <Footer />
          <BlurEffect />
          <BackToTop />
        </div>
        </Layout>
        <CookieConsent />
      </body>
    </html>
  )
} 