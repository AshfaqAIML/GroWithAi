'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-white/[0.01]">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Tailored AI for{' '}
            <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            We understand the nuances of your sector. Purpose-built AI solutions for
            the unique challenges of your industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-surface-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: getStaggerDelay(index, 0.08), duration: 0.5 }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={`${industry.title} — AI solutions by GroWithAI`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/40 to-transparent" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center shadow-lg shadow-brand-purple/30">
                  <span className="text-white text-xl font-bold">
                    {industry.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6 -mt-8 relative">
                <h3 className="font-semibold text-xl mb-2">{industry.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{industry.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {industry.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-purple hover:text-brand-gold transition-colors"
                >
                  Explore solutions
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don&apos;t see your industry?{' '}
          <Link href="#contact" className="text-brand-purple hover:underline">
            Contact us
          </Link>{' '}
          — we build custom solutions for any sector.
        </motion.p>
      </div>
    </section>
  );
}
