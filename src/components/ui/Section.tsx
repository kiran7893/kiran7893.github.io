import type { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

export const Section = ({
  children,
  id,
  className = '',
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 scroll-mt-20 ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
};
