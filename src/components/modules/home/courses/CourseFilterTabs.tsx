'use client';

import { ALL_CATEGORIES, CATEGORY_ROWS } from '@/data';
import { useState } from 'react';

interface CourseFilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CourseFilterTabs({ activeTab, onTabChange }: CourseFilterTabsProps) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <>
      {/* Desktop View: 3 rows matching Figma */}
      <div className="mt-10 hidden flex-col items-center gap-3 lg:flex">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORY_ROWS[0].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onTabChange(cat)}
              className={`font-satoshi cursor-pointer rounded-full px-4 py-2.5 text-[15px] font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#D4FB20] text-[#0C0C0D] shadow-xs'
                  : 'bg-[#F5F5F6] text-[#0C0C0D] hover:bg-[#EBECEE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORY_ROWS[1].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onTabChange(cat)}
              className={`font-satoshi cursor-pointer rounded-full px-4 py-2.5 text-[15px] font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#D4FB20] text-[#0C0C0D] shadow-xs'
                  : 'bg-[#F5F5F6] text-[#0C0C0D] hover:bg-[#EBECEE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORY_ROWS[2].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onTabChange(cat)}
              className={`font-satoshi cursor-pointer rounded-full px-4 py-2.5 text-[15px] font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#D4FB20] text-[#0C0C0D] shadow-xs'
                  : 'bg-[#F5F5F6] text-[#0C0C0D] hover:bg-[#EBECEE]'
              }`}
            >
              {cat}
            </button>
          ))}
          {/* + More Button */}
          <button
            type="button"
            onClick={() => onTabChange('Featured')}
            className="font-satoshi cursor-pointer px-3 py-2 text-[15px] font-medium text-[#003BE2] transition-colors hover:underline"
          >
            + More
          </button>
        </div>
      </div>

      {/* Mobile / Tablet View: Responsive pill cloud */}
      <div className="mt-8 lg:hidden">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(showAllMobile ? ALL_CATEGORIES : ALL_CATEGORIES.slice(0, 9)).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onTabChange(cat)}
              className={`font-satoshi rounded-full px-3.5 py-2 text-[14px] font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-[#D4FB20] text-[#0C0C0D] shadow-xs'
                  : 'bg-[#F5F5F6] text-[#0C0C0D] active:bg-[#EBECEE]'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="font-satoshi cursor-pointer px-2.5 py-1.5 text-[14px] font-medium text-[#003BE2] hover:underline"
          >
            {showAllMobile ? 'Show Less' : '+ More'}
          </button>
        </div>
      </div>
    </>
  );
}
