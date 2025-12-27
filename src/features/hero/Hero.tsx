import { useState } from 'react';
import { profileData } from '../../data/profile';
import { Button } from '../../components/ui/Button';
import { FadeIn } from '../../components/animations/FadeIn';
import { Section } from '../../components/ui/Section';

export const Hero = () => {
  const [loadingStates, setLoadingStates] = useState({
    github: false,
    linkedin: false,
    resume: false,
  });

  const handleLinkClick = async (
    url: string,
    key: 'github' | 'linkedin' | 'resume'
  ) => {
    setLoadingStates((prev) => ({ ...prev, [key]: true }));
    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));
    window.open(url, '_blank', 'noopener,noreferrer');
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <Section id="home" className="min-h-screen flex items-center">
      <div className="text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {profileData.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl md:text-2xl text-muted mb-4">
            {profileData.role}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            {profileData.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              isLoading={loadingStates.github}
              onClick={() =>
                handleLinkClick(profileData.socialLinks.github, 'github')
              }
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              isLoading={loadingStates.linkedin}
              onClick={() =>
                handleLinkClick(profileData.socialLinks.linkedin, 'linkedin')
              }
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              isLoading={loadingStates.resume}
              onClick={() =>
                handleLinkClick(profileData.socialLinks.resume, 'resume')
              }
            >
              Resume
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

