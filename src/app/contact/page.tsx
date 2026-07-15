'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Twitter, Linkedin, Github } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/Button';
import { saveContactSubmission } from '@/lib/supabase';

const services = [
  'AI Receptionist',
  'AI Chatbot',
  'Website Development',
  'All of the above',
  'Not sure yet',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await saveContactSubmission(form);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }
  };

  return (
    <>
      <PageHeader
        badge="Contact"
        title={<>Let's Build Your <span className="gradient-text">AI Future</span></>}
        subtitle="Tell us about your business and we'll show you exactly how REVERA can help you grow."
      />

      <section className="section-padding !pt-0">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10"
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10"
                        placeholder="+61 4XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10"
                        placeholder="Business name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-primary/50 border border-white/10 appearance-none"
                    >
                      <option value="" className="bg-[rgb(var(--background))]">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[rgb(var(--background))]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10 resize-none"
                      placeholder="Tell us about your business and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </Button>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>

          {/* Info + placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <a href="mailto:hello@revera.com.au" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Email</div>
                  <div className="text-white/60 text-sm group-hover:text-white transition-colors">hello@revera.com.au</div>
                </div>
              </a>
              <a href="tel:+61212345678" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Phone</div>
                  <div className="text-white/60 text-sm group-hover:text-white transition-colors">+61 2 1234 5678</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Office</div>
                  <div className="text-white/60 text-sm">Sydney, NSW, Australia</div>
                </div>
              </div>
            </div>

            {/* Calendly placeholder */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Book a Call</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Calendly</span>
              </div>
              <div className="aspect-video rounded-xl bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center text-center p-4">
                <p className="text-white/50 text-sm mb-3">
                  Schedule a free 20-minute consultation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Open Calendar
                  </a>
                </Button>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Find Us</h3>
              <div className="aspect-video rounded-xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center">
                <p className="text-white/50 text-sm">Google Maps Integration</p>
              </div>
            </div>

            {/* Socials */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, href: 'https://twitter.com/revera', label: 'Twitter' },
                  { icon: Linkedin, href: 'https://linkedin.com/company/revera', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/revera', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:glass-hover transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}