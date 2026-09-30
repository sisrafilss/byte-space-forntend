'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function RegisterForm() {
  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <span className="font-satoshi text-[18px] font-normal text-primary-800">Create an Account</span>
      <h2 className="font-poppins mt-2 text-[32px] leading-tight font-semibold text-neutral-950 sm:text-[44px]">
        Welcome to ByteSpace
      </h2>

      {/* Form Fields */}
      <form className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-satoshi text-[14px] font-medium text-neutral-950">Full Name</label>
          <input
            type="text"
            placeholder="Jamie Davis"
            className="font-satoshi h-13 w-full rounded-xl border border-neutral-200 bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-primary-800 focus:outline-none"
          />
        </div>

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
            className="font-satoshi inline-flex h-11.5 w-28.5 cursor-pointer items-center justify-center rounded-full bg-secondary-400 text-[18px] font-medium text-neutral-950 shadow-sm transition-colors duration-200 hover:bg-secondary-500 select-none"
          >
            Continue
          </motion.button>
        </div>
      </form>

      {/* Switch Link */}
      <div className="mt-12 text-center">
        <span className="font-satoshi text-[16px] text-neutral-400">Already have an account? </span>
        <Link
          href="/login"
          className="font-satoshi text-[16px] font-medium text-primary-800 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
