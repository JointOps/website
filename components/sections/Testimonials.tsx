'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import testimonialData from '@/data/testimonials.json'
import type { Testimonial } from '@/types/testimonials'
import { getCountryFlag, getCountryName } from '@/lib/countryFlags'

const testimonials = testimonialData as Testimonial[]

// Get top testimonials by priority
const topTestimonials = [...testimonials]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 24)

// Split into 3 rows for marquee
const row1 = topTestimonials.slice(0, 8)
const row2 = topTestimonials.slice(8, 16)
const row3 = topTestimonials.slice(16, 24)

// Marquee testimonial card
const MarqueeCard = ({
  testimonial,
  onClick,
}: {
  testimonial: Testimonial
  onClick: () => void
}) => {
  const flag = getCountryFlag(testimonial.country)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 w-[340px] overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 text-left backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="mb-4 flex gap-1">
          {[...Array(testimonial.ratings)].map((_, i) => (
            <motion.svg
              key={i}
              className="h-4 w-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>

        {/* Review text */}
        <p className="mb-5 text-sm leading-relaxed text-white/80 line-clamp-4">
          &ldquo;{testimonial.review}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 ring-2 ring-white/10">
            {testimonial.by_image ? (
              <Image
                src={testimonial.by_image}
                alt={testimonial.by}
                fill
                className="object-cover"
                sizes="40px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm font-bold text-accent">
                  {testimonial.by.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-white">{testimonial.by}</p>
            <p className="flex items-center gap-1.5 text-xs text-white/50">
              <span className="text-base">{flag}</span>
              <span className="truncate">{getCountryName(testimonial.country)}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
    </motion.button>
  )
}

// Infinite marquee row with CSS animation
const MarqueeRow = ({
  testimonials,
  direction = 'left',
  speed = 40,
  onCardClick,
}: {
  testimonials: Testimonial[]
  direction?: 'left' | 'right'
  speed?: number
  onCardClick: (index: number) => void
}) => {
  // Duplicate testimonials for seamless loop
  const duplicated = [...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden py-3">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <div
        className={`flex gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration: `${speed}s`,
          width: 'max-content',
        }}
      >
        {duplicated.map((testimonial, i) => (
          <MarqueeCard
            key={`${testimonial.id}-${i}`}
            testimonial={testimonial}
            onClick={() => onCardClick(testimonials.findIndex((t) => t.id === testimonial.id))}
          />
        ))}
      </div>
    </div>
  )
}

// Fullscreen testimonial drawer
const TestimonialDrawer = ({
  isOpen,
  onClose,
  testimonials,
  initialIndex,
}: {
  isOpen: boolean
  onClose: () => void
  testimonials: Testimonial[]
  initialIndex: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const testimonial = testimonials[currentIndex]

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex)
  }, [isOpen, initialIndex])

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  if (!testimonial) return null

  const flag = getCountryFlag(testimonial.country)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[200px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-black/50 px-6 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <button
                  onClick={goPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="text-sm text-white/40">
                  {currentIndex + 1} / {testimonials.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Stars */}
                  <div className="mb-6 flex gap-1.5">
                    {[...Array(testimonial.ratings)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-6 w-6 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 text-xl md:text-2xl leading-relaxed text-white/90">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>

                  {/* Highlights */}
                  {testimonial.highlights && testimonial.highlights.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                      {testimonial.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm font-medium text-accent"
                        >
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-accent/10">
                      {testimonial.by_image ? (
                        <Image
                          src={testimonial.by_image}
                          alt={testimonial.by}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-xl font-bold text-accent">
                            {testimonial.by.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-white">{testimonial.by}</p>
                      <p className="flex items-center gap-2 text-sm text-white/50">
                        <span className="text-lg">{flag}</span>
                        <span>{getCountryName(testimonial.country)}</span>
                        <span className="text-white/20">|</span>
                        <span>via {testimonial.medium.label}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const Testimonials = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const handleCardClick = (index: number) => {
    setSelectedIndex(index)
    setIsDrawerOpen(true)
  }

  return (
    <>
      <section
        ref={sectionRef}
        id="testimonials"
        className="relative overflow-hidden bg-black py-24 md:py-32"
      >
        {/* Animated background */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY }}>
          <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-[200px]" />
          <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
        </motion.div>

        {/* Header */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-5 py-2.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-accent">Wall of Love</span>
            </motion.div>

            <h2 className="text-display-large mb-6 font-display font-bold text-foreground max-w-4xl">
              What Our Clients{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Say About Us
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>

            <p className="text-lg text-white/50 max-w-2xl">
              Feedback from clients we&apos;ve worked with across 30+ countries.
            </p>
          </motion.div>
        </div>

        {/* Marquee wall */}
        <div className="relative mb-16 space-y-4">
          <MarqueeRow testimonials={row1} direction="left" speed={40} onCardClick={(i) => handleCardClick(i)} />
          <MarqueeRow testimonials={row2} direction="right" speed={35} onCardClick={(i) => handleCardClick(i + 8)} />
          <MarqueeRow testimonials={row3} direction="left" speed={45} onCardClick={(i) => handleCardClick(i + 16)} />
        </div>

        {/* Stunning CTA Button */}
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => {
              setSelectedIndex(0)
              setIsDrawerOpen(true)
            }}
            className="group relative inline-flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated gradient border - warm tones for testimonials */}
            <span className="absolute inset-0 rounded-2xl">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 via-rose-500 to-amber-400 bg-[length:200%_100%] animate-[gradient-x_3s_linear_infinite]" />
            </span>

            {/* Inner background */}
            <span className="absolute inset-[2px] rounded-[14px] bg-black" />

            {/* Glow effect */}
            <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-rose-500/20 blur-xl" />

            {/* Shimmer effect */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </span>

            {/* Content */}
            <span className="relative flex items-center gap-4 px-10 py-5 text-lg font-semibold text-white">
              {/* Star icon */}
              <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-amber-400/30 bg-amber-400/10 group-hover:bg-amber-400/20 group-hover:border-amber-400/50 transition-all duration-300">
                <svg
                  className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:rotate-[360deg]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>

              <span className="relative">
                Read All Reviews
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-rose-500 group-hover:w-full transition-all duration-300" />
              </span>

              {/* Animated arrow */}
              <svg
                className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Floating stars on hover */}
            <span className="absolute -top-1 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2">
              <svg className="h-4 w-4 text-amber-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="absolute -bottom-1 left-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:translate-y-2">
              <svg className="h-3 w-3 text-orange-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </section>

      <TestimonialDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        testimonials={testimonials}
        initialIndex={selectedIndex}
      />
    </>
  )
}
