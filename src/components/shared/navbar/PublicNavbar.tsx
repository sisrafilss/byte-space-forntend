'use client';

import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { NavLinks } from './NavLinks';

export function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-[#0445FF]/95 py-3.5 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-5 sm:py-6'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Left: ByteSpace Logo */}
          <Logo variant="white" />

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex">
            <NavLinks />
          </div>

          {/* Right: Auth & Cart Actions (Desktop) */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/login"
              className="text-base font-normal text-white/90 transition-colors duration-200 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-base font-normal text-white/90 transition-colors duration-200 hover:text-white"
            >
              Join Us
            </Link>

            {/* Cart / Shopping Bag Icon */}
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-95"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
            </button>
          </div>

          {/* Mobile Hamburger & Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white hover:bg-white/10 active:scale-95"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
