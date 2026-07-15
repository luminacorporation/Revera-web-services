'use client';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service_interest?: string;
  created_at?: string;
}

export async function saveContactSubmission(submission: ContactSubmission): Promise<{ data: ContactSubmission | null; error: Error | null }> {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert(submission)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data: data as ContactSubmission, error: null };
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return { data: null, error: error as Error };
  }
}

export interface BookingRequest {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  preferred_time?: string;
  service_interest?: string;
  notes?: string;
  created_at?: string;
}

export async function saveBookingRequest(booking: BookingRequest): Promise<{ data: BookingRequest | null; error: Error | null }> {
  try {
    const { data, error } = await supabase
      .from('booking_requests')
      .insert(booking)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { data: data as BookingRequest, error: null };
  } catch (error) {
    console.error('Error saving booking request:', error);
    return { data: null, error: error as Error };
  }
}

export async function getCaseStudies(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getTestimonials(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export async function getPricingPlans(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('pricing_plans')
      .select('*')
      .order('price', { ascending: true });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching pricing plans:', error);
    return [];
  }
}

export async function getServices(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getFaqs(): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error: Error | null }> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email, subscribed_at: new Date().toISOString() });

    if (error) {
      throw error;
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error: error as Error };
  }
}