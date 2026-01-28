'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { throttle } from '@/lib/utils'

export const useActiveSection = (sectionIds: readonly string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('')

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
  }, [sectionIds])

  // Throttle scroll handler to 60fps max
  const throttledHandleScroll = useMemo(
    () => throttle(handleScroll, 16),
    [handleScroll]
  )

  useEffect(() => {
    handleScroll() // Initial check
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll, throttledHandleScroll])

  return activeSection
}
