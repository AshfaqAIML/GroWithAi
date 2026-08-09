'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Target,
  Download,
  Send,
  Info,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface SliderInputProps {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

function SliderInput({ label, value, display, min, max, step, onChange, minLabel, maxLabel, icon: Icon }: SliderInputProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm text-text-secondary flex items-center gap-1.5">
          <Icon className="h-4 w-4 text-brand-purple" />
          {label}
        </label>
        <span className="text-sm font-medium text-brand-purple">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:w-5
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-brand-purple
          [&::-webkit-slider-thumb]:shadow-lg
          [&::-webkit-slider-thumb]:cursor-pointer"
      />
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(1000000); // ₹10L default
  const [employees, setEmployees] = useState(20);
  const [supportTickets, setSupportTickets] = useState(200);
  const [leadVolume, setLeadVolume] = useState(500);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const results = useMemo(() => {
    const revenueIncrease = monthlyRevenue * 0.15; // 15% revenue boost from AI-led growth
    const leadRevenue = leadVolume * 250; // Estimated value of AI-captured leads
    const costSavings = (employees * 5000) + (supportTickets * 50); // Automation savings
    const timeSaved = employees * 10; // Hours saved per month
    const totalBenefit = revenueIncrease + leadRevenue + costSavings;
    const roi = ((totalBenefit) / (totalBenefit * 0.3)) * 100; // Based on typical implementation cost

    return {
      revenueIncrease: Math.round(revenueIncrease + leadRevenue),
      costSavings: Math.round(costSavings),
      timeSaved: Math.round(timeSaved),
      roi: Math.round(Math.min(roi, 500)), // Cap at 500% for realism
      annualImpact: Math.round(totalBenefit * 12),
    };
  }, [monthlyRevenue, employees, supportTickets, leadVolume]);

  const handleDownloadReport = async () => {
    if (!email) {
      toast.error('Please enter your email to receive the report.');
      return;
    }

    setIsSending(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Report sent to your email! Check your inbox.');
    setShowEmailCapture(false);
    setEmail('');
    setIsSending(false);
  };

  const formatINR = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const formatShort = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${(value / 1000).toFixed(0)}K`;
  };

  return (
    <section id="roi-calculator" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-gold/5 pointer-events-none" />

      <div className="container-max px-4 md:px-8 max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            AI Growth & ROI Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Calculate Your{' '}
            <span className="gradient-text">AI Growth Potential</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Adjust the sliders to estimate how much AI can save and grow your business.
            Results are estimates based on industry benchmarks.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            className="glass-card rounded-3xl p-6 md:p-8 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-gold" />
              Your Business Metrics
            </h3>

            <SliderInput
              label="Monthly Revenue"
              value={monthlyRevenue}
              display={formatINR(monthlyRevenue)}
              min={100000}
              max={10000000}
              step={100000}
              onChange={setMonthlyRevenue}
              minLabel="₹1L"
              maxLabel="₹1Cr"
              icon={DollarSign}
            />

            <SliderInput
              label="Number of Employees"
              value={employees}
              display={`${employees}`}
              min={5}
              max={500}
              step={5}
              onChange={setEmployees}
              minLabel="5"
              maxLabel="500"
              icon={Users}
            />

            <SliderInput
              label="Monthly Support Tickets"
              value={supportTickets}
              display={`${supportTickets}`}
              min={50}
              max={5000}
              step={50}
              onChange={setSupportTickets}
              minLabel="50"
              maxLabel="5,000"
              icon={Clock}
            />

            <SliderInput
              label="Monthly Lead Volume"
              value={leadVolume}
              display={`${leadVolume}`}
              min={50}
              max={10000}
              step={50}
              onChange={setLeadVolume}
              minLabel="50"
              maxLabel="10,000"
              icon={Target}
            />
          </motion.div>

          {/* Results */}
          <motion.div
            className="glass-card rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand-green" />
              Your Estimated Results
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass rounded-2xl p-4 text-center">
                <TrendingUp className="h-5 w-5 text-brand-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-green">
                  <AnimatedCounter
                    value={results.revenueIncrease >= 10000000 ? (results.revenueIncrease / 10000000).toFixed(1) : (results.revenueIncrease / 100000).toFixed(1)}
                    prefix="₹"
                    suffix={results.revenueIncrease >= 10000000 ? 'Cr' : 'L'}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">Revenue Increase /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <DollarSign className="h-5 w-5 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-gold">
                  <AnimatedCounter
                    value={results.costSavings >= 10000000 ? (results.costSavings / 10000000).toFixed(1) : (results.costSavings / 100000).toFixed(1)}
                    prefix="₹"
                    suffix={results.costSavings >= 10000000 ? 'Cr' : 'L'}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">Cost Savings /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <Clock className="h-5 w-5 text-brand-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-blue">
                  <AnimatedCounter value={results.timeSaved.toString()} suffix="hrs" />
                </div>
                <p className="text-xs text-text-muted mt-1">Time Saved /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <TrendingUp className="h-5 w-5 text-brand-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-purple">
                  <AnimatedCounter value={results.roi.toString()} suffix="%" />
                </div>
                <p className="text-xs text-text-muted mt-1">Estimated ROI</p>
              </div>
            </div>

            {/* Annual Impact highlight */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-purple/15 to-brand-gold/10 border border-brand-purple/20 p-5 mb-6 text-center">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Potential Annual Impact
              </p>
              <div className="text-3xl font-bold gradient-text">
                {formatShort(results.annualImpact)}
              </div>
              <p className="text-xs text-text-secondary mt-2">
                Combined revenue growth + cost savings, estimated per year
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!showEmailCapture ? (
                <motion.div key="cta">
                  <Button
                    variant="gold"
                    className="w-full"
                    showArrow
                    onClick={() => setShowEmailCapture(true)}
                  >
                    <Download className="h-4 w-4" />
                    Get Detailed Report
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-text-secondary">
                    Enter your email to receive a detailed AI growth report:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 h-11 rounded-xl glass px-4 text-sm focus:outline-none focus:border-brand-purple/50"
                    />
                    <Button
                      variant="primary"
                      onClick={handleDownloadReport}
                      isLoading={isSending}
                    >
                      <Send className="h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-xs text-text-muted flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 flex-shrink-0" />
              Estimates based on industry benchmarks. Actual results vary by business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
