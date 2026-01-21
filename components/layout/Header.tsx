'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

import { NAV_LINKS } from '@/constants'
import { useActiveSection, useScrollDirection } from '@/hooks'
import { cn } from '@/lib/utils'

import { Logo } from '../icons'
import { AnimatedMenuIcon } from './AnimatedMenuIcon'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const activeSection = useActiveSection(['hero', 'services', 'about', 'contact'])

  const isHidden = scrollDirection === 'down'

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          'fixed left-0 right-0 top-0 z-40 transition-all duration-300',
          scrollDirection !== null && 'border-b border-white/10 bg-black/80 backdrop-blur-xl'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          {/* Logo with subtle animation - Responsive sizing */}
          <Link href="/" className="group flex items-center" aria-label="Vyndra home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Logo className="h-5 w-auto text-foreground transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] sm:h-6 md:h-7" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-xs font-medium transition-colors duration-300 md:text-sm"
                >
                  {/* Link text */}
                  <span
                    className={cn(
                      'relative z-10 transition-colors duration-300',
                      isActive ? 'text-foreground' : 'text-muted group-hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </span>

                  {/* Animated underline on hover */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  />

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      className="absolute -left-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  )}
                </Link>
              )
            })}

            {/* CTA Button - Premium glass morphism design - Responsive sizing */}
            <Link href="#contact">
              <motion.button
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-white/10 md:px-5 md:py-2.5 md:text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
                  }}
                />

                <span className="relative flex items-center gap-1.5 md:gap-2">
                  <span className="relative">
                    Start a Project
                    {/* Subtle underline effect */}
                    <motion.span
                      className="absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-accent to-cyan-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  <motion.svg
                    className="icon-xs"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    initial={{ x: 0, opacity: 0.7 }}
                    whileHover={{ x: 2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button - Touch-friendly */}
          <button
            type="button"
            className="touch-target flex items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <AnimatedMenuIcon isOpen={false} />
          </button>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
