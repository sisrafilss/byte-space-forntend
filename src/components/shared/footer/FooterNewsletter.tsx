'use client';

import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';
import React, { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail('');
  };

  return (
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
          onSubmit={handleSubscribe}
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
            className="font-satoshi inline-flex h-[46px] w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#D4FB20] text-[18px] font-medium text-neutral-950 shadow-sm transition-all duration-200 hover:bg-[#cbf801] active:scale-95 sm:w-[104px]"
          >
            Search
          </button>
        </form>

        {/* Disclaimer */}
        <p className="font-satoshi mt-6 text-[12px] leading-[19.2px] text-neutral-950">
          By subscribing, you agree to our{' '}
          <Link href="/privacy" className="transition-colors hover:text-[#003BE2] hover:underline">
            Privacy Policy
          </Link>{' '}
          and consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
}
