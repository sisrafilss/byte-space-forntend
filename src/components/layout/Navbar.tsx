'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

export function Navbar() {
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

  const navLinks = [
    { label: 'Home', href: '/', active: true },
    { label: 'Courses', href: '#courses' },
    { label: 'Creators', href: '#creators' },
  ];

  return (
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
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-base transition-colors duration-200',
                link.active
                  ? 'font-medium text-white'
                  : 'font-normal text-white/80 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-95"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
          </button>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={16} />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="animate-in fade-in fixed inset-0 top-[72px] z-40 bg-black/60 backdrop-blur-sm duration-200 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col gap-6 border-t border-white/15 bg-[#003BE2] px-6 py-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'py-1 text-lg transition-colors',
                    link.active ? 'font-semibold text-white' : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="my-1 h-px w-full bg-white/20" />

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-full border border-white/30 py-2.5 text-center font-medium text-white transition-colors hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-secondary-500 w-full rounded-full py-2.5 text-center font-semibold text-neutral-950 shadow-sm transition-colors hover:bg-[#b8e600]"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
