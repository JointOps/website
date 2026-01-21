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
      <section id="contact" className="relative overflow-hidden bg-black section-padding px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-black to-cyan-500/5 p-12 text-center backdrop-blur-sm lg:p-16"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {/* Success checkmark */}
            <motion.div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.5 }}
            >
              <svg className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <motion.h2
              className="mb-4 font-display text-display-medium font-bold text-foreground"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Message Received
            </motion.h2>

            <motion.p
              className="mb-8 text-body-large text-muted"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We&apos;ll get back to you within 24 hours. Usually much sooner.
            </motion.p>

            <motion.button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/20 bg-accent/10 px-6 py-3 font-semibold text-accent transition-all hover:border-accent hover:bg-accent hover:text-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Another Message
            </motion.button>
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

              {/* Error Message */}
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
