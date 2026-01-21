'use client'

import { motion } from 'framer-motion'

interface GamingIconProps {
  className?: string
}

export const GamingIcon = ({ className = '' }: GamingIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.rect
        x="50"
        y="70"
        width="100"
        height="60"
        rx="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.circle
        cx="75"
        cy="95"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.circle
        cx="95"
        cy="95"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.rect
        x="115"
        y="87"
        width="15"
        height="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.rect
        x="121"
        y="81"
        width="4"
        height="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
      <motion.path
        d="M 80 50 L 100 30 L 120 50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      />
      <motion.circle
        cx="100"
        cy="35"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    </svg>
  )
}
