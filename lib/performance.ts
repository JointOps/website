export const getDevicePerformanceTier = (): 'high' | 'medium' | 'low' => {
  if (typeof window === 'undefined') return 'high'

  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
  const cores = navigator.hardwareConcurrency || 1

  if (memory && memory <= 4 && cores <= 4) {
    return 'low'
  }

  if (memory && memory <= 8 && cores <= 6) {
    return 'medium'
  }

  return 'high'
}

export const shouldReduceAnimations = (): boolean => {
  if (typeof window === 'undefined') return false

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const tier = getDevicePerformanceTier()

  return prefersReduced || tier === 'low'
}

export const getOptimizedBlurValue = (baseBlur: number): number => {
  const tier = getDevicePerformanceTier()

  switch (tier) {
    case 'low':
      return Math.min(baseBlur * 0.5, 40)
    case 'medium':
      return Math.min(baseBlur * 0.75, 60)
    default:
      return baseBlur
  }
}
