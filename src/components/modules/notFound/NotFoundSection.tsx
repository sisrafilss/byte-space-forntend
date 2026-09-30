import { Container } from '@/components/ui/Container';
import { NotFoundContent } from './NotFoundContent';

export function NotFoundSection() {
  return (
    <section className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-hidden bg-transparent pt-6 pb-12 text-white select-none sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24">
      {/* Main Content Container */}
      <Container className="relative z-10 flex flex-col items-center justify-center">
        <NotFoundContent />
      </Container>
    </section>
  );
}
