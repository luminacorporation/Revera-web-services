'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Bot,
  Code2,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Mic,
  Smartphone,
  Brain,
  Gauge,
  Search,
  ShoppingCart,
  BarChart3,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/Button';
import { unsplashImages } from '@/lib/utils';

const services = [
  {
    icon: PhoneCall,
    title: 'AI Receptionists',
    description:
      'A virtual receptionist that answers every call 24/7, books appointments, and never takes a sick day.',
    features: [
      '24/7 answering',
      'Appointment booking',
      'Google Calendar sync',
      'SMS reminders',
      'Call transfers',
      'Voice AI',
      'Missed-call recovery',
    ],
    href: '/ai-receptionists',
    image: unsplashImages.customerService,
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description:
      'Intelligent chatbots that engage visitors, answer questions, and convert them into customers.',
    features: [
      'Website chatbot',
      'FAQ handling',
      'Lead generation',
      'Customer support',
      'AI knowledge base',
    ],
    href: '/ai-chatbots',
    image: unsplashImages.aiChatbot,
  },
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'High-converting websites that load instantly, rank on Google, and turn visitors into bookings.',
    features: [
      'Lightning fast',
      'SEO optimised',
      'Mobile responsive',
      'Booking systems',
      'Ecommerce',
      'Premium design',
      'Analytics',
    ],
    href: '/web-development',
    image: unsplashImages.websiteDesign,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title={<>AI Solutions That <span className="gradient-text">Grow Your Business</span></>}
        subtitle="Three powerful services, designed to work together. Pick one or combine them all for maximum impact."
      />

      <section className="section-padding !pt-0 space-y-32">
        {services.map((service, idx) => (
          <div key={service.title} className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-primary text-sm font-medium">Service {idx + 1}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-white/60 mb-8 leading-relaxed max-w-lg">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="gradient" size="lg" asChild>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="rounded-2xl overflow-hidden glass relative">
                  <img src={service.image} alt={service.title} className="w-full h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))]/80 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Combined CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Combine All Three for <span className="gradient-text">Maximum Growth</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Our most successful clients use AI Receptionists, Chatbots, and a
              high-converting website together. The result? More bookings, less
              admin, and faster growth.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link href="/pricing">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}