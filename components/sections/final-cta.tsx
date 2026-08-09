'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-purple/10 via-brand-gold/5 to-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-max px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
            Ready to Transform Your Business{' '}
            <span className="gradient-text">with AI?</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            Book a free strategy call with our AI experts. Let&apos;s explore how
            we can 10x your growth with intelligent automation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" showArrow href="#contact" icon={Calendar}>
              Get Your Free AI Audit
            </Button>
            <Button variant="secondary" size="xl" href="mailto:hello@growithai.com" icon={Mail}>
              Contact Sales
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <p className="flex items-center gap-1.5 text-sm text-text-muted">
              <Calendar className="h-4 w-4 text-brand-gold" />
              Limited: 3 free sessions this month
            </p>
            <p className="flex items-center gap-1.5 text-sm text-text-muted">
              <Mail className="h-4 w-4 text-brand-purple" />
              No commitment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
