import { CREATOR_CHECKLIST } from '@/data';

export function CreatorChecklist() {
  return (
    <ul className="mt-6 flex flex-col gap-3.5 sm:mt-8 sm:gap-4">
      {CREATOR_CHECKLIST.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#003BE2"
            className="shrink-0 sm:h-[22px] sm:w-[22px]"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.2L5.8 12L7.2 10.6L10 13.4L16.8 6.6L18.2 8L10 16.2Z"
            />
          </svg>
          <span className="font-satoshi text-[15px] font-medium text-[#242528] sm:text-[18px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
