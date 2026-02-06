import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { getAllPosts } from '@/lib/mdx';

export const Blog = () => {
  const allPosts = getAllPosts();

  return (
    <Section className="!py-8 md:!py-12">
      <div className="max-w-4xl">
        <FadeIn>
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-7 h-7 text-muted" />
              <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
            </div>
            <p className="text-muted">
              Thoughts on technology, development, and building things.
            </p>
          </div>
        </FadeIn>

        {allPosts.length > 0 ? (
          <div>
            {allPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="py-6 border-b border-border first:border-t">
                    {/* Date */}
                    <p className="text-sm text-muted/70 mb-1.5">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:underline decoration-1 underline-offset-4 transition-all duration-200">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-base text-muted leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Read more */}
                    <span className="inline-flex items-center gap-1.5 text-sm text-foreground group-hover:gap-2.5 transition-all duration-200">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="py-12 border-t border-border">
              <h3 className="text-xl font-semibold mb-3">No posts yet</h3>
              <p className="text-muted">
                Check back soon for articles on development and technology.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </Section>
  );
};
