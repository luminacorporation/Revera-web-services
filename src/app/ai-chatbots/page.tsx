'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { unsplashImages } from '@/lib/utils';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const suggestedQuestions = [
  'What services do you offer?',
  'How much does it cost?',
  'Can I book a demo?',
  'Do you serve my industry?',
];

const botResponses: Record<string, string> = {
  'What services do you offer?':
    'We offer AI Receptionists (24/7 call answering & booking), AI Chatbots (lead gen & support), and high-converting Websites. Which interests you most?',
  'How much does it cost?':
    'Our plans start at $499/month for Starter, $1,299 for Professional, and custom Enterprise. Want me to share the full pricing?',
  'Can I book a demo?':
    'Absolutely! I can book a free 20-minute demo for you. What day works best — this week or next?',
  'Do you serve my industry?':
    'We serve barber shops, dentists, electricians, restaurants, mechanics, tradies, and more across Australia. What industry are you in?',
};

const features = [
  { title: 'Website Chatbot', desc: 'Embed on any page, matches your brand instantly.' },
  { title: 'FAQ Automation', desc: 'Answers common questions without human help.' },
  { title: 'Lead Generation', desc: 'Captures and qualifies leads automatically.' },
  { title: 'Customer Support', desc: 'Resolves queries 24/7, escalates when needed.' },
  { title: 'AI Knowledge Base', desc: 'Learns from your docs, policies, and history.' },
  { title: 'Multi-language', desc: 'Communicates in your customers\' language.' },
];

export default function AIChatbotsPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hi! I\'m REVERA\'s AI assistant. How can I help your business grow today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response =
        botResponses[text] ||
        'Great question! Our team would love to help with that. Would you like to book a free demo?';
      setMessages((prev) => [...prev, { role: 'bot', content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <PageHeader
        badge="AI Chatbots"
        title={<>Engage Every Visitor with <span className="gradient-text">AI Chat</span></>}
        subtitle="Intelligent chatbots that answer questions, capture leads, and provide support — all automatically, 24/7."
      />

      <section className="section-padding !pt-0">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Chat demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl glass overflow-hidden shadow-2xl shadow-primary/20">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">REVERA Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[380px] overflow-y-auto p-5 space-y-4">
                <AnimatePresence>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === 'bot' ? 'bg-gradient-to-br from-primary to-accent' : 'bg-white/10'
                      }`}>
                        {msg.role === 'bot' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                      </div>
                      <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === 'bot'
                          ? 'bg-white/10 text-white/90 rounded-tl-none'
                          : 'bg-primary text-white rounded-tr-none'
                      }`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 rounded-full bg-white/60"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions */}
              <div className="px-5 py-3 border-t border-white/10 flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full glass text-white/70 hover:text-white transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="p-4 border-t border-white/10 flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More Than a <span className="gradient-text">Chat Widget</span>
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Our chatbots are trained on your business, understand context, and
              drive real outcomes — not just canned responses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-5"
                >
                  <h3 className="text-white font-medium text-sm mb-1">{feature.title}</h3>
                  <p className="text-white/60 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            <Button variant="gradient" size="lg" className="mt-8" asChild>
              <Link href="/book-demo">
                Try It Live
                <Sparkles className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTA
        title="Turn Visitors Into Customers"
        subtitle="Deploy a smart chatbot on your site in minutes. Start converting more leads today."
        primaryText="Book Demo"
        primaryHref="/book-demo"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}