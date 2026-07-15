'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect information you provide directly (name, email, phone, business details), data from your use of our services (calls, chats, bookings), and technical data (IP address, browser type, device information) to operate and improve REVERA.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'We use your information to provide AI automation services, respond to inquiries, send booking confirmations and reminders, improve our products, and comply with legal obligations. We never sell your personal data.',
  },
  {
    title: '3. Data Security',
    content:
      'All data is encrypted in transit and at rest using bank-grade AES-256 encryption. We are hosted on SOC 2 compliant infrastructure and follow Australian Privacy Principles (APPs) under the Privacy Act 1988.',
  },
  {
    title: '4. Data Retention',
    content:
      'We retain personal information only as long as necessary to provide our services and meet legal requirements. You may request deletion of your data at any time.',
  },
  {
    title: '5. Your Rights',
    content:
      'Under the GDPR and Australian Privacy Act, you have the right to access, correct, or delete your personal data, and to object to or restrict certain processing. Contact us at privacy@revera.com.au to exercise these rights.',
  },
  {
    title: '6. Third-Party Services',
    content:
      'We use trusted third-party providers including Supabase (data hosting), Stripe (payments), and Vercel (hosting). Each operates under their own privacy policies and our data processing agreements.',
  },
  {
    title: '7. Cookies',
    content:
      'We use essential cookies to operate the site and analytics cookies to understand usage. You can manage cookie preferences through your browser settings.',
  },
  {
    title: '8. Contact Us',
    content:
      'For any privacy-related questions, contact our Privacy Officer at privacy@revera.com.au or write to REVERA, Sydney, NSW, Australia. This policy was last updated on 14 July 2026.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge={<><Shield className="w-4 h-4 text-primary" /> Privacy Policy</>}
        title={<>Your Privacy <span className="gradient-text">Matters</span></>}
        subtitle="We're committed to protecting your data with enterprise-grade security and full transparency."
      />

      <section className="section-padding !pt-0">
        <div className="container-custom max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-white/60 text-sm leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}