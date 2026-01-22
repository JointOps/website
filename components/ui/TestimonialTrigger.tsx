'use client'

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TestimonialTriggerProps {
  onClick: () => void
  totalReviews: number
  averageRating: number
}

export const TestimonialTrigger = ({ onClick, totalReviews, averageRating }: TestimonialTriggerProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Show button after scrolling down 800px (after main hero/services sections)
      setIsVisible(latest > 800)
    })

    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-black/80 via-black/60 to-black/80 p-1 backdrop-blur-2xl transition-all duration-700 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 md:left-8 md:bottom-12 md:translate-x-0 md:gap-4 lg:left-12"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="View client testimonials"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.3), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Main content wrapper */}
      <div className="relative flex items-center gap-3 px-3 py-2.5 md:gap-4 md:px-4 md:py-3">
        {/* Rating badge - Left side */}
        <div className="relative flex flex-col items-center justify-center gap-0.5 rounded-xl border border-white/[0.06] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-2 backdrop-blur-sm md:gap-1 md:p-3">
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

          {/* Star icon with animation */}
          <motion.div
            className="relative"
            animate={isHovered ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <svg className="h-6 w-6 text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)] md:h-8 md:w-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </motion.div>

          {/* Rating number */}
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl font-bold tracking-tight text-white md:text-2xl">{averageRating}</span>
            <span className="text-xs font-medium text-white/40 md:text-sm">/5</span>
          </div>
        </div>

        {/* Text content - Center */}
        <div className="flex flex-col gap-0.5 md:gap-1">
          <div className="flex items-center gap-1.5 md:gap-2">
            <span className="text-base font-semibold tracking-tight text-white md:text-lg">Client Reviews</span>

            {/* Verified badge */}
            <motion.div
              className="flex items-center gap-0.5 rounded-full bg-accent/10 px-1.5 py-0.5 md:gap-1 md:px-2"
              animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
            >
              <svg className="h-2.5 w-2.5 text-accent md:h-3 md:w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-medium text-accent md:text-xs">Verified</span>
            </motion.div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/50 md:gap-2 md:text-sm">
            <span className="font-medium">{totalReviews} reviews</span>
            <span className="text-white/20">•</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3 w-3 text-accent/80 md:h-3.5 md:w-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow icon - Right side */}
        <motion.div
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20 md:h-10 md:w-10"
          animate={isHovered ? { x: [0, 4, 0] } : {}}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
        >
          <svg
            className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-accent/40"
              initial={{
                x: '50%',
                y: '50%',
                opacity: 0,
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 200}%`,
                y: `${50 + (Math.random() - 0.5) * 200}%`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}

      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/0 via-accent/5 to-accent/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </motion.button>
  )
}
