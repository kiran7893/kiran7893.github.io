import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

