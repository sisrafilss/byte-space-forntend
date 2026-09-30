'use client';

import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';
import React, { useState } from 'react';

const FOOTER_COLUMNS = [
  {
    id: 'browse-col-1',
    links: [
      { label: 'Featured Courses', href: '#courses' },
      { label: 'Featured Categories', href: '#categories' },
      { label: 'Business', href: '#courses' },
      { label: 'IT', href: '#courses' },
      { label: 'Design', href: '#courses' },
    ],
  },
  {
    id: 'browse-col-2',
    links: [
      { label: 'Development', href: '#courses' },
      { label: 'Marketing', href: '#courses' },
      { label: 'Photography', href: '#courses' },
      { label: 'Finance', href: '#courses' },
      { label: 'Sport', href: '#courses' },
    ],
  },
  {
    id: 'platform-col',
    links: [
      { label: 'Become a Creator', href: '#creator' },
      { label: 'Affiliate Program', href: '#affiliate' },
      { label: 'Contact', href: '#contact' },
      { label: 'Help', href: '#help' },
      { label: 'About', href: '#about' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Newsletter subscribe action
    setEmail('');
  };

  return (
    <footer className="w-full border-t border-[#CED0D3] bg-white">
      {/* Content Frame (Figma Frame 34:1257: w=1200px) */}
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12 lg:px-0 lg:pt-[71px] lg:pb-[48px]">
        {/* Top Section: Newsletter on Left, Navigation Links on Right */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-[92px]">
          {/* Left Column: Brand & Newsletter (Auto Layout Vertical 34:1259) */}
          <div className="flex w-full max-w-[504px] flex-col">
            {/* Logo & Tagline */}
            <div className="flex flex-col gap-4">
              <Logo variant="dark" />
              <p className="font-satoshi text-[14px] leading-[22.4px] text-neutral-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            {/* Newsletter Input + Button Form */}
            <div className="mt-8 sm:mt-10 lg:mt-[45px]">
              <form
                onSubmit={handleSearch}
                className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="relative w-full sm:w-[376px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="font-satoshi h-[52px] w-full rounded-full border border-[#CED0D3] bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-500 focus:border-[#003BE2] focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="font-satoshi inline-flex h-[46px] w-full shrink-0 items-center justify-center rounded-full bg-[#D4FB20] text-[18px] font-medium text-neutral-950 shadow-sm transition-all duration-200 hover:bg-[#cbf801] active:scale-95 sm:w-[104px]"
                >
                  Search
                </button>
              </form>

              {/* Disclaimer */}
              <p className="font-satoshi mt-6 text-[12px] leading-[19.2px] text-neutral-950">
                By subscribing, you agree to our{' '}
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-[#003BE2] hover:underline"
                >
                  Privacy Policy
                </Link>{' '}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Navigation Links (Auto Layout Horizontal 34:1272: 3 columns, gap=40px, top aligned at y=7719: +48px from top) */}
          <div className="grid shrink-0 grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-[40px] lg:pt-[48px]">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.id} className="flex flex-col space-y-4">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-satoshi text-[14px] leading-[22.4px] text-neutral-950 transition-colors hover:text-[#003BE2]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line (Line 34:1297) */}
        <div className="mt-14 w-full border-t border-[#CED0D3] sm:mt-16 lg:mt-[130px]" />

        {/* Copyright & Legal Links (Auto Layout Horizontal 34:1298) */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-[#003BE2]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-[#003BE2]"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-[#003BE2]"
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
