'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Reset all animations by forcing a brief reload of the page state
    // This triggers animation components to re-initialize
    setTimeout(() => {
      // Force all sections with whileInView animations to reset
      window.dispatchEvent(new Event('reset-animations'))
    }, 100)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-accent bg-accent text-black shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
        >
          <svg
            className="icon-sm"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
