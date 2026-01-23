'use client'

import { useMotionValue, PanInfo } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

interface UseCarouselOptions {
  totalItems: number
  initialIndex?: number
  autoPlayInterval?: number
  isOpen?: boolean
  onClose?: () => void
}

interface UseCarouselReturn {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  direction: number
  isAutoPlaying: boolean
  setIsAutoPlaying: (playing: boolean) => void
  isTransitioning: boolean
  dragX: ReturnType<typeof useMotionValue<number>>
  paginate: (direction: number) => void
  handleDragEnd: (_: unknown, info: PanInfo) => void
  goToIndex: (index: number) => void
  variants: {
    enter: (direction: number) => { x: number; opacity: number }
    center: { x: number; opacity: number }
    exit: (direction: number) => { x: number; opacity: number }
  }
}

export const useCarousel = ({
  totalItems,
  initialIndex = 0,
  autoPlayInterval = 5000,
  isOpen = true,
  onClose,
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const dragX = useMotionValue(0)

  const paginate = useCallback(
    (newDirection: number) => {
      if (isTransitioning || totalItems === 0) return

      setIsTransitioning(true)
      setDirection(newDirection)
      setCurrentIndex((prev) => {
        const next = prev + newDirection
        if (next < 0) return totalItems - 1
        if (next >= totalItems) return 0
        return next
      })

      setTimeout(() => setIsTransitioning(false), 150)
    },
    [totalItems, isTransitioning]
  )

  const goToIndex = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 150)
    },
    [currentIndex, isTransitioning]
  )

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const swipeThreshold = 50
      if (info.offset.x > swipeThreshold) {
        paginate(-1)
      } else if (info.offset.x < -swipeThreshold) {
        paginate(1)
      }
    },
    [paginate]
  )

  // Auto-play effect
  useEffect(() => {
    if (!isOpen || !isAutoPlaying) return

    const timer = setInterval(() => {
      paginate(1)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [isOpen, isAutoPlaying, paginate, autoPlayInterval])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'ArrowLeft') paginate(-1)
      if (e.key === 'ArrowRight') paginate(1)
      if (e.key === 'Escape' && onClose) onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, paginate])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return {
    currentIndex,
    setCurrentIndex,
    direction,
    isAutoPlaying,
    setIsAutoPlaying,
    isTransitioning,
    dragX,
    paginate,
    handleDragEnd,
    goToIndex,
    variants,
  }
}
