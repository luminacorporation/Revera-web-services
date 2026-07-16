'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Gauge,
  Search,
  Smartphone,
  Calendar,
  ShoppingCart,
  Palette,
  BarChart3,
  ArrowRight,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { unsplashImages } from '@/lib/utils';

const portfolio = [
  { name: 'Bella Vista Restaurant', category: 'Hospitality', image: unsplashImages.restaurant, metrics: '+180% bookings' },
  { name: 'Mitchell Barber Co.', category: 'Retail', image: unsplashImages.barberShop, metrics: '+95% conversions' },
  { name: 'Thompson Electrical', category: 'Trades', image: unsplashImages.electrician, metrics: '+140% leads' },
  { name: 'Sydney Dental Care', category: 'Healthcare', image: unsplashImages.dentist, metrics: '+210% appointments' },
  { name: 'Apex Mechanics', category: 'Automotive', image: unsplashImages.mechanic, metrics: '+120% quotes' },
  { name: 'Coastal Tradies', category: 'Construction', image: unsplashImages.tradie, metrics: '+160% inquiries' },
];

const features = [
  { icon: Gauge, title: 'Lightning Fast', desc: 'Sub-second load times with edge caching worldwide.' },
  { icon: Search, title: 'SEO Optimised', desc: 'Built to rank on Google from day one.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Flawless on every screen size and device.' },
  { icon: Calendar, title: 'Booking Systems', desc: 'Native scheduling that syncs to your calendar.' },
  { icon: ShoppingCart, title: 'Ecommerce', desc: 'Sell products and services with secure checkout.' },
  { icon: Palette, title: 'Premium Design', desc: 'Enterprise-grade design that builds trust.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track visitors, conversions, and revenue.' },
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable, future-proof builds.' },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHeader
        badge="Web Development"
        title={<>Websites That <span className="gradient-text">Convert</span></>}
        subtitle="Lightning-fast, SEO-optimised websites designed to turn visitors into customers and bookings."
      />

      {/* Features grid */}
      <section className="section-padding !pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 hover:glass-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-white/60 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Beautiful, high-performing websites built for Australian businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden hover:glass-hover transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))]/90 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-white text-xs font-medium">
                    {project.metrics}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-primary text-xs font-medium mb-1">{project.category}</div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{project.name}</h3>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn your business, goals, and customers.' },
              { step: '02', title: 'Design', desc: 'Premium mockups tailored to your brand.' },
              { step: '03', title: 'Build', desc: 'Fast, SEO-optimised development with your feedback.' },
              { step: '04', title: 'Launch & Grow', desc: 'Go live, then optimise for conversions continuously.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-6"
              >
                <span className="text-3xl font-bold gradient-text shrink-0 w-16">{item.step}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready for a Website That Works?"
        subtitle="Get a high-converting website that grows your business around the clock."
        primaryText="Book Demo"
        primaryHref="/book-demo"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}