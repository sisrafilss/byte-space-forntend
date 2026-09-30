import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <span className="font-satoshi text-[18px] font-normal text-[#003BE2]">Create an Account</span>
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
            className="font-satoshi h-[52px] w-full rounded-[12px] border border-[#CED0D3] bg-white px-6 text-[16px] text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none"
          />
        </div>

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
            className="font-satoshi inline-flex h-[46px] w-[114px] items-center justify-center rounded-full bg-[#D4FB20] text-[18px] font-medium text-neutral-950 shadow-sm transition-all duration-200 hover:bg-[#cbf801] active:scale-95"
          >
            Continue
          </button>
        </div>
      </form>

      {/* Switch Link */}
      <div className="mt-12 text-center">
        <span className="font-satoshi text-[16px] text-[#888888]">Already have an account? </span>
        <Link
          href="/login"
          className="font-satoshi text-[16px] font-medium text-[#003BE2] hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
