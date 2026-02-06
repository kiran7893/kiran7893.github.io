'use client';

import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { profileData, TimelineEntry } from '../../data/profile';

const TimelineItem = ({ entry, index }: { entry: TimelineEntry; index: number }) => {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="timeline-item grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 pb-10 relative">
        {/* Period */}
        <div className="text-sm text-muted font-medium pt-0.5">
          {entry.period}
        </div>
        
        {/* Content */}
        <div className="pb-2 border-l border-border pl-6 relative">
          {/* Timeline dot */}
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border" />
          {/* Company/Institution name and role */}
          <div className="mb-3">
            {entry.subtitle && (
              <h3 className="text-xl font-semibold text-foreground leading-snug">
                {entry.subtitle}
              </h3>
            )}
            {!entry.subtitle && (
              <h3 className="text-xl font-semibold text-foreground leading-snug">
                {entry.title}
              </h3>
            )}
            {entry.subtitle && (
              <p className="text-base text-foreground/80">
                {entry.title}
              </p>
            )}
            {entry.location && (
              <p className="text-sm text-muted">
                {entry.location}
              </p>
            )}
          </div>
          
          {/* Narrative */}
          <div className="prose prose-slate max-w-none">
            {entry.narrative.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base leading-relaxed text-foreground mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export const Experience = () => {
  return (
    <Section id="experience" className="!py-16 md:!py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-14">Journey</h2>
      </FadeIn>
      
      <div className="timeline relative">
        {profileData.timeline.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
        
      </div>
    </Section>
  );
};
