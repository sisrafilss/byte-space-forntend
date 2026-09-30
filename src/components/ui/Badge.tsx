import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-800',
    primary: 'bg-primary-50 text-primary-600 border border-primary-200',
    secondary: 'bg-secondary-100 text-neutral-900 border border-secondary-300',
    neutral: 'bg-neutral-200/70 text-neutral-700',
    outline: 'border border-neutral-300 text-neutral-700 bg-white',
  }[variant];

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3.5 py-1',
  }[size];

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium select-none',
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
