'use client'

import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

interface Indicator {
  id: number
  name: string
  description: string
  tags: string[]
  link: string
}

const indicators: Indicator[] = [
  {
    id: 1,
    name: 'Smart Entry Pro',
    description: 'Advanced entry signal indicator with multi-timeframe analysis for XAUUSD',
    tags: ['XAUUSD', 'Entry', 'Multi-TF'],
    link: '#',
  },
  {
    id: 2,
    name: 'Momentum Wave',
    description: 'Real-time momentum detection with customizable sensitivity levels',
    tags: ['Momentum', 'Wave', 'Real-time'],
    link: '#',
  },
  {
    id: 3,
    name: 'Support Resistance Master',
    description: 'Automated support and resistance levels with dynamic zones',
    tags: ['SR Levels', 'Zones', 'Auto'],
    link: '#',
  },
  {
    id: 4,
    name: 'Volume Profile Analyzer',
    description: 'Deep volume analysis with profile visualization and key levels',
    tags: ['Volume', 'Profile', 'Analysis'],
    link: '#',
  },
  {
    id: 5,
    name: 'Trend Catcher',
    description: 'Early trend detection with confirmation signals and alerts',
    tags: ['Trend', 'Early Signal', 'Alerts'],
    link: '#',
  },
  {
    id: 6,
    name: 'Risk Calculator',
    description: 'Smart position sizing and risk management tool integrated with TradingView',
    tags: ['Risk', 'Position Size', 'Management'],
    link: '#',
  },
]

const Indicators = () => {
  return (
    <section id="indicators" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 neon-teal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8 }}
        >
          Indicators
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Custom-built TradingView indicators for professional trading
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              className="glass rounded-xl p-6 cursor-pointer group"
              style={{ 
                background: 'rgba(26, 26, 26, 0.4)'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '50px' }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5
                }
              }}
              transition={{ 
                duration: 0.15,
                ease: 'easeOut',
                scale: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5
                },
                y: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5
                },
                opacity: {
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut'
                }
              }}
            >
              <h3 className="text-2xl font-bold mb-3 text-neon-gold group-hover:text-neon-teal transition-colors duration-300 ease-in-out">
                {indicator.name}
              </h3>
              <p className="text-gray-300 mb-4">{indicator.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {indicator.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-card rounded-full text-sm text-neon-teal border border-neon-teal/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={indicator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-teal hover:text-neon-gold transition-colors duration-300 ease-in-out"
              >
                View on TradingView
                <FiExternalLink />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Indicators
