import type { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
}

export const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) => {
  const baseStyles =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200';

  const variants = {
    default:
      'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
  };

  return (
    <div className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};

