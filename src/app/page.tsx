// src/app/page.tsx
import { HorizonHeroSection } from '@/components/ui/horizon-hero-section'
import Mission from '@/components/sections/mission-new'
import Vision from '@/components/sections/vision'
import WhyUs from '@/components/sections/why-us'
import Achievements from '@/components/sections/achievements'
import ContactNew from '@/components/sections/contact-new'
import { Navigation } from '@/components/layout/navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <div id="hero">
          <HorizonHeroSection />
        </div>
        <div id="mission">
          <Mission />
        </div>
        <div id="vision">
          <Vision />
        </div>
        <div id="why-us">
          <WhyUs />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <ContactNew />
      </main>
    </>
  )
}