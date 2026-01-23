'use client'

import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface ShowcaseTriggerProps {
  onProjectsClick: () => void
  onReviewsClick: () => void
  totalReviews: number
  averageRating: number
}

export const ShowcaseTrigger = ({
  onProjectsClick,
  onReviewsClick,
  totalReviews,
  averageRating,
}: ShowcaseTriggerProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)

  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 200)
    })
    return () => unsubscribe()
  }, [scrollY])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isExpanded])

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleMainClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleLongPressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsExpanded(true)
    }, 300)
  }

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
  }

  const handleProjectsClick = () => {
    setIsExpanded(false)
    onProjectsClick()
  }

  const handleReviewsClick = () => {
    setIsExpanded(false)
    onReviewsClick()
  }

  const scrollToTop = () => {
    setIsExpanded(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      window.dispatchEvent(new Event('reset-animations'))
    }, 100)
  }

  // Speed dial items
  const dialItems = [
    {
      id: 'top',
      label: 'Back to Top',
      sublabel: 'Scroll up',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      ),
      onClick: scrollToTop,
    },
    {
      id: 'reviews',
      label: `${totalReviews} Reviews`,
      sublabel: `${averageRating} Rating`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      onClick: handleReviewsClick,
    },
    {
      id: 'projects',
      label: 'Our Work',
      sublabel: 'Case Studies',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      onClick: handleProjectsClick,
    },
  ]

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 safe-bottom sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className="relative flex flex-col items-end"
      >
        {/* Speed dial expanded options */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Backdrop - subtle blur only */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 -z-10"
                onClick={() => setIsExpanded(false)}
              />

              {/* Dial items - stack above FAB */}
              <div className="absolute bottom-full right-0 mb-3 flex flex-col items-end gap-3">
                {dialItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                      delay: (dialItems.length - 1 - index) * 0.05,
                    }}
                    onClick={item.onClick}
                    className="group flex items-center gap-3"
                  >
                    {/* Label - glass morphism pill */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (dialItems.length - 1 - index) * 0.05 + 0.1 }}
                      className="whitespace-nowrap rounded-xl border border-white/[0.08] bg-black/80 px-3 py-2 backdrop-blur-2xl transition-all duration-300 group-hover:border-accent/30 group-hover:bg-black/90 sm:px-4 sm:py-2.5"
                    >
                      <p className="text-xs font-medium text-white sm:text-sm">{item.label}</p>
                      <p className="text-[10px] text-white/50 sm:text-xs">{item.sublabel}</p>
                    </motion.div>

                    {/* Icon button - matching theme glass morphism */}
                    <motion.div
                      className="touch-target flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-gradient-to-br from-accent/15 to-accent/5 text-accent backdrop-blur-2xl transition-all duration-300 group-hover:border-accent/40 group-hover:from-accent/25 group-hover:to-accent/10 group-hover:text-white sm:h-12 sm:w-12"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="relative">{item.icon}</span>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB button - matching BackToTop style */}
        <motion.button
          onClick={handleMainClick}
          onMouseDown={handleLongPressStart}
          onMouseUp={handleLongPressEnd}
          onMouseLeave={handleLongPressEnd}
          onTouchStart={handleLongPressStart}
          onTouchEnd={handleLongPressEnd}
          className="group relative touch-target flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-2xl transition-all duration-500 hover:border-accent/40 hover:from-accent/20 hover:to-accent/10"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Open showcase menu"
          aria-expanded={isExpanded}
        >
          {/* Animated pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/30"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* Glowing background on hover */}
          <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Icon with rotation */}
          <motion.svg
            className="relative h-5 w-5 text-accent transition-colors duration-500 group-hover:text-white sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </motion.svg>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.button>
      </motion.div>
    </div>
  )
}
