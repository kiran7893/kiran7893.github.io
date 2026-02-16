import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

export const NotFound = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <FadeIn>
          <BookOpen className="w-16 h-16 text-muted mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Blog Post Not Found</h1>
          <p className="text-muted mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
            <Link href="/">
              <Button variant="primary">Go Home</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
