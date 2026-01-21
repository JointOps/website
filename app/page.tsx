import { Header } from '@/components/layout'
import {
  Approach,
  Contact,
  CTA,
  Footer,
  Hero,
  ProofBar,
  Services,
  WhyVyndra,
} from '@/components/sections'

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
    </>
  )
}
