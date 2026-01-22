import { useState, useCallback } from 'react'

export const useTestimonialDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const next = useCallback((totalCount: number) => {
    setCurrentIndex((prev) => (prev + 1) % totalCount)
  }, [])

  const prev = useCallback((totalCount: number) => {
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount)
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return {
    isOpen,
    currentIndex,
    open,
    close,
    toggle,
    next,
    prev,
    goTo,
  }
}
