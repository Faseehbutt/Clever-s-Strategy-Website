'use client'

import BackgroundAnimation from '@/components/BackgroundAnimation'
import FloatingGlow from '@/components/FloatingGlow'
import Hero from '@/components/Hero'
import Indicators from '@/components/Indicators'
import Strategies from '@/components/Strategies'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <FloatingGlow />
      <div className="relative z-10">
        <Hero />
        <Indicators />
        <Strategies />
        <About />
        <Footer />
      </div>
    </main>
  )
}
