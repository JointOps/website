'use client'

import { memo } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface LogoProps {
  className?: string
  animate?: boolean
}

// Memoized smoke particle - prevents unnecessary re-renders
const SmokeParticle = memo(({
  delay = 0,
  duration = 3,
  startX = 0,
  drift = 5,
  size = 'md',
  isInView = true,
}: {
  delay?: number
  duration?: number
  startX?: number
  drift?: number
  size?: 'sm' | 'md' | 'lg'
  isInView?: boolean
}) => {
  const sizes = {
    sm: { width: '3px', height: '8px', blur: '2px' },
    md: { width: '4px', height: '12px', blur: '3px' },
    lg: { width: '6px', height: '16px', blur: '4px' },
  }

  const { width, height, blur } = sizes[size]

  return (
    <motion.div
      className="absolute bottom-0 rounded-full"
      style={{
        width,
        height,
        left: startX,
        background: 'linear-gradient(to top, rgba(255,255,255,0.25), rgba(255,255,255,0.08), transparent)',
        filter: `blur(${blur})`,
      }}
      initial={{
        y: 0,
        opacity: 0,
        scale: 0.5,
        x: 0,
      }}
      animate={isInView ? {
        y: [0, -20, -35],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 1.5],
        x: [0, drift, drift * 1.5],
        rotate: [0, drift > 0 ? 15 : -15, drift > 0 ? 25 : -25],
      } : { y: 0, opacity: 0 }}
      transition={{
        duration,
        repeat: isInView ? Infinity : 0,
        delay,
        ease: 'easeOut',
      }}
    />
  )
})
SmokeParticle.displayName = 'SmokeParticle'

// Memoized smoke wisp
const SmokeWisp = memo(({
  delay = 0,
  side = 'center',
  isInView = true,
}: {
  delay?: number
  side?: 'left' | 'center' | 'right'
  isInView?: boolean
}) => {
  const xOffset = side === 'left' ? -3 : side === 'right' ? 3 : 0
  const drift = side === 'left' ? -8 : side === 'right' ? 8 : 3

  return (
    <motion.div
      className="absolute bottom-0 w-[2px] origin-bottom"
      style={{
        left: `calc(50% + ${xOffset}px)`,
        height: '20px',
        background: 'linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0.1), transparent)',
        filter: 'blur(1px)',
      }}
      initial={{
        scaleY: 0,
        opacity: 0,
        x: 0,
        rotate: 0,
      }}
      animate={isInView ? {
        scaleY: [0, 1, 0.8, 0],
        opacity: [0, 0.5, 0.3, 0],
        x: [0, drift * 0.3, drift * 0.6, drift],
        rotate: [0, drift > 0 ? 10 : -10, drift > 0 ? 20 : -20, drift > 0 ? 35 : -35],
      } : { scaleY: 0, opacity: 0 }}
      transition={{
        duration: 2.5,
        repeat: isInView ? Infinity : 0,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    />
  )
})
SmokeWisp.displayName = 'SmokeWisp'

// Main Logo component - memoized
export const Logo = memo(({ className = '', animate = true }: LogoProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  // Only animate when in viewport AND animate prop is true
  const shouldAnimate = animate && isInView

  return (
    <div ref={ref} className={`relative flex items-center ${className}`} aria-label="JointOps">
      <div className="relative">
        {/* Typography */}
        <div className="relative flex items-baseline font-display tracking-tight select-none">
          {/* "Joint" */}
          <span className="relative">
            <span className="relative inline-block font-bold text-white">J</span>
            <span className="relative inline-block font-semibold text-white/90">o</span>
            {/* i with ember dot */}
            <span className="relative inline-block font-semibold text-white/90">
              <span className="relative">
                ı
                {/* Glowing ember */}
                {animate ? (
                  <motion.span className="absolute -top-[0.15em] left-1/2 -translate-x-1/2">
                    {/* Outer glow */}
                    <motion.span
                      className="absolute inset-0 -m-1 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)',
                      }}
                      animate={shouldAnimate ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.7, 0.4],
                      } : { scale: 1, opacity: 0.4 }}
                      transition={{
                        duration: 1.5,
                        repeat: shouldAnimate ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                    />
                    {/* Main ember */}
                    <motion.span
                      className="block h-[0.3em] w-[0.3em] rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #ffaa00 0%, #ff6b35 40%, #ff4500 70%, #cc3700 100%)',
                        boxShadow: '0 0 4px #ff6b35, 0 0 8px #ff4500, 0 0 12px #ff450060',
                      }}
                      animate={shouldAnimate ? {
                        scale: [1, 1.15, 1],
                      } : { scale: 1 }}
                      transition={{
                        duration: 1.5,
                        repeat: shouldAnimate ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.span>
                ) : (
                  <span
                    className="absolute -top-[0.15em] left-1/2 -translate-x-1/2 block h-[0.3em] w-[0.3em] rounded-full"
                    style={{
                      background: 'radial-gradient(circle, #ffaa00 0%, #ff6b35 40%, #ff4500 70%, #cc3700 100%)',
                      boxShadow: '0 0 4px #ff6b35, 0 0 8px #ff4500',
                    }}
                  />
                )}
              </span>
            </span>
            <span className="relative inline-block font-semibold text-white/90">n</span>
            <span className="relative inline-block font-semibold text-white/90">t</span>
          </span>

          {/* "Ops" */}
          <span className="relative">
            <span className="relative inline-block font-bold bg-gradient-to-r from-accent via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              O
              <span
                className="absolute left-0 top-1/2 -translate-x-[0.15em] w-[0.3em] h-[0.08em] -translate-y-1/2"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5))',
                }}
              />
            </span>
            <span className="relative inline-block font-semibold bg-gradient-to-r from-accent/90 to-cyan-400/90 bg-clip-text text-transparent">
              p
            </span>
            <span className="relative inline-block font-semibold bg-gradient-to-r from-purple-400/90 to-cyan-400 bg-clip-text text-transparent">
              s
            </span>
          </span>
        </div>

        {/* Smoke effects - only render when animate is true */}
        {animate && (
          <div className="absolute pointer-events-none" style={{ left: '1.85em', top: '-0.3em' }}>
            <SmokeWisp delay={0} side="center" isInView={shouldAnimate} />
            <SmokeWisp delay={0.8} side="left" isInView={shouldAnimate} />
            <SmokeWisp delay={1.6} side="right" isInView={shouldAnimate} />

            <SmokeParticle delay={0.2} duration={2.5} startX={-2} drift={-6} size="sm" isInView={shouldAnimate} />
            <SmokeParticle delay={0.7} duration={3} startX={2} drift={8} size="md" isInView={shouldAnimate} />
            <SmokeParticle delay={1.2} duration={2.8} startX={0} drift={-4} size="lg" isInView={shouldAnimate} />
            <SmokeParticle delay={1.8} duration={2.6} startX={1} drift={5} size="sm" isInView={shouldAnimate} />
            <SmokeParticle delay={2.3} duration={3.2} startX={-1} drift={-7} size="md" isInView={shouldAnimate} />

            {/* Ambient haze */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                filter: 'blur(4px)',
              }}
              animate={shouldAnimate ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
                y: [0, -5, 0],
              } : { scale: 1, opacity: 0.3 }}
              transition={{
                duration: 4,
                repeat: shouldAnimate ? Infinity : 0,
                ease: 'easeInOut',
              }}
            />
          </div>
        )}

        {/* Hover underline */}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left overflow-hidden rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div
            className="h-full w-full"
            style={{
              background: 'linear-gradient(90deg, #ff6b35 0%, rgba(99,102,241,0.8) 50%, rgba(6,182,212,0.8) 100%)',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
})
Logo.displayName = 'Logo'

// Compact logo mark - memoized
export const LogoMark = memo(({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative font-display font-bold tracking-tight ${className}`} aria-label="JointOps">
      <span className="text-white">J</span>
      <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">O</span>
      <span
        className="absolute -top-0.5 -right-1 h-1.5 w-1.5 rounded-full"
        style={{
          background: 'radial-gradient(circle, #ffaa00 0%, #ff4500 100%)',
          boxShadow: '0 0 4px #ff6b35, 0 0 6px #ff450080',
        }}
      />
    </div>
  )
})
LogoMark.displayName = 'LogoMark'
