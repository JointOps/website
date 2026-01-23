import type { Metadata } from 'next'

import { inter, spaceGrotesk } from '@/lib/fonts'
import { ErrorBoundary, SkipToContent } from '@/components/ui'
import { StructuredData } from '@/components/StructuredData'
import { DrawerProvider } from '@/contexts'
import { ShowcaseProvider } from '@/components/ShowcaseProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Vyndra — Digital Engineering Studio',
  description:
    'We build blockchain protocols, web applications, and digital infrastructure for ambitious companies. Solana specialists. Zero security incidents. Hackathon winners.',
  keywords: [
    'blockchain development',
    'solana',
    'web3',
    'smart contracts',
    'web development',
    'digital agency',
  ],
  authors: [{ name: 'Vyndra' }],
  openGraph: {
    title: 'Vyndra — Digital Engineering Studio',
    description: "We build what others can't. Blockchain. Web. Infrastructure.",
    url: 'https://vyndra.io',
    siteName: 'Vyndra',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyndra — Digital Engineering Studio',
    description: "We build what others can't.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        <DrawerProvider>
          <ErrorBoundary>
            <SkipToContent />
            {children}
            <ShowcaseProvider />
          </ErrorBoundary>
        </DrawerProvider>
      </body>
    </html>
  )
}
