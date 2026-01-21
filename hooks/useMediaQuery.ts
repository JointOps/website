'use client'

import { useEffect, useState } from 'react'

/**
 * Custom hook for media queries
 * Usage: const isMobile = useMediaQuery('(max-width: 768px)')
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [query])

  // Return false during SSR to avoid hydration mismatch
  if (!mounted) return false

  return matches
}
