'use client'

import { useEffect, useRef, useState } from 'react'

export const useInView = (
  options?: IntersectionObserverInit
): { ref: React.RefObject<HTMLDivElement | null>; isInView: boolean } => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setIsInView(entry.isIntersecting)
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isInView }
}
