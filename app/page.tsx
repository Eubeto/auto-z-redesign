import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import LiveDemo from '@/components/sections/LiveDemo'
import Integrations from '@/components/sections/Integrations'
import CaseStudy from '@/components/sections/CaseStudy'
import ROI from '@/components/sections/ROI'
import Pricing from '@/components/sections/Pricing'
import Skills from '@/components/sections/Skills'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <LiveDemo />
        <Integrations />
        <CaseStudy />
        <ROI />
        <Pricing />
        <Skills />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
