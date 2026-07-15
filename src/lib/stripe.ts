'use client';

import { loadStripe, type Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.warn('Stripe publishable key not found. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');
      return null;
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
  stripePriceId?: string;
  description?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 499,
    currency: 'aud',
    interval: 'month',
    description: 'Perfect for small businesses getting started with AI automation.',
    features: [
      'AI Chatbot (Basic)',
      'Up to 500 conversations/month',
      'Business hours support',
      'Standard website analytics',
      'Email support',
      '1 website integration',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 1299,
    currency: 'aud',
    interval: 'month',
    popular: true,
    description: 'Complete AI automation suite for growing businesses.',
    features: [
      'AI Receptionist (24/7)',
      'AI Chatbot (Advanced)',
      'Up to 5,000 conversations/month',
      'Google Calendar integration',
      'SMS reminders',
      'Voice AI with call transfers',
      'Priority support',
      'Advanced analytics dashboard',
      '5 website integrations',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 3999,
    currency: 'aud',
    interval: 'month',
    description: 'Custom AI solutions for large organizations.',
    features: [
      'Everything in Professional',
      'Unlimited conversations',
      'Custom AI model training',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee (99.9%)',
      'On-premise deployment option',
      'White-label solution',
      'Unlimited website integrations',
    ],
  },
];

export async function redirectToCheckout(priceId: string): Promise<void> {
  const stripe = await getStripe();
  if (!stripe) {
    console.error('Stripe not initialized');
    return;
  }

  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
  }
}

export async function createPaymentIntent(amount: number, currency: string = 'aud'): Promise<{ clientSecret: string | null; error: Error | null }> {
  try {
    const response = await fetch('/api/stripe/payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    const { clientSecret } = await response.json();
    return { clientSecret, error: null };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return { clientSecret: null, error: error as Error };
  }
}