'use client'

import { useTestimonialDrawer } from '@/hooks/useTestimonialDrawer'
import testimonials from '@/data/testimonials.json'
import type { Testimonial } from '@/types/testimonials'

import { TestimonialTrigger } from './ui/TestimonialTrigger'
import { TestimonialDrawer } from './ui/TestimonialDrawer'

export const TestimonialProvider = () => {
  const { isOpen, currentIndex, toggle, close } = useTestimonialDrawer()

  const typedTestimonials = testimonials as Testimonial[]

  const topTestimonials = typedTestimonials
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 30)

  const averageRating = 5.0
  const totalReviews = typedTestimonials.length

  return (
    <>
      <TestimonialTrigger
        onClick={toggle}
        totalReviews={totalReviews}
        averageRating={averageRating}
      />

      <TestimonialDrawer
        isOpen={isOpen}
        onClose={close}
        testimonials={topTestimonials}
        initialIndex={currentIndex}
      />
    </>
  )
}
