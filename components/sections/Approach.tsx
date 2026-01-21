'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

import { APPROACH_STEPS } from '@/constants'

// Icons for each approach step
const StepIcons = {
  Understand: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  Architect: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  Build: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Ship: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Evolve: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
}

const TimelineStep = ({
  step,
  index,
  total,
  scrollProgress,
}: {
  step: (typeof APPROACH_STEPS)[0]
  index: number
  total: number
  scrollProgress: MotionValue<number>
}) => {
  const Icon = StepIcons[step.title as keyof typeof StepIcons]

  // Calculate activation threshold for this step
  // Spread activations across entire scroll range (100%)
  const activationPoint = (index / (total - 1)) * 1.0
  const connectionPoint = activationPoint + 0.1

  // Pre-create all transforms at the component level
  const isPassed = useTransform(scrollProgress, (v) => v >= connectionPoint)

  // Smooth gradual activation with fade range
  const activationStart = activationPoint - 0.05
  const activationEnd = activationPoint + 0.15

  const activationProgress = useTransform(
    scrollProgress,
    [activationStart, activationEnd],
    [0, 1]
  )

  const iconBorderColor = useTransform(
    activationProgress,
    [0, 1],
    ['rgba(255,255,255,0.2)', '#6366F1']
  )
  const iconBgColor = useTransform(
    activationProgress,
    [0, 1],
    ['#000000', '#6366F1']
  )
  const iconBoxShadow = useTransform(
    activationProgress,
    [0, 1],
    ['0 0 0 rgba(0,0,0,0)', '0 0 24px rgba(99,102,241,0.4)']
  )
  const iconColor = useTransform(
    activationProgress,
    [0, 1],
    ['#A1A1AA', '#000000']
  )
  const lineScaleX = useTransform(isPassed, (passed) => (passed ? 1 : 0))
  const cardBorderColor = useTransform(
    activationProgress,
    [0, 1],
    ['rgba(255,255,255,0.1)', 'rgba(99,102,241,0.3)']
  )
  const cardBgColor = useTransform(
    activationProgress,
    [0, 1],
    ['rgba(0,0,0,0.5)', 'rgba(99,102,241,0.05)']
  )
  const cardBoxShadow = useTransform(
    activationProgress,
    [0, 1],
    ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(99,102,241,0.2)']
  )
  const badgeBgColor = useTransform(
    activationProgress,
    [0, 1],
    ['rgba(255,255,255,0.1)', '#6366F1']
  )
  const badgeColor = useTransform(
    activationProgress,
    [0, 1],
    ['#A1A1AA', '#000000']
  )
  const titleColor = useTransform(
    activationProgress,
    [0, 1],
    ['#FAFAFA', '#6366F1']
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      {/* Step Number & Icon */}
      <motion.div
        className="relative z-10 flex icon-xl items-center justify-center rounded-2xl border-2"
        style={{
          borderColor: iconBorderColor,
          backgroundColor: iconBgColor,
          boxShadow: iconBoxShadow,
        }}
      >
        <motion.div
          className="icon-md"
          style={{
            color: iconColor,
          }}
        >
          <Icon />
        </motion.div>
      </motion.div>

      {/* Connecting Line (not shown for last step) */}
      {index < total - 1 && (
        <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 lg:block">
          {/* Background line */}
          <div className="absolute inset-0 bg-white/10" />
          {/* Progress line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent to-cyan-500"
            style={{
              scaleX: lineScaleX,
              transformOrigin: 'left',
            }}
          />
        </div>
      )}

      {/* Step Details Card */}
      <motion.div
        className="mt-8 w-full rounded-xl border p-6"
        style={{
          borderColor: cardBorderColor,
          backgroundColor: cardBgColor,
          boxShadow: cardBoxShadow,
        }}
      >
        {/* Step Number Badge */}
        <motion.div
          className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold"
          style={{
            backgroundColor: badgeBgColor,
            color: badgeColor,
          }}
        >
          {index + 1}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mb-2 font-display text-display-small font-bold"
          style={{
            color: titleColor,
          }}
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <p className="text-body leading-relaxed text-muted">{step.description}</p>
      </motion.div>
    </motion.div>
  )
}

export const Approach = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 10%'],
  })

  // Convert scroll progress to 0-1 range for our timeline
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const percentageOpacity = useTransform(timelineProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const percentageValue = useTransform(timelineProgress, (v) => `${Math.round(v * 100)}% `)
  const percentageVisible = useTransform(timelineProgress, (v) => (v > 0.05 ? 1 : 0))

  return (
    <section ref={containerRef} className="relative bg-black section-padding px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 font-display text-display-large font-bold text-foreground">
            Our Approach
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-large text-muted">
            A proven methodology for building what others can&apos;t.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {APPROACH_STEPS.map((step, index) => (
            <TimelineStep
              key={step.title}
              step={step}
              index={index}
              total={APPROACH_STEPS.length}
              scrollProgress={timelineProgress}
            />
          ))}
        </div>

        {/* Overall Progress Bar (Desktop) */}
        <motion.div
          className="relative mx-auto mt-20 hidden h-1 max-w-5xl overflow-hidden rounded-full bg-white/10 lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-500 to-accent"
            style={{
              scaleX: timelineProgress,
              transformOrigin: 'left',
            }}
          />
        </motion.div>

        {/* Progress Percentage (Desktop) */}
        <motion.div
          className="mt-6 hidden text-center font-display text-sm text-muted lg:block"
          style={{
            opacity: percentageOpacity,
          }}
        >
          <motion.span
            className="text-accent"
            style={{
              opacity: percentageVisible,
            }}
          >
            {percentageValue}
          </motion.span>
          <span>Complete</span>
        </motion.div>
      </div>
    </section>
  )
}
