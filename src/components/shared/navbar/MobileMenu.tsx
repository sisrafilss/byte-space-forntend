import { DEFAULT_NAV_LINKS } from './NavLinks';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-19 bottom-0 z-40 flex flex-col bg-primary-800 px-6 py-8 md:hidden">
      <nav className="flex flex-col gap-6">
        {DEFAULT_NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={cn(
              'text-xl transition-colors duration-200',
              link.active ? 'font-semibold text-white' : 'font-normal text-white/80'
            )}
          >
            {link.label}
          </Link>
        ))}

        <div className="my-2 h-px w-full bg-white/20" />

        <div className="flex flex-col gap-4">
          <Link
            href="/login"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full border border-white/40 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full bg-secondary-400 text-base font-semibold text-neutral-950 shadow-sm transition-transform active:scale-98"
          >
            Join Us
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
          <ShoppingBag size={16} />
          <span>Your cart is empty</span>
        </div>
      </nav>
    </div>
  );
}
