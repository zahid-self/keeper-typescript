import Footer from "@/components/landing/Footer"
import HeroSection from "@/components/landing/HeroSection"
import Navigation from "@/components/landing/Navigation"
import Pricing from "@/components/landing/Pricing"
import Features from "@/components/landing/Features"
import WorkManagement from "@/components/landing/WorkManagement"
import React from "react"

const page = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WorkManagement />
      <Pricing />
      <Features />
      <Footer />
    </>
  )
}

export default page
