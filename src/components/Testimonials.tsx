'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { unsplashImages } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Mitchell Barber Co.',
    image: unsplashImages.happyOwner,
    quote: 'REVERA\'s AI receptionist handles our bookings 24/7. We\'ve recovered dozens of missed calls and grown revenue by 40%.',
    rating: 5,
  },
  {
    name: 'James Thompson',
    role: 'Director, Thompson Electrical',
    image: unsplashImages.electrician,
    quote: 'The AI chatbot qualifies our leads automatically. Our team now focuses on jobs instead of answering the same questions.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Restaurant Owner, Bella Vista',
    image: unsplashImages.restaurant,
    quote: 'Our new website converts visitors into reservations beautifully. The analytics show exactly what\'s working.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by <span className="gradient-text">Australian Businesses</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real results from real businesses across the country.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-8 hover:glass-hover transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{item.name}</div>
                  <div className="text-white/50 text-xs">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}