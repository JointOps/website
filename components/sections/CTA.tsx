'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { usePrefersReducedMotion } from '@/hooks'

export const CTA = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-black section-padding px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute left-0 top-1/2 bg-blob-lg -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
              animate={{
                x: ['-10%', '10%', '-10%'],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute right-0 top-1/2 bg-blob-md -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
              animate={{
                x: ['10%', '-10%', '10%'],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}
        {prefersReducedMotion && (
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-cyan-500/10" />
        )}
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline - Staggered word reveal */}
          <div className="mb-8 space-y-2 lg:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-display text-5xl font-bold text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
                Ready to Build
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
                Something{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent via-cyan-500 to-accent bg-clip-text text-transparent">
                    Worth Building
                  </span>
                  {/* Underline accent */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
                ?
              </h2>
            </motion.div>
          </div>

          {/* Supporting Text */}
          <motion.p
            className="mx-auto mt-8 max-w-3xl text-lg text-muted md:text-xl lg:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No sales pitch. Just an honest conversation about what you&apos;re building and how we can help make it real.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="#contact">
              <motion.button
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.03] px-12 py-6 font-display text-lg font-medium text-white/90 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.06] md:px-14 md:py-7 md:text-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-[1px] rounded-[15px] bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle shimmer on hover */}
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    translateX: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: 'easeInOut',
                  }}
                />

                <span className="relative tracking-wide">Start the Conversation</span>

                {/* Elegant arrow */}
                <motion.svg
                  className="relative h-5 w-5 text-white/70 transition-colors duration-500 group-hover:text-white/90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'easeInOut',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl bg-gradient-to-tl from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            className="mt-8 text-sm text-muted/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            We respond within 24 hours • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
