import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <span className="font-satoshi text-[18px] font-normal text-[#003BE2]">Sign In</span>
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
            className="font-satoshi h-[52px] w-full rounded-[12px] border border-[#CED0D3] bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-satoshi text-[14px] font-medium text-neutral-950">Password</label>
          <input
            type="password"
            placeholder="********"
            className="font-satoshi h-[52px] w-full rounded-[12px] border border-[#CED0D3] bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="font-satoshi inline-flex h-[46px] w-[104px] items-center justify-center rounded-full bg-[#D4FB20] text-[18px] font-medium text-neutral-950 shadow-sm transition-all duration-200 hover:bg-[#cbf801] active:scale-95"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Social Divider */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-[#D1D1D1]" />
        <span className="font-satoshi text-[18px] text-[#888888]">or</span>
        <div className="h-px flex-1 bg-[#D1D1D1]" />
      </div>

      {/* Social Buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white text-neutral-950 transition-colors hover:bg-neutral-50 active:scale-95"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white text-neutral-950 transition-colors hover:bg-neutral-50 active:scale-95"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
        </button>
      </div>

      {/* Switch Link */}
      <div className="mt-8 text-center">
        <span className="font-satoshi text-[16px] text-[#888888]">New user? </span>
        <Link
          href="/register"
          className="font-satoshi text-[16px] font-medium text-[#003BE2] hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
