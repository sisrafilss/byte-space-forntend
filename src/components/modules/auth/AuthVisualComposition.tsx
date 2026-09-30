import { Auth3DOrnaments } from './Auth3DOrnaments';
import { AuthCourseCardPreview } from './AuthCourseCardPreview';
import { AuthHappyStudentsCard } from './AuthHappyStudentsCard';

export function AuthVisualComposition() {
  return (
    <div className="relative h-[585px] w-[548px] select-none">
      {/* 3D Decorative Ornaments (Lime Torus, Yellow Pyramid, Frosted White Coil) */}
      <Auth3DOrnaments />

      {/* Overlapping Course Cards Preview */}
      <AuthCourseCardPreview />

      {/* Floating Happy Students Lime Card */}
      <AuthHappyStudentsCard />
    </div>
  );
}
