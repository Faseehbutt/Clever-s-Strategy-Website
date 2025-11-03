'use client'

import { motion } from 'framer-motion'
import { FiYoutube, FiBarChart2 } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'
import { IconType } from 'react-icons'

interface SocialLink {
  icon: IconType
  label: string
  href: string
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks: SocialLink[] = [
    { icon: FiBarChart2, label: 'TradingView', href: '#' },
    { icon: FiYoutube, label: 'YouTube', href: '#' },
    { icon: FaDiscord, label: 'Discord', href: '#' },
    { icon: SiTelegram, label: 'Telegram', href: '#' },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <motion.div
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm animate-flicker neon-gold inline-block">
              © {currentYear} The Clever Traders. All rights reserved.
            </p>
          </motion.div>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center border border-gray-600 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '50px' }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  <IconComponent className="text-xl text-gray-400 group-hover:text-neon-teal transition-colors duration-300 ease-in-out" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
