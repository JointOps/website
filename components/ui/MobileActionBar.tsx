'use client'

import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const MobileActionBar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // Show after scrolling past hero (800px)
      setIsVisible(latest > 800)
    })

    return () => unsubscribe()
  }, [scrollY])

  // Only show on mobile/tablet (hide on desktop)
  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
    return null
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {/* Glass morphism container */}
      <div className="relative border-t border-white/10 bg-black/80 backdrop-blur-xl">
        {/* Top glow line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3 p-4 safe-area-bottom">
          {/* Call Button */}
          <a
            href="tel:+1234567890"
            className="group relative flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-white/10 active:scale-95"
          >
            {/* Icon */}
            <svg
              className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Us</span>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-lg bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
          </a>

          {/* Contact/Email Button */}
          <Link
            href="#contact"
            className="group relative flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/30 active:scale-95"
          >
            {/* Icon */}
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Get in Touch</span>

            {/* Subtle pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-white/10"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </Link>
        </div>

        {/* Safe area padding for iPhone bottom bar */}
        <div className="h-safe-area-inset-bottom" />
      </div>
    </motion.div>
  )
}
