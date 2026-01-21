import { motion } from 'framer-motion'

import { usePrefersReducedMotion } from '@/hooks'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}
