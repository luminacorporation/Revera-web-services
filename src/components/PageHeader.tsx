'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 section-padding !py-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}