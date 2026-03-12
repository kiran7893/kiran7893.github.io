'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '@/lib/gtag';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  external?: boolean;
}

export const Link = ({
  children,
  external = false,
  className = '',
  href,
  onClick,
  ...props
}: LinkProps) => {
  const baseStyles =
    'text-accent hover:text-accent/80 underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors duration-200';

  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'] = (event) => {
    const targetHref = typeof href === 'string' ? href : '';
    const isMailto = targetHref.startsWith('mailto:');

    if (targetHref && (external || isMailto)) {
      trackEvent('outbound_link_click', {
        href: targetHref,
        link_type: isMailto ? 'email' : 'external',
      });
    }

    onClick?.(event);
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};
