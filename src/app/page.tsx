import { HorizonHeroSection } from '@/components/ui/horizon-hero-section'
import Mission from '@/components/sections/mission-new'
import Vision from '@/components/sections/vision'
import WhyUs from '@/components/sections/why-us'
import Achievements from '@/components/sections/achievements'

export default function Home() {
  return (
    <>
      <HorizonHeroSection />
      <Mission />
      <Vision />
      <WhyUs />
      <Achievements />
    </>
  )
}