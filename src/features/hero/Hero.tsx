'use client';

import Image from 'next/image';
import { Linkedin, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../../components/ui/Button';
import { FadeIn } from '../../components/animations/FadeIn';
import { Section } from '../../components/ui/Section';
import { Link } from '../../components/ui/Link';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Hero = () => {
  const openLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <Section id="home" className="min-h-[85vh] flex items-center justify-center pt-0 pb-12 lg:py-0 -mt-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <FadeIn>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted mb-4 font-medium">
              Full-Stack Engineer • AI Systems Builder
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {profileData.name}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-3">
              {profileData.role}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {profileData.tagline}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <Button
                variant="primary"
                onClick={() => openLink(profileData.socialLinks.github)}
                className="gap-2"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                GitHub
              </Button>
              <Button
                variant="outline"
                onClick={() => openLink(profileData.socialLinks.linkedin)}
                className="gap-2"
              >
                <Linkedin className="w-4 h-4" aria-hidden />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={() => openLink(profileData.socialLinks.resume)}
                className="gap-2"
              >
                <FileText className="w-4 h-4" aria-hidden />
                Resume
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="text-sm text-muted space-y-1">
              <p>Available for full-time and contract opportunities.</p>
              <p>
                Prefer email?{" "}
                <Link href={profileData.socialLinks.email} external>
                  Reach out directly
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image */}
        <FadeIn delay={0.1} className="flex-shrink-0">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-sm" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/10 to-transparent" />
            
            {/* Image container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
              <Image
                src="/Image1.png"
                alt={profileData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
