import Link from 'next/link';

export function FooterLegalBar() {
  return (
    <>
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
            className="font-satoshi cursor-pointer text-[12px] leading-[19.2px] text-neutral-950 transition-colors hover:text-[#003BE2]"
          >
            Cookies Settings
          </button>
        </div>
      </div>
    </>
  );
}
