'use client'

import { useDrawer } from '@/contexts'
import projectsData from '@/data/projects.json'
import type { ProjectsData } from '@/types/projects'

import { ProjectDrawer } from './ui/ProjectDrawer'

const { projects, categories } = projectsData as ProjectsData

export const ProjectProvider = () => {
  const { isProjectOpen, closeProjects } = useDrawer()

  // Sort featured projects first
  const sortedProjects = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <ProjectDrawer
      isOpen={isProjectOpen}
      onClose={closeProjects}
      projects={sortedProjects}
      categories={categories}
      initialIndex={0}
      initialCategory="all"
    />
  )
}
