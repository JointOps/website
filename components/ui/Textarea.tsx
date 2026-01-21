import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-all duration-300',
            'placeholder:text-muted',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
            'min-h-[150px] resize-y',
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

Textarea.displayName = 'Textarea'
