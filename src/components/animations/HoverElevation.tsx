import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HoverElevationProps {
  children: ReactNode;
  className?: string;
}

export const HoverElevation = ({
  children,
  className = '',
}: HoverElevationProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

