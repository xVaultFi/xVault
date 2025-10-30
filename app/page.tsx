"use client"

import Header from "@/app/components/Header"
import HeroContent from "@/app/components/HeroContent"
import PulsingCircle from "@/app/components/PulsingCircle"
import ShaderBackground from "@/app/components/ShaderBackground"

export default function LandingPage() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  )
}
