'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { PricingCard } from '@/components/PricingCard';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { pricingPlans } from '@/lib/stripe';

const faqs = [
  { q: 'Are there any setup fees?', a: 'No. Every plan includes free setup and onboarding.' },
  { q: 'Can I change plans later?', a: 'Yes, upgrade or downgrade anytime — changes are prorated.' },
  { q: 'What if I\'m not satisfied?', a: 'We offer a 30-day money-back guarantee. No questions asked.' },
  { q: 'Do you offer custom plans?', a: 'Yes, our Enterprise plan is fully customisable to your needs.' },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Pricing"
        title={<>Simple, Transparent <span className="gradient-text">Pricing</span></>}
        subtitle="No lock-in contracts. Month-to-month plans that scale with your business."
      />

      <section className="section-padding !pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 text-sm mt-10"
          >
            All prices in AUD and exclude GST. Need something custom?{' '}
            <Link href="/contact" className="text-primary hover:underline">
              Talk to us
            </Link>
            .
          </motion.p>
        </div>
      </section>

      {/* Comparison / FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {faq.q}
                </h3>
                <p className="text-white/60 text-sm pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Start Growing Today"
        subtitle="Join hundreds of Australian businesses already using REVERA to automate and grow."
        primaryText="Book Demo"
        primaryHref="/book-demo"
        secondaryText="Contact Sales"
        secondaryHref="/contact"
      />
    </>
  );
}