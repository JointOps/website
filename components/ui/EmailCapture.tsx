'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface EmailCaptureProps {
  placeholder?: string
  buttonText?: string
  onSubmit?: (email: string) => Promise<void>
  className?: string
}

export const EmailCapture = ({
  placeholder = 'Enter your email',
  buttonText = 'Get Updates',
  onSubmit,
  className = '',
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        // Send to subscribe API
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })

        if (!response.ok) {
          throw new Error('Failed to subscribe')
        }
      }

      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex flex-col gap-3 sm:flex-row">
          {/* Email Input */}
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={isLoading || status === 'success'}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 backdrop-blur-xl transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />

            {/* Status indicator */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || status === 'success'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : status === 'success' ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribed!
              </span>
            ) : (
              buttonText
            )}
          </motion.button>
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-xs text-green-400"
          >
            Thanks! We&apos;ll keep you updated on our latest projects.
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-xs text-red-400"
          >
            Please enter a valid email address.
          </motion.p>
        )}
      </form>

      {/* Privacy note */}
      <p className="mt-3 text-center text-xs text-muted/60">
        Join 151+ clients. No spam, unsubscribe anytime.
      </p>
    </motion.div>
  )
}
