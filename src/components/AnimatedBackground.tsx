'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'dense' | 'minimal';
  className?: string;
}

export function AnimatedBackground({ variant = 'default', className = '' }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbCount = variant === 'dense' ? 5 : variant === 'minimal' ? 2 : 3;

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Floating orbs */}
      {Array.from({ length: orbCount }).map((_, i) => (
        <motion.div
          key={i}
          className={`glow-orb ${
            i % 3 === 0 ? 'glow-orb-primary' : i % 3 === 1 ? 'glow-orb-accent' : 'glow-orb-secondary'
          }`}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
          }}
        />
      ))}

      {/* Mouse glow effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
    </div>
  );
}