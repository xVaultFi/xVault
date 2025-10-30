"use client"

import Header from "@/app/components/Header"
import HeroContent from "@/app/components/HeroContent"
import PulsingCircle from "@/app/components/PulsingCircle"
import ShaderBackground from "@/app/components/ShaderBackground"
import Navbar from "./components/Navbar"

export default function LandingPage() {
  return (
    <ShaderBackground>
     <Navbar/>
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  )
}
