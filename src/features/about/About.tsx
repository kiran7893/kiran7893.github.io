import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { profileData } from '../../data/profile';

export const About = () => {
  return (
    <Section id="about">
      <FadeIn>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-base leading-7 text-foreground">
            {profileData.about}
          </p>
        </div>
      </FadeIn>
    </Section>
  );
};
