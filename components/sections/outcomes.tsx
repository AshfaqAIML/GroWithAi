'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  DollarSign,
  MinusCircle,
  Clock,
  Cpu,
  Smile,
  Rocket,
  BarChart,
} from 'lucide-react';

const OUTCOMES = [
  { label: 'Increase Leads', Icon: TrendingUp },
  { label: 'Increase Sales', Icon: DollarSign },
  { label: 'Reduce Costs', Icon: MinusCircle },
  { label: 'Save Time', Icon: Clock },
  { label: 'Automate Work', Icon: Cpu },
  { label: 'Improve Customer Experience', Icon: Smile },
  { label: 'Scale Faster', Icon: Rocket },
  { label: 'Grow Revenue', Icon: BarChart },
];

export function Outcomes() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/[0.03] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container-max px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Outcomes
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            We Don&apos;t Sell Services.{' '}
            <span className="gradient-text">We Sell Outcomes.</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Every engagement is engineered around measurable business results — not
            just technology. Here&apos;s what we deliver:
          </p>
        </motion.div>

        <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-4 max-w-4xl">
          {OUTCOMES.map((outcome, i) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-surface-card/80 backdrop-blur-sm px-6 py-4 transition-all duration-300 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/5 hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-transform group-hover:scale-110">
                <outcome.Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-text-primary">{outcome.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
