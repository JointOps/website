'use client'

import { motion } from 'framer-motion'

interface AnimatedMenuIconProps {
  isOpen: boolean
  className?: string
}

export const AnimatedMenuIcon = ({ isOpen, className = '' }: AnimatedMenuIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top line */}
      <motion.path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          d: isOpen ? 'M6 6L18 18' : 'M3 6H21',
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      />

      {/* Middle line */}
      <motion.path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom line */}
      <motion.path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          d: isOpen ? 'M6 18L18 6' : 'M3 18H21',
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      />
    </svg>
  )
}
