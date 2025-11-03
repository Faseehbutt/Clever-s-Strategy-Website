'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16 neon-teal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-neon-gold mb-4">The Clever Traders</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a passionate community of traders and developers dedicated to creating the
              most advanced TradingView indicators and strategies. Our mission is to empower
              traders with cutting-edge tools that provide a competitive edge in the markets.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Specializing in XAUUSD (Gold) trading, we combine technical analysis, algorithmic
              thinking, and real-world trading experience to deliver solutions that work in live
              market conditions.
            </p>
            <div className="flex gap-8 pt-6">
              {['Innovation', 'Precision', 'Community'].map((value, index) => (
                <motion.div
                  key={value}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '100px' }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-neon-gold mb-2">{value}</div>
                  <div className="w-12 h-1 bg-neon-teal mx-auto"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-8 justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 0.8 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-32 h-32 glass rounded-full flex items-center justify-center border-2 border-neon-teal/30 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '100px' }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 0.8,
                  layout: false
                }}
              >
                <div className="text-4xl font-bold text-neon-gold">
                  {String.fromCharCode(65 + i)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
