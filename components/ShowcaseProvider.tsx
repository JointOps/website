'use client'

import { useDrawer } from '@/contexts'
import { useTestimonialDrawer } from '@/hooks/useTestimonialDrawer'
import testimonials from '@/data/testimonials.json'
import projectsData from '@/data/projects.json'
import type { Testimonial } from '@/types/testimonials'
import type { ProjectsData } from '@/types/projects'

import { ShowcaseTrigger } from './ui/ShowcaseTrigger'
import { TestimonialDrawer } from './ui/TestimonialDrawer'
import { ProjectDrawer } from './ui/ProjectDrawer'

const { projects, categories } = projectsData as ProjectsData

export const ShowcaseProvider = () => {
  const { isProjectOpen, closeProjects, openProjects } = useDrawer()
  const { isOpen: isTestimonialOpen, toggle: toggleTestimonials, close: closeTestimonials } = useTestimonialDrawer()

  const typedTestimonials = testimonials as Testimonial[]
  const topTestimonials = typedTestimonials
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 30)

  const averageRating = 5.0
  const totalReviews = typedTestimonials.length

  // Sort featured projects first
  const sortedProjects = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <>
      <ShowcaseTrigger
        onProjectsClick={openProjects}
        onReviewsClick={toggleTestimonials}
        totalReviews={totalReviews}
        averageRating={averageRating}
      />

      <TestimonialDrawer
        isOpen={isTestimonialOpen}
        onClose={closeTestimonials}
        testimonials={topTestimonials}
        initialIndex={0}
      />

      <ProjectDrawer
        isOpen={isProjectOpen}
        onClose={closeProjects}
        projects={sortedProjects}
        categories={categories}
        initialIndex={0}
        initialCategory="all"
      />
    </>
  )
}
