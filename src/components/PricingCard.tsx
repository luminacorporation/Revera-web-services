'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { type PricingPlan } from '@/lib/stripe';

interface PricingCardProps {
  plan: PricingPlan;
  index?: number;
}

export function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn(
        'relative glass rounded-3xl p-8 transition-all',
        plan.popular
          ? 'ring-2 ring-primary shadow-[0_0_60px_rgba(79,140,255,0.3)]'
          : 'hover:glass-hover'
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        {plan.description && (
          <p className="text-white/60 text-sm">{plan.description}</p>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold gradient-text">
            ${plan.price}
          </span>
          <span className="text-white/60 text-sm">/{plan.interval}</span>
        </div>
        <p className="text-white/40 text-xs mt-1 uppercase tracking-wide">
          {plan.currency}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={plan.popular ? 'gradient' : 'outline'}
        size="lg"
        className="w-full"
        onClick={() => {
          if (plan.stripePriceId) {
            // Handle checkout
            console.log('Checkout for', plan.stripePriceId);
          }
        }}
      >
        Get Started
      </Button>
    </motion.div>
  );
}