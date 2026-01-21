'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

import { NAV_LINKS } from '@/constants'

import { SOCIAL_LINKS } from '@/constants'

import { GitHub, LinkedIn, Twitter } from '../icons'
import { AnimatedMenuIcon } from './AnimatedMenuIcon'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[#0A0A0F] shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <motion.button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-foreground transition-colors hover:bg-white/10"
                aria-label="Close menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatedMenuIcon isOpen={true} className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Navigation Links - Responsive text sizing */}
            <nav className="flex flex-1 flex-col justify-center gap-6 px-6 sm:gap-8 sm:px-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group relative block text-3xl font-bold text-foreground transition-colors hover:text-accent sm:text-4xl"
                  >
                    <span className="relative">
                      {link.label}
                      {/* Underline effect */}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-cyan-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 + 0.2, duration: 0.4 }}
                className="mt-6 sm:mt-8"
              >
                <Link href="#contact" onClick={onClose} className="block">
                  <motion.button
                    className="group relative w-full overflow-hidden rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-display text-base font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient glow on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
                      }}
                    />

                    <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                      <span className="relative">
                        Start a Project
                        {/* Subtle underline effect */}
                        <motion.span
                          className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent to-cyan-500"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        />
                      </span>
                      <motion.svg
                        className="icon-sm"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </nav>

            {/* Social Links Footer - Responsive padding and safe area */}
            <motion.div
              className="safe-bottom border-t border-white/10 p-6 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <p className="mb-3 text-xs text-muted sm:mb-4 sm:text-sm">Connect with us</p>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex items-center justify-center rounded-full bg-white/5 text-muted transition-all hover:bg-accent hover:text-black"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Twitter"
                >
                  <Twitter className="icon-sm" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex items-center justify-center rounded-full bg-white/5 text-muted transition-all hover:bg-accent hover:text-black"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <GitHub className="icon-sm" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex items-center justify-center rounded-full bg-white/5 text-muted transition-all hover:bg-accent hover:text-black"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="icon-sm" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
