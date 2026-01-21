'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { usePrefersReducedMotion } from '@/hooks'

import { AnimatedText, Button, FadeIn } from '../ui'

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10">
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute left-1/4 top-1/4 bg-blob-lg rounded-full bg-accent/20 blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute right-1/4 top-1/3 bg-blob-md rounded-full bg-cyan-500/10 blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 80, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/2 bg-blob-sm rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                x: [0, 60, 0],
                y: [0, -60, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}
        {prefersReducedMotion && (
          <div className="absolute left-1/2 top-1/2 bg-blob-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <AnimatedText text="We Build What Others" />
            <br />
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              <AnimatedText text="Can't" delay={0.3} />
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted md:text-xl">
            Blockchain protocols, web applications, and digital infrastructure for companies that
            refuse to compromise on quality.
          </p>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact">
              <Button variant="primary" showArrow>
                Start a Project
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="secondary">See What We Do</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
