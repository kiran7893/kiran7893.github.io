'use client';

import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';

export const OpenSource = () => {
  return (
    <Section id="open-source" className="!pt-0 !pb-4 md:!pb-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-14">Open Source</h2>
      </FadeIn>

      <div className="space-y-16">
        {profileData.openSource.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <article className="border-b border-border pb-12 last:border-b-0">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-6 mb-4">
                  <Link
                    href={project.github}
                    external
                    className="text-sm"
                  >
                    GitHub →
                  </Link>
                  {project.stars != null && (
                    <span className="text-sm text-muted/70">
                      {project.stars} stars
                    </span>
                  )}
                  {project.forks != null && (
                    <span className="text-sm text-muted/70">
                      {project.forks} forks
                    </span>
                  )}
                </div>

                <p className="text-base leading-relaxed text-foreground mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-muted/10 text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
