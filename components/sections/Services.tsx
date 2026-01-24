'use client'

import { motion, useScroll, useTransform, MotionValue, useInView, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { useRef, useMemo, useState, useEffect, useCallback } from 'react'

import { SERVICES } from '@/constants'
import { usePrefersReducedMotion } from '@/hooks'

import {
  BackendIcon,
  BlockchainIcon,
  DesignIcon,
  DeveloperToolsIcon,
  GamingIcon,
  WebAppsIcon,
} from '../icons'

const iconMap = {
  blockchain: BlockchainIcon,
  'web3-gaming': GamingIcon,
  'web-apps': WebAppsIcon,
  backend: BackendIcon,
  'dev-tools': DeveloperToolsIcon,
  design: DesignIcon,
}

const LightRay = ({
  ray,
  index,
  scrollProgress,
}: {
  ray: { angle: number; width: number; length: number; delay: number }
  index: number
  scrollProgress: MotionValue<number>
}) => {
  const x = useTransform(scrollProgress, [0, 1], [-500, 1500])
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0.1, 0.2, 0.2, 0.1])

  return (
    <motion.div
      key={index}
      className="absolute pointer-events-none"
      style={{
        width: `${ray.width}px`,
        height: `${ray.length}px`,
        background: `linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.15), transparent)`,
        transform: `rotate(${ray.angle}deg)`,
        top: '50%',
        left: '50%',
        x,
        opacity,
        filter: 'blur(1px)',
      }}
    />
  )
}

const LightRays = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const rays = useMemo(
    () => [
      { angle: 45, width: 2, length: 1000, delay: 0 },
      { angle: -30, width: 1.5, length: 800, delay: 0.2 },
      { angle: 60, width: 1, length: 600, delay: 0.4 },
    ],
    []
  )

  return (
    <>
      {rays.map((ray, i) => (
        <LightRay key={i} ray={ray} index={i} scrollProgress={scrollProgress} />
      ))}
    </>
  )
}

const Particle = ({
  particle,
  scrollProgress,
}: {
  particle: {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
  }
  scrollProgress: MotionValue<number>
}) => {
  const opacity = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1])

  return (
    <motion.div
      key={particle.id}
      className="absolute rounded-full bg-accent"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        opacity,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: 'easeInOut',
      }}
    />
  )
}

const ParticleField = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 3,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <Particle key={particle.id} particle={particle} scrollProgress={scrollProgress} />
      ))}
    </div>
  )
}

const DispersedParticle = ({
  particle,
  disperseProgress,
}: {
  particle: {
    id: number
    startX: number
    startY: number
    angle: number
    distance: number
    size: number
    delay: number
  }
  disperseProgress: MotionValue<number>
}) => {
  const adjustedProgress = useTransform(disperseProgress, (value) => {
    const delayed = Math.max(0, value - particle.delay)
    return Math.min(1, delayed * (1 + particle.delay))
  })

  const x = useTransform(
    adjustedProgress,
    [0, 1],
    [particle.startX, particle.startX + Math.cos(particle.angle) * particle.distance]
  )
  const y = useTransform(
    adjustedProgress,
    [0, 1],
    [particle.startY, particle.startY + Math.sin(particle.angle) * particle.distance]
  )
  const opacity = useTransform(adjustedProgress, [0, 0.2, 0.5, 1], [0, 0.8, 0.6, 0])
  const scale = useTransform(adjustedProgress, [0, 0.3, 1], [0.5, 1.2, 0.2])

  return (
    <motion.div
      className="absolute rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]"
      style={{
        left: 0,
        top: 0,
        width: particle.size,
        height: particle.size,
        x,
        y,
        opacity,
        scale,
      }}
    />
  )
}

const DispersedParticles = ({ disperseProgress }: { disperseProgress: MotionValue<number> }) => {
  const particles = useMemo(() => {
    const count = 12
    return Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4
      return {
        id: i,
        startX: 0,
        startY: 0,
        angle,
        distance: 100 + Math.random() * 150,
        size: Math.random() * 3 + 2,
        delay: Math.random() * 0.3,
      }
    })
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      {particles.map((particle) => (
        <DispersedParticle key={particle.id} particle={particle} disperseProgress={disperseProgress} />
      ))}
    </div>
  )
}

const ServiceDisplay = ({
  service,
  index,
  scrollProgress,
}: {
  service: (typeof SERVICES)[0]
  index: number
  scrollProgress: MotionValue<number>
}) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const IconComponent = iconMap[service.id as keyof typeof iconMap]
  const isEven = index % 2 === 0
  const isFirst = index === 0
  const isLast = index === SERVICES.length - 1

  const serviceStart = index / SERVICES.length
  const serviceEnd = (index + 1) / SERVICES.length

  // Visible transition zones (20%) at edges, full opacity for 60% in middle
  const fadeInEnd = serviceStart + (serviceEnd - serviceStart) * 0.2
  const fadeOutStart = serviceStart + (serviceEnd - serviceStart) * 0.8

  // Smooth easing for visible transitions
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const easeInCubic = (t: number) => Math.pow(t, 3)

  const opacity = useTransform(scrollProgress, (value) => {
    // First service: full opacity, visible crossfade at end
    if (isFirst) {
      if (value <= fadeOutStart) return 1
      if (value > fadeOutStart && value < serviceEnd) {
        const progress = (value - fadeOutStart) / (serviceEnd - fadeOutStart)
        return 1 - easeInCubic(progress)
      }
      return 0
    }

    // Last service: visible crossfade in, then stay full
    if (isLast) {
      if (value < serviceStart) return 0
      if (value >= serviceStart && value <= fadeInEnd) {
        const progress = (value - serviceStart) / (fadeInEnd - serviceStart)
        return easeOutCubic(progress)
      }
      return 1
    }

    // Middle services: visible fade transitions at both ends
    if (value < serviceStart) return 0
    if (value >= serviceStart && value <= fadeInEnd) {
      const progress = (value - serviceStart) / (fadeInEnd - serviceStart)
      return easeOutCubic(progress)
    }
    if (value > fadeInEnd && value <= fadeOutStart) {
      return 1 // Full opacity for middle 60%
    }
    if (value > fadeOutStart && value < serviceEnd) {
      const progress = (value - fadeOutStart) / (serviceEnd - fadeOutStart)
      return 1 - easeInCubic(progress)
    }
    return 0
  })

  // Particle dispersion effect - only for middle services (not first or last)
  const shouldDisperse = !isFirst && !isLast
  const disperseProgress = useTransform(scrollProgress, (value) => {
    if (!shouldDisperse) return 0
    if (value <= fadeOutStart) return 0
    if (value > fadeOutStart && value < serviceEnd) {
      return (value - fadeOutStart) / (serviceEnd - fadeOutStart)
    }
    return 1
  })

  const scale = useTransform(opacity, [0, 1], [0.95, 1])
  const y = useTransform(opacity, [0, 1], [40, 0])
  const iconScale = useTransform(opacity, [0, 1], [0.85, 1])
  const iconRotateY = useTransform(opacity, [0, 1], [20, 0])
  const spotlightOpacity = useTransform(opacity, [0, 0.5, 1, 0.5, 0], [0, 0.15, 0.2, 0.15, 0])
  const secondaryGlowOpacity = useTransform(opacity, [0, 1], [0, 0.6])

  if (prefersReducedMotion) {
    return (
      <motion.div
        className="absolute inset-0 flex items-start pt-8 lg:pt-16"
        style={{
          opacity,
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            <div className="mb-8">
              <IconComponent className="icon-xl text-accent" />
            </div>
            <h3 className="mb-4 font-display text-display-medium font-bold text-foreground">
              {service.title}
            </h3>
            <p className="mb-6 text-body-large text-muted">{service.tagline}</p>
            {service.description.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-body text-foreground/80">
                {para}
              </p>
            ))}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-body text-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <IconComponent className="icon-2xl text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-start pt-8 lg:pt-16"
      style={{
        opacity,
        scale,
      }}
    >
      {/* Particle dispersion effect for middle services */}
      {!prefersReducedMotion && shouldDisperse && <DispersedParticles disperseProgress={disperseProgress} />}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15), transparent 60%)',
          opacity: spotlightOpacity,
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div className={isEven ? 'lg:order-1' : 'lg:order-2'} style={{ y }}>
          <motion.div className="mb-8" style={{ opacity }}>
            <IconComponent className="icon-xl text-accent drop-shadow-[0_0_24px_rgba(99,102,241,0.4)]" />
          </motion.div>

          <motion.h3
            className="mb-4 font-display text-display-medium font-bold text-foreground"
            style={{ opacity }}
          >
            {service.title}
          </motion.h3>

          <motion.p className="mb-6 text-body-large text-muted" style={{ opacity }}>
            {service.tagline}
          </motion.p>

          {service.description.map((para, i) => (
            <motion.p
              key={i}
              className="mb-4 leading-relaxed text-body text-foreground/80"
              style={{ opacity }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" style={{ opacity }}>
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                <span className="text-body text-muted">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={isEven ? 'lg:order-2' : 'lg:order-1'}
          style={{
            scale: iconScale,
            rotateY: iconRotateY,
          }}
        >
          <div className="relative aspect-square">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-accent/20 blur-[80px]"
              style={{ opacity }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-[60px]"
              style={{ opacity: secondaryGlowOpacity }}
            />
            <div className="relative flex h-full items-center justify-center">
              <IconComponent className="icon-2xl text-accent/60 drop-shadow-[0_0_48px_rgba(99,102,241,0.3)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ProgressDot = ({
  service,
  index,
  scrollProgress,
}: {
  service: (typeof SERVICES)[0]
  index: number
  scrollProgress: MotionValue<number>
}) => {
  const serviceStart = index / SERVICES.length
  const serviceEnd = (index + 1) / SERVICES.length

  const width = useTransform(scrollProgress, (value) => {
    if (value >= serviceStart && value < serviceEnd) {
      return 32
    }
    return 8
  })

  const opacity = useTransform(scrollProgress, (value) => {
    if (value >= serviceStart && value < serviceEnd) {
      return 1
    }
    return 0.3
  })

  return (
    <motion.div
      key={service.id}
      className="h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]"
      style={{
        width,
        opacity,
      }}
    />
  )
}

const ScrollProgress = ({
  scrollProgress,
  isVisible,
}: {
  scrollProgress: MotionValue<number>
  isVisible: boolean
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/90 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {SERVICES.map((service, index) => (
            <ProgressDot key={service.id} service={service} index={index} scrollProgress={scrollProgress} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Mobile Carousel Component
const MobileServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 50
    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (info.offset.x < -threshold && currentIndex < SERVICES.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="relative px-4 py-12 lg:hidden">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.id as keyof typeof iconMap]
            return (
              <motion.div
                key={service.id}
                className="w-full flex-shrink-0 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-xl">
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan-500/5 opacity-50" />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
                        <div className="relative rounded-full border border-accent/20 bg-accent/10 p-4">
                          <IconComponent className="icon-lg text-accent" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mb-4 text-center text-base text-accent sm:text-lg">{service.tagline}</p>

                    {/* Description */}
                    <div className="mb-6 space-y-3">
                      {service.description.map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed text-muted/90 sm:text-base">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                          <span className="text-sm text-muted sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Dot Navigation */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setCurrentIndex(index)}
            className="touch-target group relative p-2"
            aria-label={`Go to ${service.title}`}
          >
            <motion.div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/20'
              }`}
              animate={{
                scale: index === currentIndex ? 1 : 0.8,
              }}
              whileHover={{ scale: 1 }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20 blur-md"
                layoutId="activeService"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Swipe Hint (only on first load) */}
      {currentIndex === 0 && (
        <motion.div
          className="mt-4 text-center text-xs text-muted/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Swipe to explore more →
        </motion.div>
      )}
    </div>
  )
}

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isSnapping = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  // Check if Services section is in view
  const isInView = useInView(containerRef, {
    margin: '-20% 0px -20% 0px',
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Snap to nearest service when scrolling stops
  const snapToService = useCallback(() => {
    if (!containerRef.current || isSnapping.current || prefersReducedMotion) return

    const container = containerRef.current
    const containerTop = container.offsetTop
    const containerHeight = container.offsetHeight
    const scrollY = window.scrollY

    // Calculate current progress within the container
    const relativeScroll = scrollY - containerTop
    const progress = Math.max(0, Math.min(1, relativeScroll / (containerHeight - window.innerHeight)))

    // Find nearest service index
    const serviceIndex = Math.round(progress * (SERVICES.length - 1))
    const targetProgress = serviceIndex / (SERVICES.length - 1)

    // Calculate target scroll position
    const targetScroll = containerTop + targetProgress * (containerHeight - window.innerHeight)

    // Only snap if we're within the services section
    if (scrollY >= containerTop && scrollY <= containerTop + containerHeight - window.innerHeight) {
      isSnapping.current = true
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      })

      // Reset snapping flag after animation
      setTimeout(() => {
        isSnapping.current = false
      }, 500)
    }
  }, [prefersReducedMotion])

  // Listen for scroll end
  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (isSnapping.current) return

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current)
    }

    // Set new timeout to snap after scrolling stops
    scrollTimeout.current = setTimeout(() => {
      snapToService()
    }, 150) // Snap after 150ms of no scrolling
  })

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  // Pre-create all transforms at component level (not conditionally)
  const blob1X = useTransform(scrollYProgress, [0, 1], [0, 200])
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const blob1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const blob2X = useTransform(scrollYProgress, [0, 1], [0, -150])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const blob2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1])
  const blob3X = useTransform(scrollYProgress, [0, 1], [0, 100])
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const scanlineOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.5])

  return (
    <section id="services" className="relative bg-black">
      <div className="relative pt-16 pb-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-8 lg:pt-32 lg:pb-8 text-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 font-display text-display-large font-bold text-foreground">
            What We Build
          </h2>
          <p className="mx-auto max-w-2xl text-body-large text-muted">
            From mainnet deployments to enterprise infrastructure.
            <br />
            Built right the first time.
          </p>
        </motion.div>
      </div>

      {/* Mobile Carousel */}
      <MobileServicesCarousel />

      {/* Desktop Scroll Experience */}
      <div ref={containerRef} className="relative hidden lg:block" style={{ height: '500vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-black will-change-transform pt-8 lg:pt-12">
          <div className="absolute inset-0">
            {!prefersReducedMotion && (
              <>
                <LightRays scrollProgress={scrollYProgress} />
                <ParticleField scrollProgress={scrollYProgress} />
                <motion.div
                  className="absolute left-1/4 top-1/4 bg-blob-lg rounded-full bg-accent/20 blur-3xl"
                  style={{
                    x: blob1X,
                    y: blob1Y,
                    scale: blob1Scale,
                  }}
                />
                <motion.div
                  className="absolute right-1/4 top-1/3 bg-blob-md rounded-full bg-cyan-500/15 blur-3xl"
                  style={{
                    x: blob2X,
                    y: blob2Y,
                    scale: blob2Scale,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-1/2 bg-blob-sm rounded-full bg-blue-500/10 blur-3xl"
                  style={{
                    x: blob3X,
                    y: blob3Y,
                  }}
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)',
                    opacity: scanlineOpacity,
                  }}
                />
              </>
            )}
            {prefersReducedMotion && (
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
            )}
          </div>

          <div className="relative h-full">
            {SERVICES.map((service, index) => (
              <ServiceDisplay
                key={service.id}
                service={service}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollProgress scrollProgress={scrollYProgress} isVisible={isInView} />

      <div className="h-24 bg-black" />
    </section>
  )
}
