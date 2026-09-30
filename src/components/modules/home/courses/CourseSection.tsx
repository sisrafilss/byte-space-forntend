'use client';

import { Container, CourseCard, SectionHeading } from '@/components/ui';
import { COURSES_DATA } from '@/data';
import { useState } from 'react';
import { CourseFilterTabs } from './CourseFilterTabs';

export function CourseSection() {
  const [activeTab, setActiveTab] = useState('Featured');

  const displayCourses =
    activeTab === 'Featured'
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === activeTab);

  return (
    <section id="courses" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title={
            <>
              Discover Your Passion, <br className="hidden sm:inline" />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="max-w-230"
          titleClassName="text-neutral-950 tracking-[-0.01em]"
          descriptionClassName="max-w-215 text-neutral-600"
        />

        {/* Filter Tabs Component */}
        <CourseFilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

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
