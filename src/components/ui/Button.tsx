import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm',
        secondary:
          'bg-secondary-500 text-neutral-950 font-semibold hover:bg-[#b8e600] active:bg-[#a5cf00] shadow-sm',
        dark: 'bg-neutral-950 text-white hover:bg-neutral-800 active:bg-neutral-900',
        outline:
          'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100',
        outlineDark:
          'border border-neutral-950 bg-transparent text-neutral-950 hover:bg-neutral-950 hover:text-white',
        ghost:
          'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 active:bg-neutral-200/80',
        white: 'bg-white text-neutral-950 hover:bg-neutral-100 active:bg-neutral-200 shadow-sm',
        pill: 'rounded-full border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950 hover:text-neutral-950',
        pillActive: 'rounded-full bg-neutral-950 text-white border border-neutral-950',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-full',
        md: 'h-11 px-6 text-base rounded-full',
        lg: 'h-13 px-8 text-lg rounded-full',
        pill: 'h-10 px-5 text-sm rounded-full',
        icon: 'h-10 w-10 rounded-full p-0 flex items-center justify-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  }
);

Button.displayName = 'Button';
