'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  index?: number;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={cn('group glass rounded-2xl p-8 hover:glass-hover transition-all', className)}
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </motion.div>
  );
}