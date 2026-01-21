'use client'

import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { ArrowRight } from '../icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  showArrow?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', showArrow = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300',
          'hover:scale-[1.02] active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          variant === 'primary' &&
            'bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          variant === 'secondary' &&
            'border border-foreground/20 bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          variant === 'ghost' &&
            'text-muted hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
