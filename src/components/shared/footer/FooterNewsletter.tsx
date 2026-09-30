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
    <div className="flex w-full max-w-126 flex-col">
      {/* Logo & Tagline */}
      <div className="flex flex-col gap-4">
        <Logo variant="dark" />
        <p className="font-satoshi text-[14px] leading-[22.4px] text-neutral-950">
          Stay Up to date with our latest features and releases by joining our newsletter.
        </p>
      </div>

      {/* Newsletter Input + Button Form */}
      <div className="mt-8 sm:mt-10 lg:mt-11.25">
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="relative w-full sm:w-94">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="font-satoshi h-13 w-full rounded-full border border-neutral-200 bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-500 focus:border-primary-800 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="font-satoshi inline-flex h-11.5 w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-secondary-400 text-[18px] font-medium text-neutral-950 shadow-sm transition-all duration-200 hover:bg-secondary-500 active:scale-95 sm:w-26"
          >
            Search
          </button>
        </form>

        {/* Disclaimer */}
        <p className="font-satoshi mt-6 text-[12px] leading-[19.2px] text-neutral-950">
          By subscribing, you agree to our{' '}
          <Link href="/privacy" className="transition-colors hover:text-primary-800 hover:underline">
            Privacy Policy
          </Link>{' '}
          and consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
}
