import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { BlogPost as BlogPostType } from '@/types/BlogData';
import MDXContent from '@/components/MDXContent';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost = ({ post }: BlogPostProps) => {

  return (
    <Section className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <FadeIn>
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </div>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            {/* Category */}
            <div className="mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            {post.thumbnail && (
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </FadeIn>

        {/* Article Content */}
        <FadeIn delay={0.2}>
          <article className="prose prose-lg max-w-none">
            <MDXContent content={post.content} />
          </article>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Written by {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    Published on{' '}
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-all duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back to Blog</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
