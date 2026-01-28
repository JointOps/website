'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  type ReactNode,
} from 'react'

import { throttle } from '@/lib/utils'

interface ScrollContextType {
  scrollY: number
  scrollDirection: 'up' | 'down' | null
  isScrolled: boolean
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: null,
  isScrolled: false,
})

export const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const lastScrollY = useRef(0)

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Update scroll position
    setScrollY(currentScrollY)

    // Update scroll direction (only trigger down when past 100px)
    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setScrollDirection('down')
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up')
    }

    lastScrollY.current = currentScrollY
  }, [])

  // Create throttled handler once
  const throttledScroll = useMemo(
    () => throttle(updateScroll, 16),
    [updateScroll]
  )

  useEffect(() => {
    // Set initial scroll position
    const initialScroll = window.scrollY
    setScrollY(initialScroll)
    lastScrollY.current = initialScroll

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [throttledScroll])

  const value = useMemo(
    () => ({
      scrollY,
      scrollDirection,
      isScrolled: scrollY > 20, // Match Header threshold
    }),
    [scrollY, scrollDirection]
  )

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}
