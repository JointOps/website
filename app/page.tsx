import dynamic from 'next/dynamic'

import { Header } from '@/components/layout'
import {
  Approach,
  CTA,
  Footer,
  Hero,
  ProofBar,
  Services,
  WhyVyndra,
} from '@/components/sections'
import { MobileActionBar } from '@/components/ui'

// Code split Contact form - loads only when needed (performance optimization)
const Contact = dynamic(() => import('@/components/sections').then(mod => ({ default: mod.Contact })), {
  ssr: true, // Still render on server for SEO
})

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProofBar />
        <Services />
        <Approach />
        <WhyVyndra />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
