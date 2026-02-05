import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  external?: boolean;
}

export const Link = ({
  children,
  external = false,
  className = '',
  href,
  ...props
}: LinkProps) => {
  const baseStyles =
    'text-accent hover:text-accent/80 underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors duration-200';

  return (
    <a
      href={href}
      className={`${baseStyles} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
