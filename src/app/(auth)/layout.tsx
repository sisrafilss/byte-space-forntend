'use client';

import { AuthVisualComposition } from '@/components/auth/AuthVisualComposition';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRegister = pathname?.includes('/register');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary-800 text-white">
      {/* 1. Background Grid: 120px x 120px white lines at 12% opacity (matching Figma Group 4) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
        aria-hidden="true"
      />

      {/* Main Responsive Container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-360 flex-col justify-between px-4 py-6 sm:px-8 sm:py-8 lg:px-30.5 lg:py-15">
        {/* Top Header: Lime "b" Mark */}
        <header className="w-full">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 select-none"
            aria-label="ByteSpace Home"
          >
            <svg
              width="36"
              height="38"
              viewBox="0 0 58 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200 group-hover:scale-105"
            >
              <path
                d="M21 21C21 9.40202 11.598 0 0 0V42C0 53.598 9.40202 63 21 63V21Z"
                className="fill-secondary-400"
              />
              <path
                d="M36.75 21C48.348 21 57.75 30.402 57.75 42H42C30.402 42 21 32.598 21 21L36.75 21Z"
                className="fill-secondary-400"
              />
              <path
                d="M36.75 63C48.348 63 57.75 53.598 57.75 42H42C30.402 42 21 51.402 21 63L36.75 63Z"
                className="fill-secondary-400"
              />
            </svg>
          </Link>
        </header>

        {/* Middle Section: Left Content + Right Card */}
        <div className="my-auto flex flex-1 flex-col items-center justify-between gap-10 py-6 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column: Heading, Subtitle & 3D Art Composition */}
          <div className="flex w-full max-w-137 flex-col">
            <div className="max-w-118.75">
              <h1 className="font-poppins text-2xl font-semibold text-white sm:text-3xl lg:text-[24px] lg:leading-8">
                {isRegister ? 'Sign up and come in' : 'Sign in with ease'}
              </h1>
              <p className="font-satoshi mt-3 text-[15px] leading-relaxed font-normal text-white/80 sm:text-[16px] lg:leading-[25.6px]">
                {isRegister
                  ? 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'
                  : 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'}
              </p>
            </div>

            {/* Floating Visual Art (Desktop only / hidden on mobile for clean UX) */}
            <div className="relative mt-8 hidden lg:block">
              <AuthVisualComposition />
            </div>
          </div>

          {/* Right Column: White Card Container (Figma Register_Frame: w=579px) */}
          <div className="w-full max-w-144.75 shrink-0">
            <div className="w-full rounded-4xl bg-white p-6 text-neutral-950 shadow-2xl sm:rounded-[40px] sm:p-10 lg:p-12">
              {children}
            </div>
          </div>
        </div>

        {/* Footer spacer to maintain balance */}
        <div className="hidden h-6 lg:block" />
      </div>
    </div>
  );
}
