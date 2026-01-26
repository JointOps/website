'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

import projectData from '@/data/projects.json'
import { ProjectDrawer } from '@/components/ui/ProjectDrawer'
import type { Project, ProjectCategory } from '@/types/projects'

const projects = projectData.projects as Project[]
const categories = projectData.categories as ProjectCategory[]

// Floating particles component
const FloatingParticles = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Animated counter component
const AnimatedCounter = ({ value, color }: { value: string; color: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      className="text-3xl md:text-4xl font-bold"
      style={{ color }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
    >
      {value}
    </motion.div>
  )
}

// 3D Tilt Card Component
const TiltCard = ({
  children,
  className = '',
  glareColor = '#ffffff',
}: {
  children: React.ReactNode
  className?: string
  glareColor?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-[2rem] pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${useTransform(x, [-0.5, 0.5], ['0%', '100%'])} ${useTransform(y, [-0.5, 0.5], ['0%', '100%'])}, ${glareColor}10 0%, transparent 50%)`,
        }}
      />
    </motion.div>
  )
}

// Hero Project Card - Massive, immersive
const HeroProjectCard = ({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TiltCard className="cursor-pointer" glareColor={project.color}>
      <motion.div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(ellipse 80% 50% at 20% 40%, ${project.color}25 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 80% 60%, ${project.color}15 0%, transparent 50%)`,
                `radial-gradient(ellipse 80% 50% at 60% 30%, ${project.color}25 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 30% 70%, ${project.color}15 0%, transparent 50%)`,
                `radial-gradient(ellipse 80% 50% at 20% 40%, ${project.color}25 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 80% 60%, ${project.color}15 0%, transparent 50%)`,
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Animated grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${project.color}08 1px, transparent 1px),
                linear-gradient(90deg, ${project.color}08 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{ opacity: isHovered ? 0.8 : 0.3 }}
          />

          {/* Floating particles */}
          <AnimatePresence>
            {isHovered && <FloatingParticles color={project.color} />}
          </AnimatePresence>
        </div>

        {/* Glow orbs */}
        <motion.div
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full blur-[100px]"
          style={{ backgroundColor: project.color }}
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full blur-[80px]"
          style={{ backgroundColor: project.color }}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative flex min-h-[500px] flex-col justify-between p-8 md:min-h-[550px] md:p-12 lg:p-16">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Live indicator */}
              <div
                className="flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
                style={{
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}10`,
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{ backgroundColor: project.color }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                </span>
                <span className="text-sm font-semibold tracking-wide" style={{ color: project.color }}>
                  {project.status === 'live' ? 'LIVE' : project.status === 'development' ? 'IN DEV' : 'SHIPPED'}
                </span>
              </div>
              <span className="text-sm text-white/40 font-mono">{project.year}</span>
            </motion.div>

            {/* Project number */}
            <motion.span
              className="text-8xl md:text-9xl font-bold font-display opacity-[0.08] select-none"
              style={{ color: project.color }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.08, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              01
            </motion.span>
          </div>

          {/* Center content */}
          <div className="relative z-10 my-8 md:my-12">
            <motion.div
              className="mb-2 text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: `${project.color}90` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Featured Project
            </motion.div>

            <motion.h3
              className="mb-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                textShadow: `0 0 80px ${project.color}30`,
              }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-xl md:text-2xl font-medium max-w-xl"
              style={{ color: project.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {project.tagline}
            </motion.p>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Tech stack */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                  whileHover={{
                    backgroundColor: `${project.color}20`,
                    borderColor: `${project.color}40`,
                    color: project.color,
                  }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  custom={i}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Explore button */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-sm text-white/40 hidden md:block">Explore project</span>
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-full border-2"
                style={{
                  borderColor: `${project.color}60`,
                  backgroundColor: `${project.color}10`,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: `${project.color}30`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                  className="h-6 w-6"
                  style={{ color: project.color }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: isHovered ? 4 : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating metrics - right side, positioned higher to avoid overlap */}
          <motion.div
            className="absolute right-8 md:right-12 lg:right-16 top-1/3 -translate-y-1/2 hidden lg:flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {project.metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="text-right"
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <AnimatedCounter value={metric.value} color={project.color} />
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </TiltCard>
  )
}

// Secondary project card - Compact but stunning
const SecondaryCard = ({
  project,
  onClick,
  index,
}: {
  project: Project
  onClick: () => void
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: `${project.color}30` }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${project.color}15 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.color}`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      <div className="relative flex h-full min-h-[240px] flex-col p-6">
        {/* Top: Status and year */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor:
                  project.status === 'live' ? '#22c55e' : project.status === 'development' ? '#f59e0b' : project.color,
                boxShadow: project.status === 'live' ? '0 0 10px #22c55e' : 'none',
              }}
            />
            <span className="text-xs text-white/50 font-mono">{project.year}</span>
          </div>
          <span
            className="text-5xl font-bold font-display opacity-10 select-none"
            style={{ color: project.color }}
          >
            {String(index + 2).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <motion.h4
          className="mb-2 font-display text-2xl font-bold text-white"
          animate={{ color: isHovered ? project.color : '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h4>

        {/* Tagline */}
        <p className="mb-4 text-sm text-white/60 line-clamp-2">{project.tagline}</p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs text-white/40">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom: Arrow */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {project.metrics.slice(0, 1).map((metric, i) => (
              <span key={i} className="text-sm font-semibold" style={{ color: project.color }}>
                {metric.value}
              </span>
            ))}
          </div>
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            style={{
              borderColor: isHovered ? `${project.color}60` : 'rgba(255,255,255,0.1)',
              backgroundColor: isHovered ? `${project.color}15` : 'transparent',
            }}
          >
            <motion.svg
              className="h-4 w-4"
              style={{ color: isHovered ? project.color : 'rgba(255,255,255,0.4)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: isHovered ? 2 : 0 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export const Projects = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150])

  const handleOpenProject = () => {
    setIsDrawerOpen(true)
  }

  const featuredProject = projects.find((p) => p.featured)
  // Only show 3 secondary projects (4 total with hero)
  const displayedProjects = projects.filter((p) => p.id !== featuredProject?.id).slice(0, 3)

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="section-padding relative overflow-hidden bg-black px-4 sm:px-6 lg:px-8"
      >
        {/* Animated background */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY }}>
          <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-accent/[0.03] blur-[150px]" />
          <div className="absolute bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-5 py-2.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-medium text-accent">Featured Work</span>
            </motion.div>

            <h2 className="text-display-large mb-6 font-display font-bold text-foreground max-w-4xl">
              Projects We&apos;re{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-accent via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Proud Of
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-accent via-purple-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>

            <p className="text-lg text-white/50 max-w-2xl">
              From protocol-level blockchain infrastructure to AI-powered platforms. Here&apos;s what we&apos;ve shipped.
            </p>
          </motion.div>

          {/* Hero project */}
          {featuredProject && (
            <div className="mb-8">
              <HeroProjectCard
                project={featuredProject}
                onClick={handleOpenProject}
              />
            </div>
          )}

          {/* Secondary projects grid - Only show 3 */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <SecondaryCard
                key={project.id}
                project={project}
                onClick={handleOpenProject}
                index={index}
              />
            ))}
          </div>

          {/* Stunning "See All" CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setIsDrawerOpen(true)}
              className="group relative inline-flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-2xl">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-purple-500 via-cyan-500 to-accent bg-[length:200%_100%] animate-[gradient-x_3s_linear_infinite]" />
              </span>

              {/* Inner background */}
              <span className="absolute inset-[2px] rounded-[14px] bg-black" />

              {/* Glow effect */}
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/20 via-purple-500/20 to-cyan-500/20 blur-xl" />

              {/* Shimmer effect */}
              <span className="absolute inset-0 rounded-2xl overflow-hidden">
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </span>

              {/* Content */}
              <span className="relative flex items-center gap-4 px-10 py-5 text-lg font-semibold text-white">
                {/* Grid icon */}
                <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-accent/30 bg-accent/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <svg
                    className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </span>

                <span className="relative">
                  See All Projects
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-cyan-500 group-hover:w-full transition-all duration-300" />
                </span>

                {/* Animated arrow */}
                <svg
                  className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Corner sparkles */}
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-ping opacity-0 group-hover:opacity-75" />
              <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-cyan-500 animate-ping opacity-0 group-hover:opacity-75 animation-delay-200" />
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Project Drawer - "See All Projects" */}
      <ProjectDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        projects={projects}
        categories={categories}
      />
    </>
  )
}
