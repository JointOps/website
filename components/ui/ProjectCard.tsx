'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

import type { Project, ProjectCategory } from '@/types/projects'

interface ProjectCardProps {
  project: Project
  categories: ProjectCategory[]
}

export const ProjectCard = memo(function ProjectCard({ project, categories }: ProjectCardProps) {
  const category = categories.find((c) => c.id === project.category)

  const statusConfig = {
    live: { label: 'Live', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    development: { label: 'In Development', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    completed: { label: 'Completed', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    archived: { label: 'Archived', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
  }

  const status = statusConfig[project.status]

  return (
    <motion.div
      className="relative flex h-full max-h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent p-8 backdrop-blur-xl md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      {/* Ambient gradient glow - uses project color */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl will-change-transform"
        style={{ backgroundColor: project.color }}
      />

      {/* Top section - Category, Status, Featured, Year */}
      <div className="relative mb-6 flex flex-wrap items-center gap-3">
        {/* Category badge */}
        {category && (
          <div
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium backdrop-blur-sm"
            style={{
              borderColor: `${category.color}40`,
              backgroundColor: `${category.color}15`,
              color: category.color,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            {category.label}
          </div>
        )}

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium ${status.color}`}
        >
          {project.status === 'live' && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          )}
          {status.label}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-medium text-accent backdrop-blur-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </div>
        )}

        {/* Year */}
        <div className="ml-auto text-sm font-medium text-white/40">{project.year}</div>
      </div>

      {/* Title */}
      <h3 className="relative mb-3 font-display text-3xl font-bold text-white md:text-4xl">
        {project.title}
      </h3>

      {/* Tagline */}
      <p
        className="relative mb-6 text-lg font-medium md:text-xl"
        style={{ color: project.color }}
      >
        {project.tagline}
      </p>

      {/* Description */}
      <div className="relative mb-8 flex-shrink-0">
        <p className="text-lg leading-relaxed text-white/90 md:text-xl">
          {project.description}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="relative mb-8 grid grid-cols-3 gap-4">
        {project.metrics.map((metric, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center backdrop-blur-sm"
          >
            <div className="text-2xl font-bold text-white md:text-3xl">{metric.value}</div>
            <div className="mt-1 text-sm text-white/50">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="relative mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            {tech}
          </span>
        ))}
      </div>

      {/* External link */}
      {project.link && (
        <div className="relative mt-auto border-t border-white/[0.06] pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
          >
            <svg
              className="h-5 w-5 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Documentation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      )}

      {/* Decorative corner accents */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-32 w-32"
        style={{
          background: `linear-gradient(225deg, ${project.color}10 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-32"
        style={{
          background: `linear-gradient(45deg, ${project.color}10 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  )
})
