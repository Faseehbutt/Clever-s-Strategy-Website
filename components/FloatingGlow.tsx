'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-neon-gold opacity-60"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: mousePosition.x * (0.01 * (i + 1)),
            y: mousePosition.y * (0.01 * (i + 1)),
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-neon-teal opacity-60"
          style={{
            right: `${15 + i * 15}%`,
            bottom: `${25 + i * 15}%`,
          }}
          animate={{
            x: mousePosition.x * (-0.01 * (i + 1)),
            y: mousePosition.y * (-0.01 * (i + 1)),
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

export default FloatingGlow
