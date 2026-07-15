'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing or using REVERA\'s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    title: '2. Description of Service',
    content:
      'REVERA provides AI automation services including AI receptionists, AI chatbots, and web development. We strive for 99.9% uptime but do not guarantee uninterrupted service.',
  },
  {
    title: '3. Subscriptions & Billing',
    content:
      'Plans are billed monthly in advance in AUD. You may cancel anytime; cancellations take effect at the end of the current billing period. Prices may change with 30 days notice.',
  },
  {
    title: '4. Customer Responsibilities',
    content:
      'You are responsible for the accuracy of information provided to train AI systems, compliance with laws in your use of the service, and maintaining the confidentiality of your account credentials.',
  },
  {
    title: '5. Intellectual Property',
    content:
      'REVERA retains all rights to its technology, branding, and platform. You retain ownership of your data and any content you provide. Custom developments are assigned to you upon full payment.',
  },
  {
    title: '6. Limitation of Liability',
    content:
      'To the maximum extent permitted by law, REVERA is not liable for indirect, incidental, or consequential damages. Our total liability is limited to fees paid in the preceding 3 months.',
  },
  {
    title: '7. Service Level Agreement',
    content:
      'Enterprise plans include a 99.9% uptime SLA with service credits for downtime exceeding agreed thresholds. Starter and Professional plans are best-effort.',
  },
  {
    title: '8. Termination',
    content:
      'Either party may terminate with 30 days written notice. We may suspend service immediately for non-payment or breach of these terms. Data export is available for 30 days post-termination.',
  },
  {
    title: '9. Governing Law',
    content:
      'These terms are governed by the laws of New South Wales, Australia. Disputes are subject to the exclusive jurisdiction of NSW courts.',
  },
  {
    title: '10. Contact',
    content:
      'Questions about these terms? Contact us at legal@revera.com.au. These terms were last updated on 14 July 2026.',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge={<><FileText className="w-4 h-4 text-primary" /> Terms of Service</>}
        title={<>Terms of <span className="gradient-text">Service</span></>}
        subtitle="The agreement between you and REVERA for using our AI automation services."
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
                  transition={{ delay: i * 0.04 }}
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