import dynamic from 'next/dynamic'

import { Header } from '@/components/layout'
import {
  CTA,
  Footer,
  Hero,
  ProofBar,
  WhyJointOps,
} from '@/components/sections'
import { MobileActionBar } from '@/components/ui'

// Code split heavy sections - loads when user scrolls (performance optimization)
// These sections have heavy animations and are below the fold
const Services = dynamic(
  () => import('@/components/sections').then(mod => ({ default: mod.Services })),
  { ssr: true }
)

const Projects = dynamic(
  () => import('@/components/sections').then(mod => ({ default: mod.Projects })),
  { ssr: true }
)

const Testimonials = dynamic(
  () => import('@/components/sections').then(mod => ({ default: mod.Testimonials })),
  { ssr: true }
)

const Approach = dynamic(
  () => import('@/components/sections').then(mod => ({ default: mod.Approach })),
  { ssr: true }
)

const Contact = dynamic(
  () => import('@/components/sections').then(mod => ({ default: mod.Contact })),
  { ssr: true }
)

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
