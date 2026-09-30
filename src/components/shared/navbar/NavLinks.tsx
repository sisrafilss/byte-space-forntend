import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface NavLinkItem {
  label: string;
  href: string;
  active?: boolean;
}

export const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
];

export function NavLinks({
  className = '',
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) {
  return (
    <nav className={cn('flex items-center gap-8 lg:gap-10', className)}>
      {DEFAULT_NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'text-base transition-colors duration-200',
            link.active ? 'font-medium text-white' : 'font-normal text-white/80 hover:text-white'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
