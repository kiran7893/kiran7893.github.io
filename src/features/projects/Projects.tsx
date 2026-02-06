import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';
import Image from 'next/image';

export const Projects = () => {
  return (
    <Section id="projects" className="!pt-0 !pb-16 md:!pb-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-14">Projects</h2>
      </FadeIn>

      <div className="space-y-16">
        {profileData.projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <article className="border-b border-border pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Details - Left Side */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  {project.context && (
                    <p className="text-sm text-muted/70 mb-4">
                      {project.context}
                    </p>
                  )}
                  
                  <p className="text-base leading-relaxed text-foreground mb-5">
                    {project.solution}
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
                    {project.github && (
                      <Link href={project.github} external className="text-sm ml-2">
                        GitHub →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project Image - Right Side */}
                {project.image && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:w-80 lg:w-96 flex-shrink-0 group"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted/5 transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-lg group-hover:shadow-foreground/5 group-hover:-translate-y-1">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </a>
                )}

                {/* Image without link - just display */}
                {project.image && !project.link && (
                  <div className="md:w-80 lg:w-96 flex-shrink-0">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted/5">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
