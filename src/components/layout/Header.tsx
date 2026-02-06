'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const NavLink = ({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) => {
    const active = isActive(href);
    const baseClass = `
      relative text-lg font-medium py-2 px-1
      transition-all duration-300 ease-out
      text-gray-800 hover:text-black
      group
    `;

    const content = (
      <>
        {children}
        <span 
          className={`
            absolute left-0 -bottom-0.5 h-[1.5px] bg-gray-800
            transition-all duration-300 ease-out
            ${active ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
        />
      </>
    );

    if (external) {
      return (
        <a
          href={href}
          className={baseClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        bg-background ${scrolled ? 'shadow-sm' : ''}
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-end h-20 gap-10">
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="mailto:myadaramsaikiran@gmail.com" external>Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`
            md:hidden overflow-hidden
            transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="/blog"
              className="relative text-xl font-medium py-2 text-gray-800 hover:text-black transition-all duration-200 group w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
              <span 
                className={`
                  absolute left-0 -bottom-0.5 h-[1.5px] bg-gray-800
                  transition-all duration-300 ease-out
                  ${isActive('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}
                `}
              />
            </Link>
            <a
              href="mailto:myadaramsaikiran@gmail.com"
              className="relative text-xl font-medium py-2 text-gray-800 hover:text-black transition-all duration-200 group w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span 
                className="absolute left-0 -bottom-0.5 h-[1.5px] bg-gray-800 transition-all duration-300 ease-out w-0 group-hover:w-full"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
