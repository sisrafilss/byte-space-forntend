import Link from 'next/link';

export function FooterLegalBar() {
  return (
    <>
      {/* Divider Line (Line 34:1297) */}
      <div className="mt-14 w-full border-t border-neutral-200 sm:mt-16 lg:mt-32.5" />

      {/* Copyright & Legal Links (Auto Layout Horizontal 34:1298) */}
      <div className="mt-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950">
          @ 2023 ByteSpace. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/privacy"
            className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-primary-800"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-satoshi text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-primary-800"
          >
            Terms of Service
          </Link>
          <button
            type="button"
            className="font-satoshi cursor-pointer text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-primary-800"
          >
            Cookies Settings
          </button>
        </div>
      </div>
    </>
  );
}
