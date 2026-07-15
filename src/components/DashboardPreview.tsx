'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  Activity,
} from 'lucide-react';

const metrics = [
  { label: 'Calls Handled', value: '1,284', change: '+12%', icon: Phone, color: 'text-primary' },
  { label: 'Chat Sessions', value: '3,942', change: '+8%', icon: MessageSquare, color: 'text-accent' },
  { label: 'Bookings', value: '847', change: '+23%', icon: Calendar, color: 'text-secondary' },
  { label: 'Avg Response', value: '1.2s', change: '-0.3s', icon: Clock, color: 'text-primary' },
];

export function DashboardPreview() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="rounded-2xl glass overflow-hidden shadow-2xl shadow-primary/20">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 text-xs text-white/40">app.revera.com.au/dashboard</div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 bg-[rgb(var(--card))]/40">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-semibold">Welcome back, James</h3>
              <p className="text-white/50 text-sm">Your AI is performing exceptionally today</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs">Live</span>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs">{metric.label}</span>
                  <span className="text-green-400 text-xs">{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main chart */}
            <div className="lg:col-span-2 glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium text-sm">Activity Overview</span>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              {/* Fake chart bars */}
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-accent/60"
                  />
                ))}
              </div>
            </div>

            {/* Side panel */}
            <div className="glass rounded-xl p-4">
              <span className="text-white font-medium text-sm block mb-4">Recent Activity</span>
              <div className="space-y-3">
                {[
                  { icon: CheckCircle2, text: 'Booking confirmed', time: '2m ago', color: 'text-green-400' },
                  { icon: Users, text: 'New lead captured', time: '5m ago', color: 'text-primary' },
                  { icon: Phone, text: 'Call answered', time: '8m ago', color: 'text-accent' },
                  { icon: Activity, text: 'SMS sent', time: '12m ago', color: 'text-secondary' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <div className="flex-1">
                      <div className="text-white/80 text-xs">{item.text}</div>
                      <div className="text-white/40 text-[10px]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
    </div>
  );
}