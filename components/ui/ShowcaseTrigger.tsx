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
    // Use requestAnimationFrame to ensure menu closes first
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Dispatch reset event after scroll starts
      setTimeout(() => {
        window.dispatchEvent(new Event('reset-animations'))
      }, 500)
    })
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
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-amber-500 to-orange-500',
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
      color: 'from-violet-500 to-purple-500',
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
              {/* Backdrop blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsExpanded(false)}
              />

              {/* Speed dial menu - Material Design vertical stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-full right-0 mb-4 flex flex-col-reverse items-end gap-3"
              >
                {dialItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.3, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.3, y: 20 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 22,
                      delay: index * 0.05,
                    }}
                    onClick={item.onClick}
                    className="group flex items-center gap-3"
                  >
                    {/* Label to the left of icon - styled like main FAB tooltip */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="whitespace-nowrap rounded-xl bg-black/90 px-3 py-2 text-xs shadow-lg backdrop-blur-xl"
                    >
                      <span className="font-medium text-white">{item.label}</span>
                      {item.sublabel && <span className="ml-1 text-white/70">{item.sublabel}</span>}
                    </motion.div>

                    {/* Icon button */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Outer glow */}
                      <motion.div
                        className={`absolute -inset-1.5 rounded-full bg-gradient-to-r ${item.color} opacity-40 blur-md`}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.2,
                        }}
                      />

                      {/* Main button body - 40px mobile, 48px desktop (Material mini FAB) */}
                      <div
                        className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br sm:h-12 sm:w-12 ${item.color} shadow-lg`}
                        style={{
                          boxShadow:
                            item.id === 'top'
                              ? '0 4px 16px rgba(59, 130, 246, 0.4)'
                              : item.id === 'reviews'
                                ? '0 4px 16px rgba(245, 158, 11, 0.4)'
                                : '0 4px 16px rgba(139, 92, 246, 0.4)',
                        }}
                      >
                        {/* Inner shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />

                        {/* Icon */}
                        <span className="relative z-10 text-white">{item.icon}</span>
                      </div>
                    </motion.div>
                  </motion.button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main FAB - Stunning floating orb design */}
        <motion.button
          onClick={handleMainClick}
          onMouseDown={handleLongPressStart}
          onMouseUp={handleLongPressEnd}
          onMouseLeave={handleLongPressEnd}
          onTouchStart={handleLongPressStart}
          onTouchEnd={handleLongPressEnd}
          className="group relative touch-target"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          aria-label="Open showcase menu"
          aria-expanded={isExpanded}
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent via-violet-500 to-accent opacity-30 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Pulsing attention ring */}
          <motion.div
            className="absolute -inset-1 rounded-full border-2 border-accent/50"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* Main button body - 56px mobile, 64px desktop */}
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent via-violet-500 to-accent shadow-2xl shadow-accent/40 sm:h-16 sm:w-16">
            {/* Inner shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />

            {/* Rotating gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Icon - Diamond/Sparkle shape */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative z-10"
            >
              {isExpanded ? (
                <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </motion.div>

            {/* Hover ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{ scale: [0.8, 1.2], opacity: [0.3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </div>

          {/* Floating particles around button */}
          <motion.div
            className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="absolute -left-1 top-1/2 h-1.5 w-1.5 rounded-full bg-violet-400"
            animate={{
              x: [0, -6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-1 right-1/3 h-1.5 w-1.5 rounded-full bg-purple-400"
            animate={{
              y: [0, 6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.button>

        {/* Tooltip hint on first appearance */}
        <AnimatePresence>
          {isVisible && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1, duration: 0.3 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-black/90 px-3 py-2 text-xs text-white/70 backdrop-blur-xl"
            >
              <span className="font-medium text-white">Explore</span>
              <span className="ml-1">our work</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
