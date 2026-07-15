'use client';

import { motion } from 'framer-motion';
import { Phone, Bot, Calendar, MessageSquare, Bell, CheckCircle2, ArrowDown } from 'lucide-react';

const steps = [
  { icon: Phone, title: 'Customer Calls', desc: 'A customer calls your business at any time of day or night.' },
  { icon: Bot, title: 'AI Answers', desc: 'Your AI receptionist picks up instantly with a natural, friendly voice.' },
  { icon: Calendar, title: 'Books Appointment', desc: 'Checks your availability and schedules the appointment in real-time.' },
  { icon: MessageSquare, title: 'SMS Confirmation', desc: 'Sends an automatic SMS confirmation to the customer.' },
  { icon: Bell, title: 'Business Notified', desc: 'You receive instant notification of the new booking.' },
  { icon: CheckCircle2, title: 'Calendar Updated', desc: 'Google Calendar syncs automatically — no manual entry needed.' },
];

export function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative flex items-start gap-4 pb-12 last:pb-0"
        >
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="absolute left-[27px] top-14 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-primary/50 to-accent/50" />
          )}

          <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
            <step.icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 pt-2">
            <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
            <p className="text-white/60 text-sm">{step.desc}</p>
          </div>

          {i < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="absolute left-[33px] top-[68px] text-primary/60"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}