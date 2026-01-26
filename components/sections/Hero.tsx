'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import { usePrefersReducedMotion } from '@/hooks'
import { siteContent } from '@/lib/content/site-content'

import { Button, EmailCapture, FadeIn } from '../ui'

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLElement>(null)
  const subheadline = siteContent.hero.subheadline.default
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Split subheadline into lines for display
  const subheadlineLines = subheadline.split('\n\n')

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Enhanced Background Layer with parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
        {/* Subtle gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.08),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_50%,rgba(6,182,212,0.06),rgba(0,0,0,0))]" />

        {!prefersReducedMotion && (
          <>
            {/* Elegant primary blob with subtle movement - OPTIMIZED */}
            <motion.div
              className="absolute left-1/4 top-1/4 bg-blob-lg rounded-full bg-accent/12 blur-[80px] will-change-transform"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Cyan accent - refined - OPTIMIZED */}
            <motion.div
              className="absolute right-1/4 top-1/3 bg-blob-lg rounded-full bg-cyan-500/10 blur-[80px] will-change-transform"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Deeper purple for sophistication - OPTIMIZED */}
            <motion.div
              className="absolute right-1/3 bottom-1/4 bg-blob-lg rounded-full bg-purple-500/8 blur-[80px] will-change-transform"
              animate={{
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Floating orbs - reduced to 3 for performance */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-accent/40 blur-sm"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
                animate={{ y: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </>
        )}

        {prefersReducedMotion && (
          <>
            <div className="absolute left-1/2 top-1/2 bg-blob-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute left-1/3 top-1/3 bg-blob-md rounded-full bg-cyan-500/8 blur-3xl" />
            <div className="absolute right-1/3 bottom-1/3 bg-blob-md rounded-full bg-purple-500/8 blur-3xl" />
          </>
        )}

        {/* Single scanning line - reduced for performance */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
            animate={{ y: ['20%', '80%'], opacity: [0, 0.4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* Sophisticated vignette - frames the content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />

        {/* Subtle tech grid - barely visible, adds depth */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Noise texture overlay for film grain effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content with subtle parallax */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        style={{ y: contentY }}
      >
        <FadeIn>
          {/* Refined badge with elegant sophistication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative mb-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur-xl transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.07]"
          >
            {/* Subtle shimmer - elegant, not flashy */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{
                translateX: ['-100%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 4,
                ease: 'easeInOut',
              }}
            />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent/80" />
            </span>
            <span className="relative">Building the Future</span>
          </motion.div>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span>Ideas In.</span>
            <br />
            <span className="relative inline-block bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              Products Out.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted/90 md:text-xl">
            {subheadlineLines[0]}
            {subheadlineLines[1] && (
              <>
                <br />
                <span className="mt-2 block">{subheadlineLines[1]}</span>
              </>
            )}
          </p>
        </FadeIn>

        {/* Social Proof Badge */}
        <FadeIn delay={0.75}>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted/80">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium text-foreground/90">5.0 Client Rating</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-accent/40" />
            <div className="font-medium text-foreground/90">30+ Countries Trust Us</div>
          </div>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" showArrow>
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </Link>
            <Link href="#services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary">See Our Work</Button>
              </motion.div>
            </Link>
          </div>
        </FadeIn>

        {/* Email Capture */}
        <FadeIn delay={1.1}>
          <div className="mx-auto mt-8 max-w-md pb-24 md:pb-32">
            <EmailCapture
              placeholder="your@email.com"
              buttonText="Get Updates"
            />
          </div>
        </FadeIn>
      </motion.div>
    </section>
  )
}
