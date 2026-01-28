'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { throttle } from '@/lib/utils'
import type { ScrollDirection } from '@/types'

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setScrollDirection('down')
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up')
    }

    lastScrollY.current = currentScrollY
  }, [])

  // Throttle scroll handler to 60fps max
  const throttledHandleScroll = useMemo(
    () => throttle(handleScroll, 16),
    [handleScroll]
  )

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [throttledHandleScroll])

  return scrollDirection
}
