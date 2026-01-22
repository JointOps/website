'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

import { usePrefersReducedMotion } from '@/hooks'

import { AnimatedText, Button, FadeIn } from '../ui'

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

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

            {/* Sophisticated orbs floating system - OPTIMIZED: reduced from 12 to 6 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + (i * 7) % 70}%`,
                  top: `${25 + (i % 4) * 18}%`,
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -100 - (i % 3) * 15, 0],
                  }}
                  transition={{
                    duration: 10 + i * 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-md"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Core */}
                  <motion.div
                    className="h-1 w-1 rounded-full bg-accent/60"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </motion.div>
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

        {/* Cinematic depth with layered effects */}
        {!prefersReducedMotion && (
          <>
            {/* Horizontal scanning lines - cyberpunk aesthetic */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
              animate={{
                y: ['20%', '80%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/8 to-transparent"
              animate={{
                y: ['30%', '70%'],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
                delay: 2,
              }}
            />

            {/* Subtle rotating aurora effect */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="h-full w-full opacity-30"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.05) 25%, transparent 50%, rgba(6,182,212,0.05) 75%, transparent 100%)',
                  filter: 'blur(60px)',
                }}
              />
            </motion.div>
          </>
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
            <AnimatedText text="We Build What Others" />
            <br />
            <span className="relative inline-block">
              <span className="relative bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                <AnimatedText text="Can't" delay={0.3} />
                {/* Refined glow - subtle and sophisticated */}
                <motion.div
                  className="absolute inset-0 -z-10 blur-3xl"
                  animate={{
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(99,102,241,0.4), rgba(6,182,212,0.3))',
                  }}
                />
              </span>
              {/* Elegant underline accent */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted/90 md:text-xl">
            Blockchain protocols, web applications, and digital infrastructure for companies that
            refuse to compromise on quality.
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" showArrow>
                  Start a Project
                </Button>
              </motion.div>
            </Link>
            <Link href="#services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary">See What We Do</Button>
              </motion.div>
            </Link>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-muted/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs font-medium">Scroll to explore</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
