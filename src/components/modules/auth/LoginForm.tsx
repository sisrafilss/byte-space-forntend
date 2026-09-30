'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function LoginForm() {
  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <span className="font-satoshi text-[18px] font-normal text-primary-800">Sign In</span>
      <h2 className="font-poppins mt-2 text-[32px] leading-tight font-semibold text-neutral-950 sm:text-[44px]">
        Welcome Back
      </h2>

      {/* Form Fields */}
      <form className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-satoshi text-[14px] font-medium text-neutral-950">Email</label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="font-satoshi h-13 w-full rounded-xl border border-neutral-200 bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-primary-800 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-satoshi text-[14px] font-medium text-neutral-950">Password</label>
          <input
            type="password"
            placeholder="********"
            className="font-satoshi h-13 w-full rounded-xl border border-neutral-200 bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-primary-800 focus:outline-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="font-satoshi inline-flex h-11.5 w-26 cursor-pointer items-center justify-center rounded-full bg-secondary-400 text-[18px] font-medium text-neutral-950 shadow-sm transition-colors duration-200 hover:bg-secondary-500 select-none"
          >
            Sign In
          </motion.button>
        </div>
      </form>

      {/* Social Divider */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="font-satoshi text-[18px] text-neutral-400">or</span>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      {/* Social Buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Sign in with Facebook"
          className="flex h-18 w-18 cursor-pointer items-center justify-center rounded-3xl border border-neutral-200 bg-white text-neutral-950 transition-colors hover:bg-neutral-50 select-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Sign in with Google"
          className="flex h-18 w-18 cursor-pointer items-center justify-center rounded-3xl border border-neutral-200 bg-white text-neutral-950 transition-colors hover:bg-neutral-50 select-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.98 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </motion.button>
      </div>

      {/* Switch Link */}
      <div className="mt-12 text-center">
        <span className="font-satoshi text-[16px] text-neutral-400">
          Don&apos;t have an account?{' '}
        </span>
        <Link
          href="/register"
          className="font-satoshi text-[16px] font-medium text-primary-800 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
