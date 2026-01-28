'use client'

import { useMemo } from 'react'

import { useDrawer } from '@/contexts'
import { useTestimonialDrawer } from '@/hooks/useTestimonialDrawer'
import testimonials from '@/data/testimonials.json'
import projectsData from '@/data/projects.json'
import type { Testimonial } from '@/types/testimonials'
import type { ProjectsData } from '@/types/projects'

import { TestimonialDrawer } from './ui/TestimonialDrawer'
import { ProjectDrawer } from './ui/ProjectDrawer'

const { projects, categories } = projectsData as ProjectsData
const typedTestimonials = testimonials as Testimonial[]

// Pre-compute sorted data at module level (runs once)
const sortedTestimonials = [...typedTestimonials]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 30)

const sortedProjects = [...projects]
  .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

export const ShowcaseProvider = () => {
  const { isProjectOpen, closeProjects } = useDrawer()
  const { isOpen: isTestimonialOpen, close: closeTestimonials } = useTestimonialDrawer()

  // Memoize to prevent unnecessary re-renders (data is already sorted at module level)
  const topTestimonials = useMemo(() => sortedTestimonials, [])
  const memoizedProjects = useMemo(() => sortedProjects, [])

  return (
    <>
      <TestimonialDrawer
        isOpen={isTestimonialOpen}
        onClose={closeTestimonials}
        testimonials={topTestimonials}
        initialIndex={0}
      />

      <ProjectDrawer
        isOpen={isProjectOpen}
        onClose={closeProjects}
        projects={memoizedProjects}
        categories={categories}
        initialIndex={0}
        initialCategory="all"
      />
    </>
  )
}
