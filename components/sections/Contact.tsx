'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CONTACT_EMAIL } from '@/constants'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import type { FormStatus } from '@/types'

export const Contact = () => {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
      console.error('Contact form error:', error)
    }
  }

  // Success State
  if (status === 'success') {
    return (
      <section id="contact" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-6 py-24 lg:px-8">
        {/* Ultra dark background with subtle grid */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Subtle dark gradient orbs */}
          <motion.div
            className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/[0.03] bg-gradient-to-b from-white/[0.01] to-black/50 p-16 text-center backdrop-blur-3xl lg:p-20"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Subtle top border glow */}
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            {/* Minimalist floating particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-[2px] rounded-full bg-accent/40"
                  style={{
                    left: '50%',
                    top: '35%',
                  }}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: Math.cos((i / 8) * Math.PI * 2) * 120,
                    y: Math.sin((i / 8) * Math.PI * 2) * 120,
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 0.6 + i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>

            {/* Elegant checkmark */}
            <motion.div
              className="relative mx-auto mb-12 flex h-28 w-28 items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Single subtle pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Dark circle with subtle gradient */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-black/80 shadow-2xl shadow-black/50">
                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-accent/5 blur-xl" />

                <motion.svg
                  className="relative h-14 w-14 text-white/90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Minimalist typography */}
            <motion.h2
              className="mb-3 font-display text-5xl font-bold tracking-tight text-white/95 lg:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Message Received
            </motion.h2>

            <motion.div
              className="mb-16 space-y-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg text-white/40 lg:text-xl">
                We&apos;ll get back to you within 24 hours.
              </p>
              <p className="text-base text-white/25">
                Usually much sooner.
              </p>
            </motion.div>

            {/* Sophisticated minimal button */}
            <motion.button
              onClick={() => setStatus('idle')}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-4 font-medium text-white/80 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-4 w-4 text-white/60 transition-colors group-hover:text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm tracking-wide">Send Another Message</span>
            </motion.button>

            {/* Subtle corner accent */}
            <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-tl from-accent/[0.02] to-transparent" />
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-black via-[#0A0A0F] to-black section-padding px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 bg-blob-lg rounded-full bg-accent/5 opacity-30 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 bg-blob-md rounded-full bg-cyan-500/5 opacity-20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Split Layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Context */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Get in Touch
            </motion.div>

            <h2 className="mb-6 font-display text-display-large font-bold text-foreground">
              Let&apos;s Start
              <br />
              <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
                Building Together
              </span>
            </h2>

            <p className="mb-8 text-body-large leading-relaxed text-muted">
              No sales pitch. No pressure. Just an honest conversation about your project and whether we&apos;re the
              right fit to help bring it to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted">
                <div className="flex icon-lg items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted/60">Email us directly</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted">
                <div className="flex icon-lg items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="icon-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted/60">Response time</p>
                  <p className="font-semibold text-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  Your Name
                </label>
                <input
                  {...register('name')}
                  id="name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-foreground placeholder-muted/50 backdrop-blur-sm transition-all duration-300 focus:border-accent focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="John Doe"
                />
                <AnimatePresence mode="wait">
                  {errors.name && (
                    <motion.p
                      className="mt-2 text-sm text-red-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-foreground placeholder-muted/50 backdrop-blur-sm transition-all duration-300 focus:border-accent focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="you@company.com"
                />
                <AnimatePresence mode="wait">
                  {errors.email && (
                    <motion.p
                      className="mt-2 text-sm text-red-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                  Tell Us About Your Project
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-foreground placeholder-muted/50 backdrop-blur-sm transition-all duration-300 focus:border-accent focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="I'm building a DeFi protocol that needs..."
                />
                <AnimatePresence mode="wait">
                  {errors.message && (
                    <motion.p
                      className="mt-2 text-sm text-red-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Status Messages with ARIA live region */}
              <div role="status" aria-live="polite" aria-atomic="true">
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div
                      className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Something went wrong. Try again or email us directly at {CONTACT_EMAIL}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full overflow-hidden rounded-xl border-2 border-accent bg-accent px-8 py-5 font-display text-lg font-semibold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              >
                {/* Shimmer effect */}
                {status !== 'loading' && (
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      translateX: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: 'linear',
                    }}
                  />
                )}

                <span className="relative flex items-center justify-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <motion.svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </motion.svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </>
                  )}
                </span>
              </motion.button>

              <p className="text-center text-sm text-muted/60">
                By submitting this form, you agree to our privacy policy
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
