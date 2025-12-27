import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`mx-auto px-4 md:px-6 max-w-6xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

