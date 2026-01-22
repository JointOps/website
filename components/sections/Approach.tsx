'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { memo, useRef, useState } from 'react'

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
  // Spread activations evenly across scroll range with proper timing
  // Each step gets an equal portion of the scroll range
  const stepDuration = 1 / total // 0.2 for 5 steps
  const activationStart = index * stepDuration
  const activationEnd = (index + 1) * stepDuration
  const connectionPoint = activationEnd

  // Pre-create all transforms at the component level
  const isPassed = useTransform(scrollProgress, (v) => v >= connectionPoint)

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
    ['#A78BFA', '#6366F1']
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
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border-2"
        style={{
          borderColor: iconBorderColor,
          backgroundColor: iconBgColor,
          boxShadow: iconBoxShadow,
        }}
      >
        <motion.div
          style={{
            color: iconColor,
          }}
        >
          <Icon />
        </motion.div>
      </motion.div>

      {/* Connecting Line (not shown for last step) */}
      {index < total - 1 && (
        <div className="absolute top-8 hidden h-0.5 lg:block" style={{ left: '50%', width: 'calc(100% + 1.5rem)' }}>
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
        className="mt-8 flex w-full flex-col rounded-xl border p-6"
        style={{
          borderColor: cardBorderColor,
          backgroundColor: cardBgColor,
          boxShadow: cardBoxShadow,
          minHeight: '180px',
        }}
      >
        {/* Step Number Badge */}
        <motion.div
          className="mb-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
          style={{
            backgroundColor: badgeBgColor,
            color: badgeColor,
          }}
        >
          {index + 1}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mb-2 font-display text-xl font-bold lg:text-2xl"
          style={{
            color: titleColor,
            wordBreak: 'keep-all',
            hyphens: 'none',
            overflow: 'hidden',
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

TimelineStep.displayName = 'TimelineStep'

const MemoizedTimelineStep = memo(TimelineStep)

// Mobile Carousel Component
const MobileApproachCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (info.offset.x < -threshold && currentIndex < APPROACH_STEPS.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="relative px-4 py-12 lg:hidden">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {APPROACH_STEPS.map((step, index) => {
            const Icon = StepIcons[step.title as keyof typeof StepIcons]
            return (
              <motion.div
                key={step.title}
                className="w-full flex-shrink-0 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-xl">
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan-500/5 opacity-50" />

                  {/* Content */}
                  <div className="relative">
                    {/* Step Number Badge */}
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-sm font-bold text-accent">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
                        <div className="relative flex icon-xl items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10 p-4 text-accent">
                          <Icon />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-center text-sm leading-relaxed text-muted/90 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Dot Navigation */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {APPROACH_STEPS.map((step, index) => (
          <button
            key={step.title}
            onClick={() => setCurrentIndex(index)}
            className="touch-target group relative p-2"
            aria-label={`Go to ${step.title}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20'
              }`}
              animate={{
                scale: index === currentIndex ? 1 : 0.8,
              }}
              whileHover={{ scale: 1 }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20 blur-md"
                layoutId="activeStep"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Swipe Hint (only on first load) */}
      {currentIndex === 0 && (
        <motion.div
          className="mt-4 text-center text-xs text-muted/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Swipe to explore more →
        </motion.div>
      )}
    </div>
  )
}

export const Approach = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Convert scroll progress to 0-1 range for our timeline
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const percentageOpacity = useTransform(timelineProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const percentageValue = useTransform(timelineProgress, (v) => `${Math.round(v * 100)}% `)
  const percentageVisible = useTransform(timelineProgress, (v) => (v > 0.05 ? 1 : 0))

  return (
    <section className="relative bg-black">
      {/* Header - visible on mobile only */}
      <div className="relative section-padding-sm px-6 text-center lg:hidden lg:px-8">
        <motion.div
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
      </div>

      {/* Mobile Carousel */}
      <MobileApproachCarousel />

      {/* Desktop Sticky Scroll Experience */}
      <div ref={containerRef} className="hidden lg:block" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-16 lg:px-8">
            {/* Header - sticky inside viewport */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="mb-4 font-display text-display-large font-bold text-foreground">
                Our Approach
              </h2>
              <p className="mx-auto max-w-2xl text-body-large text-muted">
                A proven methodology for building what others can&apos;t.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {APPROACH_STEPS.map((step, index) => (
                <MemoizedTimelineStep
                  key={step.title}
                  step={step}
                  index={index}
                  total={APPROACH_STEPS.length}
                  scrollProgress={timelineProgress}
                />
              ))}
            </div>

            {/* Progress Section */}
            <div className="space-y-4">
              {/* Overall Progress Bar (Desktop) */}
              <motion.div
                className="relative mx-auto h-1 w-full max-w-5xl overflow-hidden rounded-full bg-white/10"
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
                className="text-center font-display text-sm text-muted"
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
          </div>
        </div>
      </div>
    </section>
  )
}
