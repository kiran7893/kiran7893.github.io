import { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
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
    'bg-background border border-border rounded-lg p-6 transition-shadow duration-200';

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={`${baseStyles} shadow-elevation hover:shadow-elevation-hover ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} shadow-elevation ${className}`} {...props}>
      {children}
    </div>
  );
};

