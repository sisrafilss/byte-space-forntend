import { NotFoundSection } from '@/components/modules/notFound';
import { PublicFooter, PublicNavbar } from '@/components/shared';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white font-sans text-neutral-950">
      {/* Top Header & 404 Hero Area with Figma Brand Blue Background & 120px Grid Overlay */}
      <div className="relative flex min-h-[calc(100vh-525px)] flex-col bg-primary-800 lg:min-h-[957px]">
        {/* Figma 120px Grid Background Overlay (Group 4 in Figma: 120px x 120px squares, stroke 2px @ 12-18% opacity) */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '120px 120px',
            backgroundPosition: 'center top',
          }}
          aria-hidden="true"
        />

        {/* Public Navigation Bar */}
        <PublicNavbar />

        {/* 404 Hero Section */}
        <NotFoundSection />
      </div>

      {/* Public Footer */}
      <PublicFooter />
    </main>
  );
}
