'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { PROOF_METRICS } from '@/constants'
import { usePrefersReducedMotion } from '@/hooks'

// Animated counter component
const AnimatedNumber = ({
  value,
  prefersReducedMotion,
}: {
  value: string
  prefersReducedMotion: boolean
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Extract numeric part and suffix (e.g., "10+" -> 10, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const numericValue = numericMatch ? parseInt(numericMatch[1]!, 10) : 0
  const suffix = numericMatch ? (numericMatch[2] ?? '') : value

  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 50,
    damping: 15,
  })

  const display = useTransform(spring, (current) => Math.round(current).toString())

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      spring.set(numericValue)
    } else if (prefersReducedMotion) {
      spring.jump(numericValue)
    }
  }, [isInView, spring, numericValue, prefersReducedMotion])

  if (prefersReducedMotion || !numericMatch) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export const ProofBar = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-28">
      {/* Subtle ambient glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      {/* Accent border lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-0"
        >
          {PROOF_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative flex flex-col items-center px-6 sm:px-8 md:px-12 lg:px-16"
            >
              {/* Vertical divider (not on first item) */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block" />
              )}

              {/* Glowing number */}
              <div className="relative">
                {/* Subtle glow effect */}
                <div
                  className="absolute -inset-2 blur-2xl opacity-30"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.5) 0%, transparent 70%)',
                  }}
                />
                {/* Gradient number text */}
                <span className="relative bg-gradient-to-b from-white to-white/80 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                  <AnimatedNumber value={metric.value} prefersReducedMotion={prefersReducedMotion} />
                </span>
              </div>

              {/* Subtle accent underline */}
              <div className="mt-3 h-px w-10 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              {/* Label */}
              <div className="mt-3 text-center text-sm font-medium tracking-wide text-white/40 sm:text-base">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
