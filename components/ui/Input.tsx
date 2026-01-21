import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-all duration-300',
            'placeholder:text-muted',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
            error
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
              : 'border-foreground/20 focus:border-accent',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
