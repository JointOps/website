'use client'

import { motion } from 'framer-motion'

interface DeveloperToolsIconProps {
  className?: string
}

export const DeveloperToolsIcon = ({ className = '' }: DeveloperToolsIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.rect
        x="50"
        y="60"
        width="100"
        height="80"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.path
        d="M 75 90 L 85 100 L 75 110"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.path
        d="M 115 90 L 105 100 L 115 110"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.line
        x1="95"
        y1="88"
        x2="100"
        y2="112"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      <motion.rect
        x="65"
        y="120"
        width="70"
        height="3"
        rx="1.5"
        fill="currentColor"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      />
    </svg>
  )
}
