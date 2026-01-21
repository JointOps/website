import { motion } from 'framer-motion'

import { fadeInUp } from '@/lib/animations'
import { usePrefersReducedMotion } from '@/hooks'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
