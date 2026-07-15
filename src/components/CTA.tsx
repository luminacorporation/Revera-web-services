'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTA({
  title = 'Ready to Automate Your Business?',
  subtitle = 'Join hundreds of Australian businesses growing with REVERA\'s AI solutions. Book a free demo today.',
  primaryText = 'Book Demo',
  primaryHref = '/book-demo',
  secondaryText = 'View Pricing',
  secondaryHref = '/pricing',
}: CTAProps) {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="relative overflow-hidden rounded-3xl glass p-12 md:p-20 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-white/80 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Get Started Today
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {title}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href={primaryHref}>
                  {primaryText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href={secondaryHref}>{secondaryText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}