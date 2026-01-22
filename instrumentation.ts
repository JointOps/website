export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config')
  }

  if (process.env.NEXT_RUNTIME === 'browser') {
    await import('./instrumentation-client')
  }
}

export const onRequestError = async (
  err: Error,
  request: {
    path: string
    method: string
    headers: { [key: string]: string }
  }
) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('❌ Request error:', {
      path: request.path,
      method: request.method,
      error: err.message,
    })
  }

  // In production, Sentry will automatically capture this
}
