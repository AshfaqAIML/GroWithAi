'use client';

import { motion } from 'framer-motion';
import { TRUSTED_BY } from '@/lib/constants';
import {
  Building2,
  GraduationCap,
  Heart,
  Scale,
  ShoppingBag,
  Cpu,
  Home,
  BookOpen,
} from 'lucide-react';

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Education: GraduationCap,
  Hospitality: Building2,
  Healthcare: Heart,
  Legal: Scale,
  Retail: ShoppingBag,
  Technology: Cpu,
  'Real Estate': Home,
  Coaching: BookOpen,
};

const ITEMS = TRUSTED_BY.map((company) => ({
  ...company,
  Icon: industryIcons[company.industry] || Building2,
}));

export function TrustedBy() {
  return (
    <section className="py-14 border-y border-white/5 overflow-hidden" aria-label="Trusted by businesses">
      <motion.p
        className="text-center text-sm text-text-muted mb-10 tracking-widest uppercase font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Trusted by 200+ innovative businesses
      </motion.p>

      <div className="relative w-full overflow-hidden mask-fade-x" aria-hidden="true">
        <div className="marquee-track">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex flex-shrink-0 items-center gap-2.5 px-8 text-lg font-semibold text-text-muted/40 transition-colors hover:text-text-secondary"
            >
              <item.Icon className="h-6 w-6" />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
