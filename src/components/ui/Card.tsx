'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  children: ReactNode;
  hover?: boolean;
}

export const Card = ({
  children,
  hover = false,
  className = '',
  ...props
}: CardProps) => {
  const baseStyles =
    'bg-surface border border-border rounded-lg p-6 transition-colors duration-200';

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`${baseStyles} shadow-sm hover:border-slate-300 ${className}`}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};
