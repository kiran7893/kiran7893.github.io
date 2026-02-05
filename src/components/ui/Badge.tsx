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
      'bg-accent text-white hover:bg-accent/90',
    secondary:
      'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline:
      'border border-border text-muted hover:bg-slate-50',
  };

  return (
    <div className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
