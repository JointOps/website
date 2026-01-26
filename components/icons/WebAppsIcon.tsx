'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

interface WebAppsIconProps {
  className?: string
}

export const WebAppsIcon = memo(({ className = '' }: WebAppsIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.rect
        x="40"
        y="50"
        width="120"
        height="100"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.line
        x1="40"
        y1="75"
        x2="160"
        y2="75"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.rect
        x="55"
        y="90"
        width="55"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.rect
        x="55"
        y="105"
        width="90"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.rect
        x="55"
        y="120"
        width="70"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.circle
        cx="50"
        cy="62"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <motion.circle
        cx="62"
        cy="62"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      <motion.circle
        cx="74"
        cy="62"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      />
    </svg>
  )
})
WebAppsIcon.displayName = 'WebAppsIcon'
