import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { profileData } from '../../data/profile';

export const Skills = () => {
  const skillGroups = [
    { title: 'Languages', skills: profileData.skills.languages },
    { title: 'Frameworks', skills: profileData.skills.frameworks },
    { title: 'Cloud & DevOps', skills: profileData.skills.cloud },
    { title: 'GenAI & ML', skills: profileData.skills.genai },
  ];

  return (
    <Section id="skills">
      <FadeIn>
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm rounded-md bg-muted/10 text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};

