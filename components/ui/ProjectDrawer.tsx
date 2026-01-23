'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

import { useCarousel } from '@/hooks'
import type { Project, ProjectCategory } from '@/types/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectDrawerProps {
  isOpen: boolean
  onClose: () => void
  projects: Project[]
  categories: ProjectCategory[]
  initialIndex?: number
  initialCategory?: string
}

export const ProjectDrawer = ({
  isOpen,
  onClose,
  projects,
  categories,
  initialIndex = 0,
  initialCategory = 'all',
}: ProjectDrawerProps) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [projects, activeCategory])

  // Sort featured first
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }, [filteredProjects])

  const {
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
  } = useCarousel({
    totalItems: sortedProjects.length,
    initialIndex,
    autoPlayInterval: 5000,
    isOpen,
    onClose,
  })

  const currentProject = sortedProjects[currentIndex] || sortedProjects[0]

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory, setCurrentIndex])

  if (!currentProject || sortedProjects.length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            {/* Static gradient orbs with project color */}
            <div
              className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: currentProject.color }}
            />
            <div
              className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl opacity-15"
              style={{ backgroundColor: currentProject.color }}
            />
          </motion.div>

          {/* Main drawer content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
            <motion.div
              className="relative flex h-full w-full max-w-5xl flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <motion.div
                className="mb-4 flex flex-col gap-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {/* Title row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${currentProject.color}30 0%, ${currentProject.color}10 100%)`,
                        boxShadow: `0 4px 20px ${currentProject.color}20`,
                      }}
                    >
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white md:text-3xl">What We&apos;ve Built</h2>
                      <p className="text-sm text-white/50">
                        Project {currentIndex + 1} of {sortedProjects.length}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06]"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                    >
                      {isAutoPlaying ? (
                        <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H5zM13 4a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2z" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      )}
                    </motion.button>

                    <motion.button
                      onClick={onClose}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10"
                      whileHover={{ scale: 1.03, rotate: 90 }}
                      whileTap={{ scale: 0.97 }}
                      aria-label="Close projects"
                    >
                      <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Category filter tabs */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeCategory === 'all'
                        ? 'border border-accent/30 bg-accent/10 text-accent'
                        : 'border border-white/[0.08] bg-white/[0.03] text-white/60 hover:border-white/[0.15] hover:text-white/80'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat.id
                          ? 'border bg-opacity-10'
                          : 'border border-white/[0.08] bg-white/[0.03] text-white/60 hover:border-white/[0.15] hover:text-white/80'
                      }`}
                      style={
                        activeCategory === cat.id
                          ? {
                              borderColor: `${cat.color}50`,
                              backgroundColor: `${cat.color}15`,
                              color: cat.color,
                            }
                          : undefined
                      }
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Card container */}
              <div className="relative flex-1 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={`${activeCategory}-${currentIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: 'tween',
                      duration: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    style={{ x: dragX }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-full w-full overflow-y-auto">
                      <ProjectCard project={currentProject} categories={categories} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation footer */}
              <motion.div
                className="mt-4 flex items-center justify-between gap-4 sm:mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
              >
                {/* Previous button */}
                <motion.button
                  onClick={() => paginate(-1)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06] sm:px-6 sm:py-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Previous project"
                >
                  <svg className="h-5 w-5 text-white/70 transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden font-medium text-white/70 transition-colors group-hover:text-white sm:block">
                    Previous
                  </span>
                </motion.button>

                {/* Progress dots */}
                <div className="flex items-center gap-2">
                  {sortedProjects.slice(0, 8).map((project, i) => (
                    <motion.button
                      key={project.id}
                      onClick={() => goToIndex(i)}
                      className="relative h-2 overflow-hidden rounded-full transition-all duration-300"
                      style={{
                        width: i === currentIndex ? '32px' : '8px',
                        backgroundColor: i === currentIndex ? project.color : 'rgba(255, 255, 255, 0.2)',
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Go to ${project.title}`}
                      disabled={isTransitioning}
                    >
                      {i === currentIndex && (
                        <motion.div
                          className="absolute inset-0"
                          style={{ backgroundColor: project.color }}
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{
                            duration: 5,
                            ease: 'linear',
                            repeat: isAutoPlaying ? Infinity : 0,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                  {sortedProjects.length > 8 && (
                    <span className="ml-2 text-xs text-white/40">+{sortedProjects.length - 8} more</span>
                  )}
                </div>

                {/* Next button */}
                <motion.button
                  onClick={() => paginate(1)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.06] sm:px-6 sm:py-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Next project"
                >
                  <span className="hidden font-medium text-white/70 transition-colors group-hover:text-white sm:block">
                    Next
                  </span>
                  <svg className="h-5 w-5 text-white/70 transition-colors group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Keyboard hints */}
              <motion.div
                className="mt-4 flex items-center justify-center gap-6 text-xs text-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">←</kbd>
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">→</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 font-mono">ESC</kbd>
                  Close
                </span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  Drag to swipe
                </span>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
