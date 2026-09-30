import Image from 'next/image';
import React from 'react';

export interface Course {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: number;
  level: string;
  studentsCount: string;
  price: string;
  period: string;
  category?: string;
}

const DEFAULT_AVATARS = [
  '/assets/images/Ellipse_13_266.png',
  '/assets/images/Ellipse_13_267.png',
  '/assets/images/Ellipse_13_268.png',
  '/assets/images/Ellipse_13_269.png',
];

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className = '' }: CourseCardProps) {
  return (
    <div
      className={`group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-xl ${className}`}
    >
      {/* Top Thumbnail with overlay pills */}
      <div className="relative aspect-341/195 w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 373px"
        />

        {/* Bottom Overlay Pills */}
        <div className="absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-1.5 sm:gap-2">
          <span className="font-satoshi rounded-full bg-neutral-50/80 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-neutral-600 shadow-2xs backdrop-blur-sm sm:px-3 sm:text-[12px]">
            {course.lessons}
          </span>
          <span className="font-satoshi rounded-full bg-neutral-50/80 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-neutral-600 shadow-2xs backdrop-blur-sm sm:px-3 sm:text-[12px]">
            {course.duration}
          </span>
          <span className="font-satoshi rounded-full bg-neutral-50/80 px-2.5 py-1 text-[11px] font-medium whitespace-nowrap text-neutral-600 shadow-2xs backdrop-blur-sm sm:px-3 sm:text-[12px]">
            {course.comments}
          </span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex flex-1 flex-col justify-between pt-4">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3
              className="font-poppins group-hover:text-primary-600 line-clamp-1 text-[18px] leading-6.5 font-semibold text-neutral-950 transition-colors sm:text-[20px] sm:leading-7"
              title={course.title}
            >
              {course.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1 pt-0.5">
              <span className="font-satoshi text-[17px] leading-none font-medium text-neutral-600 sm:text-[18px]">
                {course.rating.toFixed(1)}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-neutral-200"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>

          {/* Author */}
          <p className="font-satoshi mt-1 text-[12px] text-neutral-600">
            by <span className="font-medium text-primary-800">{course.author}</span>
          </p>
        </div>

        <div>
          {/* Level Badge + Avatar Stack */}
          <div className="mt-3.5 flex items-center justify-between pt-0.5">
            {/* Beginner Level Badge */}
            <div className="font-satoshi inline-flex items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-1.5 text-[12px] font-medium text-neutral-700">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-neutral-700"
                aria-hidden="true"
              >
                <rect x="3" y="14" width="4" height="6" rx="1" />
                <rect x="10" y="9" width="4" height="11" rx="1" />
                <rect x="17" y="4" width="4" height="16" rx="1" />
              </svg>
              <span>{course.level}</span>
            </div>

            {/* Avatars */}
            <div className="flex items-center -space-x-2">
              {DEFAULT_AVATARS.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-2xs"
                >
                  <Image
                    src={avatar}
                    alt="Enrolled student avatar"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              {/* Count Circle (e.g. 26+) */}
              <div className="font-satoshi flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-secondary-400 text-[12px] font-bold text-neutral-950 shadow-2xs">
                {course.studentsCount}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3.5 flex items-baseline gap-1">
            <span className="font-poppins text-[20px] leading-none font-bold text-primary-800">
              {course.price}
            </span>
            <span className="font-satoshi text-[12px] text-neutral-600">{course.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
