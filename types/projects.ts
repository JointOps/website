export type ProjectStatus = 'live' | 'development' | 'completed' | 'archived'

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectCategory {
  id: string
  label: string
  color: string
}

export interface ProjectLinks {
  docs?: string
  npm?: string
  npmBun?: string
  github?: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  description: string
  metrics: ProjectMetric[]
  technologies: string[]
  thumbnail: string | null
  color: string
  featured: boolean
  link?: string | null
  links?: ProjectLinks
  year: string
  status: ProjectStatus
  relevantFor?: string[]
}

export interface ProjectsData {
  projects: Project[]
  categories: ProjectCategory[]
}
