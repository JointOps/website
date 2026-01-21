/**
 * Responsive Utilities for Vyndra
 * Helper functions and constants for responsive design implementation
 */

/**
 * Breakpoint values (in pixels)
 * These match Tailwind's default + custom breakpoints
 */
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Check if device is touch-enabled
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Get current viewport width
 */
export const getViewportWidth = (): number => {
  if (typeof window === 'undefined') return 0
  return window.innerWidth
}

/**
 * Check if current viewport matches breakpoint
 */
export const isBreakpoint = (breakpoint: keyof typeof BREAKPOINTS): boolean => {
  const width = getViewportWidth()
  return width >= BREAKPOINTS[breakpoint]
}

/**
 * Get current breakpoint name
 */
export const getCurrentBreakpoint = (): keyof typeof BREAKPOINTS => {
  const width = getViewportWidth()

  if (width >= BREAKPOINTS['3xl']) return '3xl'
  if (width >= BREAKPOINTS['2xl']) return '2xl'
  if (width >= BREAKPOINTS.xl) return 'xl'
  if (width >= BREAKPOINTS.lg) return 'lg'
  if (width >= BREAKPOINTS.md) return 'md'
  if (width >= BREAKPOINTS.sm) return 'sm'
  if (width >= BREAKPOINTS.xs) return 'xs'

  return 'xs' // Default to smallest
}

/**
 * Responsive class name builder
 * Builds responsive class strings based on breakpoint
 */
export const responsiveClass = (
  base: string,
  responsive: Partial<Record<keyof typeof BREAKPOINTS, string>>
): string => {
  const classes = [base]

  Object.entries(responsive).forEach(([breakpoint, className]) => {
    if (className) {
      classes.push(`${breakpoint}:${className}`)
    }
  })

  return classes.join(' ')
}

/**
 * Animation variants for mobile vs desktop
 * Returns simpler animations for mobile devices
 */
export const getAnimationVariants = <T>(fullVariants: T, simpleVariants: T): T => {
  if (prefersReducedMotion()) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1 } } as T
  }

  const width = getViewportWidth()
  const isMobile = width < BREAKPOINTS.md

  return isMobile ? simpleVariants : fullVariants
}

/**
 * Viewport configuration for Framer Motion
 * Adjusts thresholds based on screen size
 */
export const getViewportConfig = () => {
  const width = getViewportWidth()
  const isMobile = width < BREAKPOINTS.md

  return {
    once: true,
    amount: isMobile ? 0.2 : 0.3,
    margin: isMobile ? '-50px' : '-100px',
  }
}
