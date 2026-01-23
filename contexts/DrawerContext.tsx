'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface DrawerContextType {
  isTestimonialOpen: boolean
  isProjectOpen: boolean
  openTestimonials: () => void
  closeTestimonials: () => void
  openProjects: () => void
  closeProjects: () => void
}

const DrawerContext = createContext<DrawerContextType | null>(null)

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }
  return context
}

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [isTestimonialOpen, setIsTestimonialOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)

  const openTestimonials = useCallback(() => setIsTestimonialOpen(true), [])
  const closeTestimonials = useCallback(() => setIsTestimonialOpen(false), [])
  const openProjects = useCallback(() => setIsProjectOpen(true), [])
  const closeProjects = useCallback(() => setIsProjectOpen(false), [])

  return (
    <DrawerContext.Provider
      value={{
        isTestimonialOpen,
        isProjectOpen,
        openTestimonials,
        closeTestimonials,
        openProjects,
        closeProjects,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
