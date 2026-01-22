import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Set sample rate to 100% in development, 10% in production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Set sampling rate for profiling
  profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Environment
  environment: process.env.NODE_ENV,

  // Ignore expected errors
  ignoreErrors: [
    'ECONNREFUSED',
    'ETIMEDOUT',
    'ENOTFOUND',
    'NetworkError',
  ],

  beforeSend(event, hint) {
    // Don't send validation errors to Sentry (handled in app)
    if (event.exception) {
      const error = hint.originalException

      if (error && typeof error === 'object' && 'name' in error) {
        if (error.name === 'ZodError') {
          return null
        }
      }
    }

    return event
  },
})
