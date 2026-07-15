'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle2, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/Button';
import { saveBookingRequest } from '@/lib/supabase';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
const services = ['AI Receptionist', 'AI Chatbot', 'Website Development', 'Full Suite'];

export default function BookDemoPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await saveBookingRequest(form);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <>
      <PageHeader
        badge="Book a Demo"
        title={<>See REVERA in <span className="gradient-text">Action</span></>}
        subtitle="Book a free 20-minute demo and we'll show you exactly how AI can transform your business."
      />

      <section className="section-padding !pt-0">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Live Demo</div>
                  <div className="text-white/50 text-sm">20 minutes</div>
                </div>
              </div>
              <p className="text-white/60 text-sm">
                A personalised walkthrough of our AI solutions, tailored to your business.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 space-y-4">
              {[
                { icon: Calendar, text: 'Pick a time that suits you' },
                { icon: Clock, text: 'No obligation, completely free' },
                { icon: Sparkles, text: 'See real results from day one' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-8">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-3">Demo Booked!</h3>
                  <p className="text-white/60 max-w-md mx-auto">
                    Thanks {form.name || 'there'}! We've received your request for {form.date} at {form.time}.
                    We'll confirm via email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Details */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                      <h3 className="text-xl font-semibold text-white mb-4">Your Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Name *</label>
                          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10" placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="text-white/70 text-sm mb-2 block">Email *</label>
                          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10" placeholder="john@business.com" />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Phone</label>
                        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10" placeholder="+61 4XX XXX XXX" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Service of Interest</label>
                        <div className="flex flex-wrap gap-2">
                          {services.map((s) => (
                            <button type="button" key={s} onClick={() => setForm({ ...form, service: s })}
                              className={`px-4 py-2 rounded-xl text-sm transition-all border ${
                                form.service === s ? 'bg-primary text-white border-primary' : 'glass text-white/70 border-white/10 hover:glass-hover'
                              }`}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Button type="button" variant="gradient" size="lg" className="w-full" onClick={() => setStep(2)}>
                        Continue
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: Schedule */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                      <h3 className="text-xl font-semibold text-white mb-4">Pick a Time</h3>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Preferred Date *</label>
                        <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-primary/50 border border-white/10 [color-scheme:dark]" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Preferred Time *</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {timeSlots.map((t) => (
                            <button type="button" key={t} onClick={() => setForm({ ...form, time: t })}
                              className={`px-3 py-2 rounded-xl text-sm transition-all border ${
                                form.time === t ? 'bg-primary text-white border-primary' : 'glass text-white/70 border-white/10 hover:glass-hover'
                              }`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Notes</label>
                        <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50 border border-white/10 resize-none" placeholder="Anything we should know?" />
                      </div>
                      <div className="flex gap-3">
                        <Button type="button" variant="glass" size="lg" onClick={() => setStep(1)}>
                          Back
                        </Button>
                        <Button type="submit" variant="gradient" size="lg" className="flex-1" disabled={status === 'loading'}>
                          {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}