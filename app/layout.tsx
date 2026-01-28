import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { inter, spaceGrotesk } from '@/lib/fonts'
import { ErrorBoundary, SkipToContent } from '@/components/ui'
import { StructuredData } from '@/components/StructuredData'
import { DrawerProvider, ScrollProvider } from '@/contexts'
import { ShowcaseProvider } from '@/components/ShowcaseProvider'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jointops.dev'),
  title: {
    default: 'JointOps | Web Development Agency | Blockchain Development | Solana Developers | React & Next.js Experts',
    template: '%s | JointOps - Web & Blockchain Development Studio',
  },
  description:
    'JointOps is a premier web development agency and blockchain development studio. Expert Solana developers, React/Next.js engineers, and UI/UX designers. 100+ projects delivered, 5.0 rating, clients in 30+ countries. Hire top full-stack developers for web apps, smart contracts, DeFi protocols, NFT platforms, and enterprise software.',
  keywords: [
    // Primary keywords
    'web development agency',
    'blockchain development company',
    'solana development',
    'solana developers',
    'hire solana developer',
    // React/Next.js keywords
    'react development agency',
    'next.js development company',
    'nextjs developers',
    'hire react developers',
    'react.js development services',
    // Full-stack keywords
    'full stack development',
    'full stack developers for hire',
    'node.js development',
    'typescript developers',
    // Blockchain keywords
    'smart contract development',
    'smart contract audit',
    'defi development',
    'nft development',
    'nft marketplace development',
    'web3 development',
    'web3 developers',
    'crypto development',
    'token development',
    // Design keywords
    'ui/ux design agency',
    'saas design',
    'web app design',
    'product design studio',
    // Service keywords
    'custom software development',
    'saas development company',
    'startup development agency',
    'mvp development',
    'api development',
    'backend development',
    // Gaming keywords
    'web3 gaming',
    'blockchain game development',
    'play to earn development',
    // Location-agnostic but intent-rich
    'offshore development team',
    'dedicated development team',
    'software development outsourcing',
  ],
  authors: [{ name: 'JointOps', url: 'https://jointops.dev' }],
  creator: 'JointOps',
  publisher: 'JointOps',
  category: 'Technology',
  alternates: {
    canonical: 'https://jointops.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jointops.dev',
    siteName: 'JointOps',
    title: 'JointOps | Web Development Agency | Blockchain & Solana Developers',
    description:
      'Premier web development agency and blockchain studio. Expert Solana developers, React/Next.js engineers. 100+ projects, 5.0 rating, 30+ countries. Build with the best.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JointOps - Web Development Agency & Blockchain Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jointopsdev',
    creator: '@jointopsdev',
    title: 'JointOps | Web Development Agency | Blockchain & Solana Developers',
    description:
      'Premier web development agency and blockchain studio. Expert Solana developers, React/Next.js engineers. 100+ projects, 5.0 rating. Build with the best.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <ScrollProvider>
          <DrawerProvider>
            <ErrorBoundary>
              <SkipToContent />
              {children}
              <ShowcaseProvider />
            </ErrorBoundary>
          </DrawerProvider>
        </ScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
