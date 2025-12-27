import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';

export const Projects = () => {
  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <Card hover>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-base leading-7 text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <Link href={project.github} external className="text-sm">
                    View on GitHub →
                  </Link>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

