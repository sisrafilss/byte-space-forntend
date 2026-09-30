export function LearningProgressCard() {
  return (
    <div className="w-36.25 rounded-2xl border border-neutral-100 bg-white p-3 shadow-xl sm:w-46.25 sm:p-4 sm:shadow-2xl lg:w-52.5">
      <p className="font-satoshi text-[11px] font-medium text-neutral-950 sm:text-[13px]">
        Learning Progress
      </p>
      <p className="font-poppins mt-0.5 text-[32px] leading-none font-semibold text-neutral-950 sm:mt-1 sm:text-[44px] lg:text-[48px]">
        55%
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-50 sm:mt-3 sm:h-2">
        <div className="h-full rounded-full bg-secondary-400" style={{ width: '55%' }} />
      </div>
    </div>
  );
}
