'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 neon-gold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Clever Community
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Smart Trading Starts Here
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our custom-built TradingView indicators and strategies for XAUUSD and more.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#indicators">
            <motion.button
              className="px-8 py-4 bg-neon-gold text-dark-bg font-semibold rounded-lg glow-gold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Indicators
            </motion.button>
          </Link>
          <Link href="#strategies">
            <motion.button
              className="px-8 py-4 glass border-2 border-neon-teal text-neon-teal font-semibold rounded-lg glow-teal hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Live Trading
            </motion.button>
          </Link>
        </motion.div>
      </div>
      {/* Animated chart lines background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M 0 400 Q 200 300, 400 350 T 800 320 T 1200 340 T 1600 330 T 2000 350"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.path
            d="M 0 500 Q 200 400, 400 450 T 800 420 T 1200 440 T 1600 430 T 2000 450"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="100%" stopColor="#00F5FF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F5FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Hero
