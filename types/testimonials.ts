export interface TestimonialMedium {
  id: number
  label: string
  icon: string
}

export interface Testimonial {
  id: number
  highlights: string[]
  medium: TestimonialMedium
  review: string
  by: string
  by_image: string | null
  country: string
  ratings: number
  date: string
  video: string | null
  thumbnail: string | null
  priority: number
}
