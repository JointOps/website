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

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 0.0,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.browserTracingIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: 'dark',
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],

  // Ignore expected errors
  ignoreErrors: [
    // Browser extensions
    'top.GLOBALS',
    // Random plugins/extensions
    'originalCreateNotification',
    'canvas.contentDocument',
    'MyApp_RemoveAllHighlights',
    // Network errors
    'NetworkError',
    'Network request failed',
    // ResizeObserver - not an actual error
    'ResizeObserver loop',
  ],

  beforeSend(event, hint) {
    // Filter out non-error events
    if (event.exception) {
      const error = hint.originalException

      // Don't send network errors
      if (error && typeof error === 'object' && 'message' in error) {
        const message = String(error.message)
        if (message.includes('fetch') || message.includes('network')) {
          return null
        }
      }
    }

    return event
  },
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
