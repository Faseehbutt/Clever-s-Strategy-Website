'use client'

import BackgroundAnimation from '@/components/BackgroundAnimation'
import VideoBackground from '@/components/VideoBackground'
import FloatingGlow from '@/components/FloatingGlow'
import Hero from '@/components/Hero'
import Indicators from '@/components/Indicators'
import Strategies from '@/components/Strategies'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  // Replace with your actual video path
  // Place your video in the 'public' folder and reference it like '/videos/your-video.mp4'
  // For example: const videoSrc = '/videos/trading-background.mp4'
  // Note: In Next.js, files in public folder are served from root, so use '/videos/...' not 'public/videos/...'
  const videoSrc = '/videos/Hailuo_Video_Animate this image into a real_441651544772046854.mp4' // Update this to your video file path

  return (
    <main className="relative min-h-screen">
      {/* Video Background - plays continuously with low opacity */}
      <VideoBackground videoSrc={videoSrc} opacity={0.25} />
      
      {/* Background animation disabled to show video more clearly */}
      {/* <BackgroundAnimation /> */}
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
