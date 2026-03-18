import { getLocale } from 'next-intl/server';
import { createClient } from '@/lib/supabase/server';
import { t } from '@/lib/utils/format';
import type { Testimonial as TestimonialType, Locale } from '@/lib/types/database';

export default async function Testimonial() {
  const locale = (await getLocale()) as Locale;

  const supabase = await createClient();
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .limit(1)
    .single();

  const testimonial = data as TestimonialType | null;

  if (!testimonial) return null;

  return (
    <section className="bg-warm">
      <div className="max-w-[700px] mx-auto px-6 py-16 md:py-20">
        <blockquote className="border-l-[3px] border-honey pl-6 md:pl-8">
          <p className="text-[19px] md:text-[20px] italic text-text leading-[1.7]">
            &ldquo;{t(testimonial, 'quote', locale)}&rdquo;
          </p>
          <footer className="mt-5">
            <span className="font-medium text-dark">
              {testimonial.author_name}
            </span>
            <span className="block text-sm text-text-faint mt-0.5">
              {t(testimonial, 'author_role', locale)}
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
