import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Throttle function to limit execution frequency
 * @param fn Function to throttle
 * @param ms Minimum time between calls (default 16ms = ~60fps)
 */
export const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  ms = 16
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const now = Date.now()
    const timeSinceLastCall = now - lastCall

    if (timeSinceLastCall >= ms) {
      lastCall = now
      fn(...args)
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now()
        timeoutId = null
        fn(...args)
      }, ms - timeSinceLastCall)
    }
  }
}
