import Hero from '@/components/sections/Hero';
import Values from '@/components/sections/Values';
import Features from '@/components/sections/Features';
import ProgramsPreview from '@/components/sections/ProgramsPreview';
import Testimonial from '@/components/sections/Testimonial';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Values />
      <Features />
      <ProgramsPreview />
      <Testimonial />
      <CTASection />
    </>
  );
}
