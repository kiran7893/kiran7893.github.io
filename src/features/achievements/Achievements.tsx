'use client';

import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';

export const Achievements = () => {
  return (
    <Section id="achievements" className="!pt-0 !pb-4 md:!pb-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-14">Achievements</h2>
      </FadeIn>
      <div className="space-y-10">
        {profileData.achievements.map((achievement, index) => (
          <FadeIn key={achievement.title} delay={index * 0.1}>
            <article className="border border-border rounded-xl p-6 md:p-8 bg-muted/5">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Google Cloud Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted/10 border border-border flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    {achievement.link && (
                      <Link
                        href={achievement.link}
                        external
                        className="text-sm"
                      >
                        {achievement.linkLabel || 'View'} →
                      </Link>
                    )}
                  </div>

                  <p className="text-base leading-relaxed text-foreground mb-4">
                    {achievement.description}
                  </p>

                  {achievement.highlights && (
                    <div className="flex flex-wrap items-center gap-2">
                      {achievement.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 text-xs rounded-full bg-muted/10 text-muted border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
