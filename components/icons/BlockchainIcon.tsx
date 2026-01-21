'use client'

import { motion } from 'framer-motion'

interface BlockchainIconProps {
  className?: string
}

export const BlockchainIcon = ({ className = '' }: BlockchainIconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.circle
        cx="150"
        cy="50"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.circle
        cx="50"
        cy="150"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      />
      <motion.circle
        cx="150"
        cy="150"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      />
      <motion.line
        x1="100"
        y1="60"
        x2="59"
        y2="57"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      />
      <motion.line
        x1="100"
        y1="60"
        x2="141"
        y2="57"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.line
        x1="100"
        y1="140"
        x2="59"
        y2="143"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      />
      <motion.line
        x1="100"
        y1="140"
        x2="141"
        y2="143"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />
    </svg>
  )
}
