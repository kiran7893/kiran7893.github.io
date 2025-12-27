import { profileData } from '../../data/profile';
import { Link } from '../ui/Link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Myadaram Sai Kiran. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href={profileData.socialLinks.github} external>
              GitHub
            </Link>
            <Link href={profileData.socialLinks.linkedin} external>
              LinkedIn
            </Link>
            <Link href={profileData.socialLinks.email} external>
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

