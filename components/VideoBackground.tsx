'use client'

import { useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  opacity?: number
}

const VideoBackground = ({ videoSrc, opacity = 0.3 }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure video loops and plays
    video.loop = true
    video.muted = true
    video.playsInline = true
    
    // URL encode the video source to handle spaces in filename
    const encodedSrc = encodeURI(videoSrc)
    
    // Set video source
    video.src = encodedSrc
    
    // Track if video has started playing to prevent multiple play attempts
    let hasStartedPlaying = false
    
    const handleCanPlay = () => {
      if (!hasStartedPlaying) {
        hasStartedPlaying = true
        video.play()
          .then(() => {
            console.log('✅ Video is playing successfully')
          })
          .catch((error) => {
            console.error('Autoplay error:', error)
            // Try again after a short delay
            setTimeout(() => {
              video.play()
                .then(() => console.log('✅ Video started on retry'))
                .catch((err) => {
                  console.error('❌ Play failed:', err)
                })
            }, 500)
          })
      }
    }
    
    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('error', (e) => {
      console.error('❌ Video loading error:', e)
      console.error('Video source:', encodedSrc)
    })
    
    video.load()
    
    // Cleanup
    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [videoSrc])

  // URL encode the video source to handle spaces in filename
  const encodedSrc = encodeURI(videoSrc)

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={encodedSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better contrast - reduced opacity to show more video */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card opacity-60" />
    </div>
  )
}

export default VideoBackground
