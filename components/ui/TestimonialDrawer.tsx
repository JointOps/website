'use client'

import { motion, AnimatePresence, useMotionValue, PanInfo } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

import type { Testimonial } from '@/types/testimonials'
import { TestimonialCard } from './TestimonialCard'

interface TestimonialDrawerProps {
  isOpen: boolean
  onClose: () => void
  testimonials: Testimonial[]
  initialIndex?: number
}

export const TestimonialDrawer = ({
  isOpen,
  onClose,
  testimonials,
  initialIndex = 0,
}: TestimonialDrawerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const dragX = useMotionValue(0)

  const totalReviews = testimonials.length
  const currentTestimonial = testimonials[currentIndex] || testimonials[0]

  const paginate = useCallback(
    (newDirection: number) => {
      // Prevent multiple transitions at once
      if (isTransitioning) return

      setIsTransitioning(true)
      setDirection(newDirection)
      setCurrentIndex((prev) => {
        const next = prev + newDirection
        if (next < 0) return totalReviews - 1
        if (next >= totalReviews) return 0
        return next
      })

      // Reset transitioning flag after animation completes
      setTimeout(() => setIsTransitioning(false), 150)
    },
    [totalReviews, isTransitioning]
  )

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      paginate(-1)
    } else if (info.offset.x < -swipeThreshold) {
      paginate(1)
    }
  }

  useEffect(() => {
    if (!isOpen || !isAutoPlaying) return

    const timer = setInterval(() => {
      paginate(1)
    }, 4000)

    return () => clearInterval(timer)
  }, [isOpen, isAutoPlaying, paginate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, paginate])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  if (!currentTestimonial || testimonials.length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            {/* Static gradient orbs - removed animations for performance */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl opacity-40" />
            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl opacity-30" />
          </motion.div>

          {/* Main drawer content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
            <motion.div
              className="relative flex h-full w-full max-w-5xl flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                className="mb-6 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {/* Title and counter */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/10">
                      <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white md:text-3xl">Client Testimonials</h2>
                      <p className="text-sm text-white/50">
                        Review {currentIndex + 1} of {totalReviews}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  {/* Auto-play toggle */}
                  <motion.button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                  >
                    {isAutoPlaying ? (
                      <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H5zM13 4a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2z" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    )}
                  </motion.button>

                  {/* Close button */}
                  <motion.button
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
                    whileHover={{ scale: 1.03, rotate: 90 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label="Close testimonials"
                  >
                    <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              {/* Card container - optimized for performance */}
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: 'tween',
                      duration: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    style={{ x: dragX }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-full w-full overflow-y-auto">
                      <TestimonialCard testimonial={currentTestimonial} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation footer */}
              <motion.div
                className="mt-6 flex items-center justify-between gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {/* Previous button */}
                <motion.button
                  onClick={() => paginate(-1)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Previous testimonial"
                >
                  <svg className="h-5 w-5 text-white/70 transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden font-medium text-white/70 transition-colors group-hover:text-white sm:block">
                    Previous
                  </span>
                </motion.button>

                {/* Progress dots */}
                <div className="flex items-center gap-2">
                  {testimonials.slice(0, 10).map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => {
                        if (isTransitioning || i === currentIndex) return
                        setIsTransitioning(true)
                        setDirection(i > currentIndex ? 1 : -1)
                        setCurrentIndex(i)
                        setTimeout(() => setIsTransitioning(false), 150)
                      }}
                      className="relative h-2 overflow-hidden rounded-full transition-all duration-300"
                      style={{
                        width: i === currentIndex ? '32px' : '8px',
                        backgroundColor: i === currentIndex ? 'rgba(var(--accent-rgb), 0.8)' : 'rgba(255, 255, 255, 0.2)',
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    >
                      {i === currentIndex && (
                        <motion.div
                          className="absolute inset-0 bg-accent"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{
                            duration: 4,
                            ease: 'linear',
                            repeat: isAutoPlaying ? Infinity : 0,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                  {totalReviews > 10 && (
                    <span className="ml-2 text-xs text-white/40">+{totalReviews - 10} more</span>
                  )}
                </div>

                {/* Next button */}
                <motion.button
                  onClick={() => paginate(1)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Next testimonial"
                >
                  <span className="hidden font-medium text-white/70 transition-colors group-hover:text-white sm:block">
                    Next
                  </span>
                  <svg className="h-5 w-5 text-white/70 transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Keyboard hints */}
              <motion.div
                className="mt-4 flex items-center justify-center gap-6 text-xs text-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">←</kbd>
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">→</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">ESC</kbd>
                  Close
                </span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  Drag to swipe
                </span>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
