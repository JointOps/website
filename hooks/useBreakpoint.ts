'use client'

import { useMediaQuery } from './useMediaQuery'

/**
 * Hook for checking current breakpoint
 * Returns boolean flags for each breakpoint
 */
export const useBreakpoint = () => {
  const isXs = useMediaQuery('(min-width: 375px)')
  const isSm = useMediaQuery('(min-width: 640px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const is2Xl = useMediaQuery('(min-width: 1536px)')
  const is3Xl = useMediaQuery('(min-width: 1920px)')

  // Helper booleans for common checks
  const isMobile = !isMd // Less than 768px
  const isTablet = isMd && !isLg // 768px - 1023px
  const isDesktop = isLg // 1024px and above
  const isLargeDesktop = isXl // 1280px and above
  const isUltraWide = is3Xl // 1920px and above

  return {
    // Individual breakpoints
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    is3Xl,

    // Semantic helpers
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isUltraWide,

    // Current breakpoint name
    current: is3Xl
      ? '3xl'
      : is2Xl
        ? '2xl'
        : isXl
          ? 'xl'
          : isLg
            ? 'lg'
            : isMd
              ? 'md'
              : isSm
                ? 'sm'
                : 'xs',
  }
}
