import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={cn('flex max-w-3xl flex-col', alignClass, className)}>
      {badge && (
        <span
          className={cn(
            'mb-3 inline-block rounded-full px-3.5 py-1 text-sm font-medium',
            theme === 'dark'
              ? 'border border-white/20 bg-white/10 text-white'
              : 'bg-primary-50 text-primary-600 border-primary-100 border'
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={cn(
          'font-heading text-3xl leading-[1.2] font-semibold tracking-tight sm:text-4xl lg:text-[44px]',
          theme === 'dark' ? 'text-white' : 'text-neutral-950',
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl font-sans text-base leading-relaxed sm:text-lg',
            theme === 'dark' ? 'text-neutral-200' : 'text-neutral-500',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
