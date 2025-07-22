'use client'

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-500 text-white hover:bg-brand-600 hover:-translate-y-1 hover:scale-105 shadow-elev1 hover:shadow-elevGlow',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border border-brand-500 text-brand-500 bg-transparent hover:bg-brand-500 hover:text-white',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
        ghost: 'hover:bg-brand-500/10 hover:text-brand-500',
        link: 'text-brand-500 underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-r from-brand-500 to-accent text-white hover:from-brand-600 hover:to-accent/90 shadow-elevGlow',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    return (
      <Comp
        className={`${buttonVariants({ variant, size })} ${className || ''}`}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="spinner mr-2" />
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 