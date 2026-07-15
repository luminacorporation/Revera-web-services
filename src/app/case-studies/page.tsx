'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/Button';
import { unsplashImages } from '@/lib/utils';

const caseStudies = [
  {
    company: 'Mitchell Barber Co.',
    industry: 'Barber Shop',
    image: unsplashImages.barberShop,
    problem:
      'Missing 15+ calls per week during busy hours. Customers gave up and went to competitors. No online booking system.',
    solution:
      'Deployed a 24/7 AI receptionist integrated with their calendar, plus a conversion-optimised website with online booking.',
    results: [
      { metric: '+180%', label: 'Bookings' },
      { metric: '0', label: 'Missed calls' },
      { metric: '40hrs', label: 'Saved/month' },
    ],
    quote: 'REVERA gave us our time back. The AI books clients while we cut hair.',
    person: 'Sarah Mitchell, Owner',
  },
  {
    company: 'Thompson Electrical',
    industry: 'Electrician',
    image: unsplashImages.electrician,
    problem:
      'Spending hours answering the same questions. Leads slipping through after hours. No way to qualify urgent vs non-urgent jobs.',
    solution:
      'Launched an AI chatbot for instant FAQs and lead capture, plus AI receptionist for after-hours calls with smart escalation.',
    results: [
      { metric: '+140%', label: 'Qualified leads' },
      { metric: '2 sec', label: 'Response time' },
      { metric: '95%', label: 'Calls answered' },
    ],
    quote: 'Our team finally focuses on jobs instead of the phone. Revenue is up.',
    person: 'James Thompson, Director',
  },
  {
    company: 'Bella Vista Restaurant',
    industry: 'Hospitality',
    image: unsplashImages.restaurant,
    problem:
      'Phone reservations overwhelmed staff during service. Website wasn\'t converting visitors into bookings.',
    solution:
      'Built a premium website with integrated reservations, plus an AI chatbot handling FAQs and table bookings.',
    results: [
      { metric: '+210%', label: 'Reservations' },
      { metric: '3.2x', label: 'Site conversions' },
      { metric: '-50%', label: 'No-shows' },
    ],
    quote: 'The new site and AI together transformed our front-of-house completely.',
    person: 'Maria Santos, Owner',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        badge="Case Studies"
        title={<>Real Results for <span className="gradient-text">Real Businesses</span></>}
        subtitle="See how Australian businesses are growing with REVERA's AI automation and web development."
      />

      <section className="section-padding !pt-0 space-y-24">
        {caseStudies.map((study, idx) => (
          <div key={study.company} className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="rounded-3xl overflow-hidden glass relative">
                  <img src={study.image} alt={study.company} className="w-full h-[420px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-primary text-sm font-medium">{study.industry}</div>
                    <div className="text-2xl font-bold text-white">{study.company}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Problem</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{study.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Solution</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">Results</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((r) => (
                        <div key={r.label} className="text-center">
                          <div className="text-2xl font-bold gradient-text">{r.metric}</div>
                          <div className="text-white/50 text-xs mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-white/80 text-sm italic">&ldquo;{study.quote}&rdquo;</p>
                      <p className="text-white/40 text-xs mt-2">— {study.person}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      <CTA
        title="Your Success Story Starts Here"
        subtitle="Join hundreds of Australian businesses already growing with REVERA."
        primaryText="Book Demo"
        primaryHref="/book-demo"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}