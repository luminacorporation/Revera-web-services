'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can you set up an AI receptionist?',
    answer: 'Most AI receptionists are live within 5-7 business days. This includes voice training, calendar integration, and SMS setup tailored to your business.',
  },
  {
    question: 'Will customers know they\'re talking to AI?',
    answer: 'Our AI sounds natural and human-like. You can choose whether to disclose it\'s AI. Most clients find customers are delighted by the instant, accurate responses.',
  },
  {
    question: 'Can the AI handle complex bookings?',
    answer: 'Yes. The AI integrates with your Google Calendar, understands your services, pricing, and availability, and can handle reschedules, cancellations, and custom requests.',
  },
  {
    question: 'What happens if the AI can\'t help?',
    answer: 'The AI can transfer calls to you, take a message, or trigger a missed-call recovery sequence with SMS and email follow-up.',
  },
  {
    question: 'Do you build websites too?',
    answer: 'Absolutely. We build lightning-fast, SEO-optimised websites with booking systems, ecommerce, and analytics — designed to convert visitors into customers.',
  },
  {
    question: 'Is there a lock-in contract?',
    answer: 'No. All plans are month-to-month. We\'re confident you\'ll stay because of results, not contracts.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/80 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}