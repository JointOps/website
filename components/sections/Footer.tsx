'use client'

import { motion } from 'framer-motion'

import { SOCIAL_LINKS } from '@/constants'

import { Discord, GitHub, LinkedIn, Logo, Twitter } from '../icons'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black px-6 py-16 lg:px-8 lg:py-20">
      {/* Minimal grid background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Modern single-line layout */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left: Logo + Copyright */}
          <motion.div
            className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo className="text-base" animate={false} />
            <div className="hidden h-4 w-px bg-white/[0.08] lg:block" />
            <p className="text-sm text-white/30">© {currentYear}</p>
          </motion.div>

          {/* Center: Minimal tagline */}
          <motion.p
            className="text-center text-sm text-white/40 lg:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Your vision, our expertise
          </motion.p>

          {/* Right: Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/70"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/70"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <GitHub className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/70"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <LinkedIn className="h-4 w-4" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-white/40 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/70"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Discord"
            >
              <Discord className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle top border */}
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </footer>
  )
}
