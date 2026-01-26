import dynamic from 'next/dynamic'

import { Header } from '@/components/layout'
import {
  Approach,
  CTA,
  Footer,
  Hero,
  Projects,
  ProofBar,
  Services,
  Testimonials,
  WhyJointOps,
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
        <Projects />
        <Testimonials />
        <Approach />
        <WhyJointOps />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
