'use client';

import { motion } from 'motion/react';

interface FadeInScaleProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInScale({ children, delay = 0, className }: FadeInScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
