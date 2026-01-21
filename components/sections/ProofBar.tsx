'use client'

import { motion } from 'framer-motion'

import { PROOF_METRICS } from '@/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { usePrefersReducedMotion } from '@/hooks'

import { RocketIcon, ShieldIcon, TrophyIcon, ZapIcon } from '../icons/stat-icons'

const iconMap = {
  'Mainnet Deployments': RocketIcon,
  'Security Incidents': ShieldIcon,
  'Hackathon Wins': TrophyIcon,
  'Requests/Second': ZapIcon,
}

export const ProofBar = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-black section-padding-sm">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent blur-3xl"
              animate={{
                x: [-100, 100, -100],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-cyan-500/20 via-cyan-500/10 to-transparent blur-3xl"
              animate={{
                x: [100, -100, 100],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      </div>

      {/* Subtle border lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 sm:gap-6 md:grid-cols-4 md:gap-8 lg:px-8"
      >
        {PROOF_METRICS.map((metric, index) => {
          const Icon = iconMap[metric.label as keyof typeof iconMap]

          return (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glass card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-accent/30 group-hover:bg-white/[0.08] sm:p-8">
                {/* Animated glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
                  }}
                />

                {/* Shimmer effect */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      translateX: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: 'linear',
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative text-center">
                  {/* Icon with glow */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: 'spring',
                      bounce: 0.4,
                    }}
                    className="relative mx-auto mb-4 flex icon-xl items-center justify-center sm:mb-6"
                  >
                    {/* Pulsing glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/30 blur-xl"
                      animate={
                        !prefersReducedMotion
                          ? {
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Icon container */}
                    <div className="relative flex items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10 p-3 text-accent transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] sm:p-4">
                      <Icon className="icon-md" />
                    </div>
                  </motion.div>

                  {/* Value with gradient text */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="mb-2 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text font-display text-3xl font-bold text-transparent transition-all duration-300 group-hover:from-accent group-hover:via-cyan-400 group-hover:to-accent sm:text-4xl md:text-5xl"
                  >
                    {metric.value}
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-foreground sm:text-sm"
                  >
                    {metric.label}
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-px w-8 bg-gradient-to-l from-accent to-transparent" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-gradient-to-b from-accent to-transparent" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
