// Use the fixed version with single screen height
import { HorizonHeroSectionFixed as HorizonHeroSection } from '@/components/ui/horizon-hero-section-fixed'

import Mission from '@/components/sections/mission-new'
import Vision from '@/components/sections/vision'
import WhyUs from '@/components/sections/why-us'
import Achievements from '@/components/sections/achievements'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HorizonHeroSection />
      <Mission />
      <Vision />
      <WhyUs />
      <Achievements />
    </main>
  )
}