'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Bot,
  Code2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { DashboardPreview } from '@/components/DashboardPreview';
import { Button } from '@/components/ui/button';
import { unsplashImages } from '@/lib/utils';

const services = [
  {
    icon: PhoneCall,
    title: 'AI Receptionists',
    description:
      'Never miss a call again. Your AI answers 24/7, books appointments, and recovers missed calls automatically.',
    features: ['24/7 answering', 'Appointment booking', 'SMS reminders', 'Call transfers', 'Voice AI'],
    href: '/ai-receptionists',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description:
      'Engage visitors, answer questions, and capture leads with intelligent chatbots trained on your business.',
    features: ['Website chatbot', 'Lead generation', 'FAQ handling', 'Customer support', 'AI knowledge base'],
    href: '/ai-chatbots',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Lightning-fast, SEO-optimised websites designed to convert visitors into customers and bookings.',
    features: ['Lightning fast', 'SEO optimised', 'Mobile responsive', 'Booking systems', 'Analytics'],
    href: '/web-development',
  },
];

const benefits = [
  { icon: Zap, title: 'Instant Response', desc: 'Respond to every inquiry in under 2 seconds, 24/7.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and Australian data compliance.' },
  { icon: BarChart3, title: 'Real-time Analytics', desc: 'Track every call, chat, and conversion in your dashboard.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Grow with AI</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Three powerful solutions that work together to automate your business
              and delight your customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-4">
              Your Command Center
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Dashboard for <span className="gradient-text">Everything</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-12">
              Monitor calls, chats, bookings, and performance in real-time from
              anywhere.
            </p>
          </motion.div>

          <DashboardPreview />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for <span className="gradient-text">Australian Businesses</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We understand the unique needs of local businesses. From barber
                shops to dental clinics, our AI solutions are tailored to your
                industry and your customers.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="gradient" size="lg" className="mt-8" asChild>
                <Link href="/services">
                  Explore All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass">
                <img
                  src={unsplashImages.businessMeeting}
                  alt="Australian business meeting"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))] via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-white font-bold text-xl">98%</div>
                    <div className="text-white/60 text-xs">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}