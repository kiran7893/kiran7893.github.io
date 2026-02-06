import { profileData } from '@/data/profile';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <p className="text-sm text-muted text-center">
          © {currentYear} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
