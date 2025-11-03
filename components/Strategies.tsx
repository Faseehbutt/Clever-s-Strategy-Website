'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

interface Strategy {
  id: number
  name: string
  description: string
  category: string[]
  backtestWinRate: number
  backtestProfit: string
  link: string
}

const strategies: Strategy[] = [
  {
    id: 7,
    name: '💻 RSI Dual-Band Reversal Strategy (Hacker Mode)',
    description: 'Identifies potential trend reversals when price momentum reaches extreme overbought or oversold levels — then enters trades expecting the price to revert.',
    category: ['Mean Reversion', 'RSI', 'Reversal'],
    backtestWinRate: 45.45,
    backtestProfit: '>70%',
    link: 'https://www.tradingview.com/script/mkUeuwKA-RSI-Dual-Band-Reversal-Strategy-Hacker-Mode/',
  },
  {
    id: 1,
    name: 'Golden Scalper',
    description: 'High-frequency scalping strategy for XAUUSD with tight spreads',
    category: ['Scalping', 'XAUUSD'],
    backtestWinRate: 78,
    backtestProfit: '+245%',
    link: '#',
  },
  {
    id: 2,
    name: 'EMA Crossover Pro',
    description: 'Multi-EMA crossover system with trend confirmation filters',
    category: ['Swing', 'EMA'],
    backtestWinRate: 72,
    backtestProfit: '+189%',
    link: '#',
  },
  {
    id: 3,
    name: 'Momentum Breakout',
    description: 'Breakout trading strategy with volume confirmation and stop-loss automation',
    category: ['Breakout', 'Momentum'],
    backtestWinRate: 68,
    backtestProfit: '+312%',
    link: '#',
  },
  {
    id: 4,
    name: 'Trend Following Elite',
    description: 'Advanced trend following system with dynamic trailing stops',
    category: ['Swing', 'Trend'],
    backtestWinRate: 75,
    backtestProfit: '+278%',
    link: '#',
  },
  {
    id: 5,
    name: 'Quick Scalp',
    description: 'Ultra-fast scalping with 1-minute timeframes and instant execution',
    category: ['Scalping'],
    backtestWinRate: 82,
    backtestProfit: '+156%',
    link: '#',
  },
  {
    id: 6,
    name: 'Smart EMA',
    description: 'Adaptive EMA strategy that adjusts to market volatility conditions',
    category: ['EMA', 'Adaptive'],
    backtestWinRate: 71,
    backtestProfit: '+201%',
    link: '#',
  },
]

const filters = ['All', 'Scalping', 'Swing', 'EMA', 'Breakout', 'Momentum', 'Trend', 'XAUUSD', 'Mean Reversion', 'RSI', 'Reversal']

const Strategies = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredStrategies =
    activeFilter === 'All'
      ? strategies
      : strategies.filter((strategy) => strategy.category.includes(activeFilter))

  return (
    <section id="strategies" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 neon-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8 }}
        >
          Strategies
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Backtested trading strategies ready for live markets
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold ${
                activeFilter === filter
                  ? 'bg-neon-gold text-dark-bg glow-gold'
                  : 'glass border border-gray-600 text-gray-300 hover:border-neon-teal hover:text-neon-teal'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
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
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-neon-teal group-hover:text-neon-gold transition-colors duration-300 ease-in-out">
                  {strategy.name}
                </h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-neon-gold">{strategy.backtestWinRate}%</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{strategy.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {strategy.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-dark-card rounded-full text-sm text-neon-gold border border-neon-gold/30"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-400">Backtest Profit</div>
                  <div className="text-xl font-bold text-neon-teal">{strategy.backtestProfit}</div>
                </div>
              </div>
              <a
                href={strategy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neon-gold hover:text-neon-teal transition-colors duration-300 ease-in-out"
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

export default Strategies
