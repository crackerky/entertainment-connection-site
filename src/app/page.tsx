import Hero from '@/components/sections/hero'
import Mission from '@/components/sections/mission-new'
import Vision from '@/components/sections/vision'
import WhyUs from '@/components/sections/why-us'
import Achievements from '@/components/sections/achievements'
import Services from '@/components/sections/services'
import ClientShowcase from '@/components/sections/projects'
import PricingPlans from '@/components/sections/features'
import FAQ from '@/components/sections/mission'
import Testimonials from '@/components/sections/testimonials'
import Team from '@/components/sections/team'
import CTA from '@/components/sections/cta'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Vision />
      <WhyUs />
      <Achievements />
      <Services />
      <ClientShowcase />
      <PricingPlans />
      <FAQ />
      <Testimonials />
      <Team />
      <CTA />
      <Contact />
    </>
  )
}