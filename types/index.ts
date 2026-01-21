export interface Service {
  id: string
  title: string
  tagline: string
  description: string[]
  features: string[]
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
