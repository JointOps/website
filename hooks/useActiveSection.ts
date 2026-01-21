'use client'

import { useCallback, useEffect, useState } from 'react'

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

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return activeSection
}
