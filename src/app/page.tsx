import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import Projects from '@/components/sections/projects'
import Features from '@/components/sections/features'
import Mission from '@/components/sections/mission'
import Testimonials from '@/components/sections/testimonials'
import Team from '@/components/sections/team'
import CTA from '@/components/sections/cta'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Features />
      <Mission />
      <Testimonials />
      <Team />
      <CTA />
      <Contact />
    </>
  )
}