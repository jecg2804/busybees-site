import Hero from '@/components/sections/Hero';
import Values from '@/components/sections/Values';
import Features from '@/components/sections/Features';
import ProgramsPreview from '@/components/sections/ProgramsPreview';
import Testimonial from '@/components/sections/Testimonial';
import CTASection from '@/components/sections/CTASection';
import WaveDivider from '@/components/svg/WaveDivider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveDivider from="warm" to="cream" />
      <Values />
      <WaveDivider from="cream" to="warm" />
      <Features />
      <WaveDivider from="warm" to="cream" />
      <ProgramsPreview />
      <WaveDivider from="cream" to="warm" />
      <Testimonial />
      <WaveDivider from="warm" to="cream" />
      <CTASection />
    </>
  );
}
