import { HTMLAttributes, ReactNode } from 'react';

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
      className={`py-24 md:py-32 ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

