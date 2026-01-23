'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import type { Testimonial } from '@/types/testimonials'
import { getCountryFlag, getCountryName } from '@/lib/countryFlags'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard = memo(function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const flag = getCountryFlag(testimonial.country)
  const countryName = getCountryName(testimonial.country)

  return (
    <motion.div
      className="relative flex h-full max-h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent p-8 backdrop-blur-xl md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      {/* Ambient gradient glow - static for performance */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl will-change-transform" />

      {/* Top section - Platform and rating */}
      <div className="relative mb-6 flex items-center justify-between">
        {/* Platform badge */}
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2 backdrop-blur-sm">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-accent/10">
            <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 12l-4.61 7.61-8.39-4.61v-5.81l8.39-4.61L23 12zm-8.39 7.61L2 15V9l4.61-2.61 7.39 4.61v8.61z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-white/80">{testimonial.medium.label}</span>
        </div>

        {/* Star rating */}
        <div className="flex gap-1">
          {[...Array(testimonial.ratings)].map((_, i) => (
            <svg
              key={i}
              className="h-6 w-6 text-accent drop-shadow-[0_0_4px_rgba(var(--accent-rgb),0.4)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Decorative quote mark */}
      <div className="absolute left-6 top-6 text-7xl font-serif leading-none text-accent/5 md:text-8xl">
        &ldquo;
      </div>

      {/* Review text - Main content - compact layout */}
      <div className="relative mb-8 flex-shrink-0">
        <div className="prose prose-invert max-w-none">
          <p className="relative text-lg leading-relaxed text-white/90 md:text-xl">
            {testimonial.review.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < testimonial.review.split('\n').length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Gradient fade at bottom of text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Highlights section */}
      {testimonial.highlights && testimonial.highlights.length > 0 && (
        <div className="relative mb-6 flex flex-wrap gap-2">
          {testimonial.highlights.slice(0, 3).map((highlight, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm font-medium text-accent/90 backdrop-blur-sm"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Author section */}
      <div className="relative mt-auto border-t border-white/[0.06] pt-6">
        <div className="flex items-center justify-between gap-4">
          {/* Avatar and info */}
          <div className="flex items-center gap-4">
            {/* Avatar with static glow effect */}
            <div className="relative">
              {/* Glow ring - static for performance */}
              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-40" />

              {/* Avatar container */}
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/10 md:h-20 md:w-20">
                {testimonial.by_image ? (
                  <Image
                    src={testimonial.by_image}
                    alt={testimonial.by}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-bold text-accent md:text-3xl">
                      {testimonial.by.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Verified badge on avatar */}
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-accent shadow-lg shadow-accent/30">
                <svg className="h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Name and location */}
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-white md:text-xl">{testimonial.by}</p>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="text-base">{flag}</span>
                <span className="font-medium">{countryName}</span>
                <span className="text-white/20">•</span>
                <time className="text-white/40">{testimonial.date}</time>
              </div>
            </div>
          </div>

          {/* Large verified badge */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg shadow-accent/10">
            <svg className="h-7 w-7 text-accent drop-shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-accent/5 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-accent/5 to-transparent" />
    </motion.div>
  )
})
