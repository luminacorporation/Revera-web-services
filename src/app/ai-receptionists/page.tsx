'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Calendar,
  MessageSquare,
  Bell,
  CheckCircle2,
  Bot,
  Mic,
  Clock,
  ArrowRight,
  PhoneCall,
  Smartphone,
  Users,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Timeline } from '@/components/Timeline';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/Button';
import { unsplashImages } from '@/lib/utils';

const features = [
  { icon: Clock, title: '24/7 Answering', desc: 'Never miss a call, even at 3am or on public holidays.' },
  { icon: Calendar, title: 'Appointment Booking', desc: 'Checks live availability and books directly into your calendar.' },
  { icon: MessageSquare, title: 'SMS Reminders', desc: 'Automatic reminders reduce no-shows by up to 40%.' },
  { icon: PhoneCall, title: 'Call Transfers', desc: 'Escalates urgent calls to you instantly when needed.' },
  { icon: Mic, title: 'Natural Voice AI', desc: 'Speaks naturally — customers often don\'t realise it\'s AI.' },
  { icon: Smartphone, title: 'Missed-Call Recovery', desc: 'Instantly texts and emails to recover lost opportunities.' },
];

const industries = [
  { name: 'Barber Shops', image: unsplashImages.barberShop },
  { name: 'Dental Clinics', image: unsplashImages.dentist },
  { name: 'Electricians', image: unsplashImages.electrician },
  { name: 'Restaurants', image: unsplashImages.restaurant },
  { name: 'Mechanics', image: unsplashImages.mechanic },
  { name: 'Tradies', image: unsplashImages.tradie },
];

export default function AIReceptionistsPage() {
  return (
    <>
      <PageHeader
        badge="AI Receptionists"
        title={<>Never Miss Another <span className="gradient-text">Call Again</span></>}
        subtitle="Your AI receptionist answers every call, books appointments, and recovers missed opportunities — 24/7, 365 days a year."
      />

      {/* Hero image */}
      <section className="section-padding !pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden glass"
          >
            <img src={unsplashImages.customerService} alt="AI Receptionist" className="w-full h-[400px] md:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))]/90 via-[rgb(var(--background))]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">REVERA AI</div>
                  <div className="text-white/60 text-sm">On a call · 0:42</div>
                </div>
              </div>
              <p className="text-white/90 text-lg max-w-xl">
                &ldquo;Thanks for calling Mitchell Barber Co. I can book you in for Tuesday at 2pm, does that work?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Call to <span className="gradient-text">Calendar</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A seamless flow that turns every incoming call into a confirmed
              appointment — automatically.
            </p>
          </motion.div>

          <Timeline />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Packed with <span className="gradient-text">Features</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 hover:glass-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From trades to healthcare, our AI adapts to your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img src={industry.image} alt={industry.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))]/90 to-transparent flex items-end p-5">
                  <span className="text-white font-semibold">{industry.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Stop Losing Calls Today"
        subtitle="Set up your AI receptionist in days, not months. Start capturing every opportunity."
        primaryText="Book Demo"
        primaryHref="/book-demo"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}