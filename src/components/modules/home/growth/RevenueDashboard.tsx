export function RevenueDashboard() {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      {/* Total Revenue Card */}
      <div className="w-43.75 rounded-2xl bg-primary-800 px-3.5 py-3 shadow-xl sm:w-50 sm:px-4 sm:py-3.5 lg:w-56.25">
        <p className="font-satoshi text-[12px] font-medium text-neutral-50 sm:text-[14px]">
          Total Revenue
        </p>
        <p className="font-satoshi text-[9px] text-neutral-50/70 sm:mt-0.5 sm:text-[10px]">
          July 1-28
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
          <span className="font-poppins text-[18px] leading-none font-semibold text-neutral-50 sm:text-[22px]">
            $120.29
          </span>
          <span className="font-satoshi rounded-full bg-secondary-500 px-1.5 py-0.5 text-[9px] font-bold text-neutral-950 sm:px-2 sm:text-[10px]">
            +12$
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/25 sm:mt-3">
          <div className="h-full rounded-full bg-secondary-400" style={{ width: '56%' }} />
        </div>
      </div>

      {/* Year to Date Card */}
      <div className="ml-5 w-35 rounded-2xl bg-primary-800 px-3 py-2.5 shadow-xl sm:ml-7 sm:w-38.75 sm:px-4 sm:py-3 lg:w-43.75">
        <p className="font-satoshi text-[12px] font-medium text-neutral-50 sm:text-[14px]">
          Year to Date
        </p>
        <p className="font-satoshi text-[9px] text-neutral-50/70 sm:mt-0.5 sm:text-[10px]">2023</p>
        <p className="font-poppins mt-1 text-[18px] leading-none font-semibold text-neutral-50 sm:mt-2 sm:text-[22px]">
          $1,200.38
        </p>
        <span className="font-satoshi mt-1.5 inline-block rounded-full bg-secondary-500 px-1.5 py-0.5 text-[9px] font-bold text-neutral-950 sm:mt-2 sm:px-2 sm:text-[10px]">
          +12$
        </span>
      </div>
    </div>
  );
}
