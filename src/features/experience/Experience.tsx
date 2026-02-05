import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { FadeIn } from '../../components/animations/FadeIn';
import { profileData } from '../../data/profile';

export const Experience = () => {
  return (
    <Section id="experience">
      <FadeIn>
        <h2 className="text-4xl mb-12">Experience</h2>
        <div className="space-y-8">
          {profileData.experience.map((exp, index) => (
            <FadeIn key={exp.company} delay={index * 0.1}>
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-foreground mb-1">{exp.company}</p>
                    <p className="text-sm text-muted">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-muted mt-2">•</span>
                      <span className="text-base leading-7 text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-md bg-muted/10 text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
