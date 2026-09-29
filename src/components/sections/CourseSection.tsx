'use client';

import { Container, Course, CourseCard, SectionHeading } from '@/components/ui';
import { useState } from 'react';

export const COURSES_DATA: Course[] = [
  {
    id: 'course-1',
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_13_250.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'UI/UX Design',
  },
  {
    id: 'course-2',
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_33_519.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'Graphic Design',
  },
  {
    id: 'course-3',
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_33_552.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'Data Science',
  },
  {
    id: 'course-4',
    title: 'Balancing Productivity and Self-Care',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_33_585.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'Productivity',
  },
  {
    id: 'course-5',
    title: 'Mastering Money Management',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_33_616.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'Freelance & Entrepreneurship',
  },
  {
    id: 'course-6',
    title: 'From Idea to Startup Success',
    author: 'purepearl studio',
    thumbnail: '/assets/images/Frame_33_647.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: 4.5,
    level: 'Beginner',
    studentsCount: '26+',
    price: '$25',
    period: '/lifetime',
    category: 'Freelance & Entrepreneurship',
  },
];

const CATEGORY_ROWS = [
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
];

const ALL_CATEGORIES = [...CATEGORY_ROWS[0], ...CATEGORY_ROWS[1], ...CATEGORY_ROWS[2]];

export function CourseSection() {
  const [activeTab, setActiveTab] = useState<string>('Featured');
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  // Filter courses based on active category
  const filteredCourses =
    activeTab === 'Featured'
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === activeTab);

  // If no courses match the selected specific filter, fallback gracefully to all courses
  const displayCourses = filteredCourses.length > 0 ? filteredCourses : COURSES_DATA;

  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:inline" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="max-w-[920px]"
          titleClassName="text-[#0C0C0D] tracking-[-0.01em]"
          descriptionClassName="max-w-[860px] text-[#4F4F4F]"
        />

        {/* Filter Tabs Container */}
        {/* Desktop View: 3 rows matching Figma */}
        <div className="mt-10 hidden flex-col items-center gap-3 lg:flex">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORY_ROWS[0].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
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
                onClick={() => setActiveTab(cat)}
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
                onClick={() => setActiveTab(cat)}
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
              onClick={() => setActiveTab('Featured')}
              className="font-satoshi cursor-pointer px-3 py-2 text-[15px] font-medium text-[#003BE2] transition-colors hover:underline"
            >
              + More
            </button>
          </div>
        </div>

        {/* Mobile / Tablet View: Responsive pill cloud / overflow */}
        <div className="mt-8 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(showAllMobile ? ALL_CATEGORIES : ALL_CATEGORIES.slice(0, 9)).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
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

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {displayCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
