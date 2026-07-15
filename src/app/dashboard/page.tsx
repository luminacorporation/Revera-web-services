'use client';

import Link from 'next/link';
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
  Settings,
  Bell,
  Search,
  Sparkles,
  BarChart3,
  Bot,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { unsplashImages } from '@/lib/utils';

const sidebarItems = [
  { icon: TrendingUp, label: 'Dashboard', active: true },
  { icon: Phone, label: 'Calls' },
  { icon: MessageSquare, label: 'Chats' },
  { icon: Calendar, label: 'Bookings' },
  { icon: Bot, label: 'AI Agents' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const metrics = [
  { label: 'Calls Handled', value: '1,284', change: '+12%', icon: Phone, color: 'text-primary' },
  { label: 'Chat Sessions', value: '3,942', change: '+8%', icon: MessageSquare, color: 'text-accent' },
  { label: 'Bookings', value: '847', change: '+23%', icon: Calendar, color: 'text-secondary' },
  { label: 'Avg Response', value: '1.2s', change: '-0.3s', icon: Clock, color: 'text-primary' },
];

const recentActivity = [
  { icon: CheckCircle2, text: 'Booking confirmed with Sarah M.', time: '2m ago', color: 'text-green-400' },
  { icon: Users, text: 'New lead captured from website', time: '5m ago', color: 'text-primary' },
  { icon: Phone, text: 'Call answered — 1:24 duration', time: '8m ago', color: 'text-accent' },
  { icon: Activity, text: 'SMS reminder sent to 12 clients', time: '12m ago', color: 'text-secondary' },
  { icon: MessageSquare, text: 'Chat resolved — no escalation', time: '15m ago', color: 'text-primary' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col glass border-r border-white/10 min-h-[calc(100vh-5rem)] p-4">
          <div className="flex items-center gap-2 px-3 py-4 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-bold gradient-text text-lg">REVERA</span>
          </div>
          <nav className="space-y-1 flex-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  item.active
                    ? 'bg-primary/15 text-white border border-primary/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="border-t border-white/10 pt-4 space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5">
              <Settings className="w-5 h-5" />
              Settings
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-white/50 text-sm">Welcome back, James — your AI is performing exceptionally</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl glass">
                <Search className="w-4 h-4 text-white/40" />
                <input placeholder="Search..." className="bg-transparent text-sm text-white placeholder-white/40 outline-none w-32" />
              </div>
              <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
              </button>
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <img src={unsplashImages.happyOwner} alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Status banner */}
          <div className="flex items-center justify-between glass rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm">All systems operational</span>
            </div>
            <span className="text-green-400 text-sm">Live</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <metric.icon className={`w-6 h-6 ${metric.color} mb-3`} />
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white/50 text-xs">{metric.label}</span>
                  <span className="text-green-400 text-xs">{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts + activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="lg:col-span-2 glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold">Performance Overview</h3>
                  <p className="text-white/50 text-sm">Last 12 days</p>
                </div>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-end gap-2 h-40">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.04, duration: 0.5 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-accent/60 min-h-[4px]"
                  />
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className={`w-4 h-4 ${item.color} mt-1 shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-white/80 text-sm truncate">{item.text}</div>
                      <div className="text-white/40 text-xs">{item.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA note */}
          <div className="mt-6 glass rounded-2xl p-6 text-center">
            <p className="text-white/60 text-sm mb-3">
              This is a preview of the REVERA client dashboard. Full SaaS platform launching soon.
            </p>
            <Button variant="gradient" size="sm" asChild>
              <Link href="/book-demo">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}