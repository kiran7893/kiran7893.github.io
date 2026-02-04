'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/utils/constants';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's a route (starts with /), Next.js Link will handle it
    if (href.startsWith('/')) {
      return;
    }
    
    // For hash links, if we're not on home, navigate to home first
    if (pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      // We're on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-semibold hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            Myadaram Sai Kiran
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.href.startsWith('/')) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {NAVIGATION_ITEMS.map((item) => {
              if (item.href.startsWith('/')) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

