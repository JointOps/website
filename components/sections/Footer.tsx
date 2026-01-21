'use client'

import { motion } from 'framer-motion'

import { SOCIAL_LINKS } from '@/constants'

import { GitHub, LinkedIn, Logo, Twitter } from '../icons'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-[#0A0A0F] to-black section-padding px-6 lg:px-8">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 bg-blob-sm -translate-x-1/2 rounded-full bg-accent/5 opacity-20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Main content - centered and stacked */}
        <div className="flex flex-col items-center text-center">
          {/* Statement/Tagline */}
          <motion.p
            className="mb-8 font-display text-display-small font-semibold leading-relaxed text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We build what others can&apos;t.
          </motion.p>

          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Logo className="h-6 md:h-7 w-auto text-foreground" />
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mb-12 flex items-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-all duration-300 hover:text-accent"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter className="icon-sm" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-all duration-300 hover:text-accent"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <GitHub className="icon-sm" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-all duration-300 hover:text-accent"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <LinkedIn className="icon-sm" />
            </motion.a>
          </motion.div>

          {/* Copyright - minimal and subtle */}
          <motion.p
            className="text-body text-muted/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © {currentYear} Vyndra
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
