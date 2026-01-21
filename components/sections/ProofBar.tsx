'use client'

import { motion } from 'framer-motion'

import { PROOF_METRICS } from '@/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'

import { RocketIcon, ShieldIcon, TrophyIcon, ZapIcon } from '../icons/stat-icons'

const iconMap = {
  'Mainnet Deployments': RocketIcon,
  'Security Incidents': ShieldIcon,
  'Hackathon Wins': TrophyIcon,
  'Requests/Second': ZapIcon,
}

export const ProofBar = () => {
  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-foreground/5 section-padding-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 lg:px-8"
      >
        {PROOF_METRICS.map((metric, index) => {
          const Icon = iconMap[metric.label as keyof typeof iconMap]

          return (
            <motion.div
              key={metric.label}
              variants={fadeInUp}
              className="group text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mx-auto mb-4 flex icon-xl items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent/20"
              >
                <Icon className="icon-md" />
              </motion.div>

              <div className="font-display text-display-medium font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                {metric.value}
              </div>
              <div className="mt-2 text-body text-muted">{metric.label}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
