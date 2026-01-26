'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

interface MarketingIconProps {
  className?: string
}

export const MarketingIcon = memo(({ className = '' }: MarketingIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Growth chart bars */}
      <motion.rect
        x="50"
        y="120"
        width="20"
        height="40"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.5, delay: 0 }}
      />
      <motion.rect
        x="80"
        y="100"
        width="20"
        height="60"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.rect
        x="110"
        y="70"
        width="20"
        height="90"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.rect
        x="140"
        y="45"
        width="20"
        height="115"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        style={{ transformOrigin: 'bottom' }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      {/* Upward arrow */}
      <motion.path
        d="M 55 55 L 150 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.path
        d="M 135 45 L 150 55 L 135 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
    </svg>
  )
})
MarketingIcon.displayName = 'MarketingIcon'
