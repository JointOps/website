'use client'

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

import { NAV_LINKS } from '@/constants'
import { useActiveSection, useScrollDirection } from '@/hooks'
import { cn } from '@/lib/utils'

import { Logo } from '../icons'
import { AnimatedMenuIcon } from './AnimatedMenuIcon'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const scrollDirection = useScrollDirection()
  const activeSection = useActiveSection(['hero', 'services', 'projects', 'testimonials', 'why-jointops', 'contact'])

  const isHidden = scrollDirection === 'down' && isScrolled

  // Track scroll for background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 300, damping: 30 }
  const spotlightX = useSpring(mouseX, springConfig)
  const spotlightY = useSpring(mouseY, springConfig)

  // 3D tilt effect
  const rotateX = useTransform(mouseY, [0, 60], [2, -2])
  const rotateY = useTransform(mouseX, [0, 800], [-2, 2])
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  // Spotlight background gradient
  const spotlightBackground = useMotionTemplate`radial-gradient(300px circle at ${spotlightX}px ${spotlightY}px, rgba(99,102,241,0.15), transparent 60%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(400)
    mouseY.set(30)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed left-0 right-0 top-0 z-40 px-4 py-3 sm:px-6 sm:py-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.nav
          ref={navRef}
          className={cn(
            'relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 sm:py-3',
            isScrolled
              ? 'border border-white/[0.08] bg-black/70 shadow-2xl shadow-black/40 backdrop-blur-2xl'
              : 'bg-transparent'
          )}
          style={{
            rotateX: isScrolled ? springRotateX : 0,
            rotateY: isScrolled ? springRotateY : 0,
            transformPerspective: 1000,
          }}
        >
          {/* Animated gradient border - uses CSS animation for better performance */}
          {isScrolled && (
            <div className="absolute -inset-[1px] -z-10 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 animate-border-rotate" />
            </div>
          )}

          {/* Inner background with noise texture */}
          {isScrolled && (
            <div className="absolute inset-0 -z-10 rounded-2xl bg-black/60" />
          )}

          {/* Spotlight effect that follows cursor */}
          <motion.div
            className="pointer-events-none absolute -inset-px -z-10 overflow-hidden rounded-2xl transition-opacity duration-300"
            style={{
              opacity: isScrolled ? 1 : 0,
              background: spotlightBackground,
            }}
          />

          {/* Aurora glow blobs */}
          {isScrolled && (
            <>
              <motion.div
                className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </>
          )}

          {/* Logo */}
          <Link href="/" className="group relative z-10 flex items-center" aria-label="JointOps home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Logo className="text-lg sm:text-xl" />
              {/* Glow effect behind logo on hover */}
              <motion.div
                className="absolute -inset-4 -z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Center pill */}
          <div className="hidden items-center md:flex">
            <div className="relative flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur-xl">
              {NAV_LINKS.map((link, index) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                const isHovered = hoveredIndex === index
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative z-10 flex items-center justify-center px-3 py-1.5 lg:px-4"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Active/Hover background - positioned relative to each link */}
                    {(isActive || isHovered) && (
                      <motion.span
                        layoutId={isActive ? 'activeNavBg' : undefined}
                        className={cn(
                          'absolute inset-0 rounded-full',
                          isActive
                            ? 'border border-accent/30 bg-accent/10'
                            : 'bg-gradient-to-r from-accent/20 to-cyan-500/20'
                        )}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    <motion.span
                      className={cn(
                        'relative text-xs font-medium transition-all duration-300 lg:text-sm',
                        isActive ? 'text-white' : 'text-white/50 group-hover:text-white'
                      )}
                    >
                      {link.label}
                    </motion.span>

                    {/* Active glow dot */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Button - Right side with premium effects */}
          <div className="hidden md:flex">
            <Link href="#contact">
              <motion.button
                className="group relative overflow-hidden rounded-full px-5 py-2 text-xs font-semibold text-white lg:px-6 lg:py-2.5 lg:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Animated gradient border */}
                <span className="absolute inset-0 rounded-full">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple-500 via-cyan-500 to-accent bg-[length:200%_100%] animate-[gradient-x_3s_linear_infinite]" />
                </span>

                {/* Inner background */}
                <span className="absolute inset-[1.5px] rounded-full bg-black/90 transition-all duration-300 group-hover:bg-black/70" />

                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-[1.5px] -z-0 overflow-hidden rounded-full"
                  initial={false}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.span>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent transition-all duration-300 group-hover:from-accent group-hover:to-cyan-400">
                    Let&apos;s Talk
                  </span>
                  <motion.svg
                    className="h-3.5 w-3.5 text-white/80 transition-colors duration-300 group-hover:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    initial={{ x: 0, rotate: 0 }}
                    whileHover={{ x: 3, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>

                {/* Glow effect on hover */}
                <motion.span
                  className="absolute -inset-1 -z-10 rounded-full bg-accent/50 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="relative z-10 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <AnimatedMenuIcon isOpen={false} />
          </button>
        </motion.nav>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
