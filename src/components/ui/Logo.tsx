import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'white' | 'dark';
  className?: string;
}

export function Logo({ variant = 'white', className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5 select-none', className)}
      aria-label="ByteSpace Home"
    >
      {/* Lime Green Vector Mark */}
      <svg
        width="34"
        height="37"
        viewBox="0 0 58 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      >
        <path d="M21 21C21 9.40202 11.598 0 0 0V42C0 53.598 9.40202 63 21 63V21Z" fill="#D4FB20" />
        <path
          d="M36.75 21C48.348 21 57.75 30.402 57.75 42H42C30.402 42 21 32.598 21 21L36.75 21Z"
          fill="#D4FB20"
        />
        <path
          d="M36.75 63C48.348 63 57.75 53.598 57.75 42H42C30.402 42 21 51.402 21 63L36.75 63Z"
          fill="#D4FB20"
        />
      </svg>
      {/* Brand Text */}
      <span
        className={cn(
          'font-heading text-2xl font-bold tracking-tight',
          variant === 'white' ? 'text-white' : 'text-neutral-950'
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
