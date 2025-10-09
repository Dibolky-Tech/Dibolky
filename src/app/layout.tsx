import type { Metadata } from 'next'
import Script from "next/script"
import StructuredData from '@/components/StructuredData'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Dibolky',
  description: 'Creative designer with over 15 years of experience in the design industry. Specializing in digital strategy, branding, UI/UX design, web design, and product design.',
  keywords: 'creative designer, portfolio, digital strategy, branding, UI/UX design, web design, product design, Melbourne',
  authors: [{ name: 'Dibolky' }],
  creator: 'Dibolky',
  publisher: 'Dibolky',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dibolky.in',
    title: 'Dibolky',
    description: 'Digital strategy, branding, UI/UX design, web design, and product design.',
    siteName: 'Dibolky Portfolio',
    images: [
      {
        url: '/assets/img/logo-light.png',
        width: 1200,
        height: 630,
        alt: 'Dibolky ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dibolky',
    description: 'Digital strategy, branding, UI/UX design, web design, and product design.',
    images: ['/assets/img/logo-light.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/assets/img/logo-light.png',
    shortcut: '/assets/img/logo-light.png',
    apple: '/assets/img/logo-light.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="tt-transition tt-noise tt-magic-cursor tt-smooth-scroll">
        <main id="body-inner">
          {children}
        </main>

        {/* Core JS */}
        <Script src="/assets/vendor/jquery/jquery.min.js" strategy="beforeInteractive" />
        
        {/* Libs and Plugins JS */}
        <Script src="/assets/vendor/gsap/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/gsap/ScrollToPlugin.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/gsap/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/lenis.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/isotope/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/isotope/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/isotope/packery-mode.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/fancybox/js/fancybox.umd.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/swiper/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        
        {/* Master JS */}
        <Script src="/assets/js/theme.js" strategy="afterInteractive" />
        
        {/* CSS and Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap" rel="stylesheet" />
        
        {/* Preload Barracuda Fonts for better performance */}
        <link rel="preload" href="/assets/fonts/Barracuda-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/Barracuda-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/Barracuda-Light.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/vendor/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendor/fancybox/css/fancybox.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/helper.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
        <link rel="stylesheet" href="/assets/css/theme-light.css" />
      </body>
    </html>
  )
}