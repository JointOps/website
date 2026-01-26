'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

interface BackendIconProps {
  className?: string
}

export const BackendIcon = memo(({ className = '' }: BackendIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.rect
        x="60"
        y="50"
        width="80"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.rect
        x="60"
        y="90"
        width="80"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.rect
        x="60"
        y="130"
        width="80"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.line
        x1="100"
        y1="70"
        x2="100"
        y2="90"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.line
        x1="100"
        y1="110"
        x2="100"
        y2="130"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={75 + i * 10}
          cy="60"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={75 + i * 10}
          cy="100"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={75 + i * 10}
          cy="140"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
        />
      ))}
    </svg>
  )
})
BackendIcon.displayName = 'BackendIcon'
