import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { profileData } from '../../data/profile';

export const About = () => {
  return (
    <Section id="about">
      <FadeIn>
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-muted mb-6">
            {profileData.about}
          </p>
          <div className="space-y-4">
            <p className="text-base leading-7 text-muted">
              I specialize in building AI-driven solutions that leverage
              Generative AI and Retrieval-Augmented Generation (RAG) systems to
              solve complex problems. My work focuses on creating scalable,
              production-ready applications with a strong emphasis on cloud
              infrastructure and system design.
            </p>
            <p className="text-base leading-7 text-muted">
              With experience across the full stack, I bring an ownership mindset
              to every project, ensuring end-to-end delivery from concept to
              deployment. I'm passionate about building systems that not only
              work but scale efficiently and deliver measurable impact.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
