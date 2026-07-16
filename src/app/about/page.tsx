'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { unsplashImages } from '@/lib/utils';

const values = [
  { icon: Target, title: 'Results First', desc: 'Every solution is built to deliver measurable business outcomes.' },
  { icon: Heart, title: 'Customer Obsessed', desc: 'Your success is our success. We treat your business like our own.' },
  { icon: Zap, title: 'Relentless Innovation', desc: 'We stay ahead of AI advances so you always have the edge.' },
  { icon: Users, title: 'Local Focus', desc: 'Built for Australian businesses, by people who get it.' },
];

const team = [
  { name: 'Alex Chen', role: 'Founder & CEO', image: unsplashImages.happyOwner },
  { name: 'Sarah Mitchell', role: 'Head of AI', image: unsplashImages.customerService },
  { name: 'David Kumar', role: 'Lead Engineer', image: unsplashImages.laptopCoding },
  { name: 'Emma Wilson', role: 'Client Success', image: unsplashImages.team },
];

const milestones = [
  { year: '2021', text: 'REVERA founded in Sydney with a mission to democratise AI for local business.' },
  { year: '2022', text: 'Launched our first AI receptionist, serving 50+ businesses.' },
  { year: '2023', text: 'Expanded to chatbot and web development services.' },
  { year: '2024', text: 'Serving 500+ Australian businesses, saving millions of hours.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About REVERA"
        title={<>We Help Australian Businesses <span className="gradient-text">Thrive with AI</span></>}
        subtitle="Founded in Sydney, REVERA is on a mission to give every local business access to enterprise-grade AI automation."
      />

      {/* Story section */}
      <section className="section-padding !pt-0">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Born from a simple problem
            </h2>
            <p className="text-white/60 mb-4 leading-relaxed">
              Small businesses were losing customers to missed calls and slow
              responses. Enterprise AI was too expensive and complex. We built
              REVERA to change that.
            </p>
            <p className="text-white/60 mb-6 leading-relaxed">
              Today, our AI receptionists, chatbots, and websites serve hundreds of
              businesses across Australia — from barber shops to dental clinics —
              helping them grow while they sleep.
            </p>
            <div className="space-y-3">
              {['500+ businesses served', '2M+ hours saved', '98% satisfaction'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden glass">
              <img src={unsplashImages.modernOffice} alt="REVERA office" className="w-full h-[480px] object-cover" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6"
            >
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-white/60 text-sm">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 hover:glass-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </motion.div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-2xl font-bold gradient-text shrink-0 w-20">{m.year}</div>
                <div className="glass rounded-xl p-5 flex-1">
                  <p className="text-white/80 text-sm">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden hover:glass-hover transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to Join Our Mission?"
        subtitle="We're always looking for talented people who want to shape the future of AI for local business."
        primaryText="Get in Touch"
        primaryHref="/contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  );
}