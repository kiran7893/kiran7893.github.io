import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';

export const Contact = () => {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <h2 className="text-2xl mb-4">Get In Touch</h2>
            <p className="text-lg leading-8 text-foreground mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a conversation about technology and
              software engineering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={profileData.socialLinks.email}
                external
                className="text-lg"
              >
                Email
              </Link>
              <Link
                href={profileData.socialLinks.linkedin}
                external
                className="text-lg"
              >
                LinkedIn
              </Link>
            </div>
          </Card>
        </div>
      </FadeIn>
    </Section>
  );
};
