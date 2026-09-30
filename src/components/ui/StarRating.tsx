import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  count?: number | string;
  showCount?: boolean;
  className?: string;
  starClassName?: string;
  size?: number;
}

export function StarRating({
  rating,
  count,
  showCount = true,
  className,
  starClassName,
  size = 16,
}: StarRatingProps) {
  return (
    <div className={cn('inline-flex items-center gap-1.5 select-none', className)}>
      <Star size={size} className={cn('fill-secondary-500 text-secondary-500', starClassName)} />
      <span className="text-sm font-semibold text-neutral-900">{rating.toFixed(1)}</span>
      {showCount && count !== undefined && (
        <span className="text-xs text-neutral-500">({count})</span>
      )}
    </div>
  );
}
