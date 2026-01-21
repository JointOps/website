'use client'

import { motion } from 'framer-motion'

interface DesignIconProps {
  className?: string
}

export const DesignIcon = ({ className = '' }: DesignIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M 70 130 L 100 50 L 130 130 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.line
        x1="82"
        y1="110"
        x2="118"
        y2="110"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.circle
        cx="60"
        cy="90"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.rect
        x="128"
        y="75"
        width="25"
        height="25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      />
      <motion.path
        d="M 50 150 Q 100 135 150 150"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </svg>
  )
}
