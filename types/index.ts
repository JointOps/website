export interface Service {
  id: string
  title: string
  tagline: string
  description: readonly string[]
  features: readonly string[]
  relevantFor?: readonly string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ProofMetric {
  value: string
  label: string
}

export interface ApproachStep {
  title: string
  description: string
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export type ScrollDirection = 'up' | 'down' | null

export interface IconProps {
  className?: string
}

export interface SocialLinks {
  readonly twitter: string
  readonly github: string
  readonly linkedin: string
}

export type AnimationVariant = 'hidden' | 'visible'

export interface ViewportConfig {
  once: boolean
  amount: number
  margin: string
}
