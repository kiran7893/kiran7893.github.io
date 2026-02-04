import { Calendar, Clock, User, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { getAllPosts } from '@/lib/mdx';

export const Blog = () => {
  const allPosts = getAllPosts();

  const truncateText = (text: string, maxLines: number = 3) => {
    const words = text.split(' ');
    const wordsPerLine = 12;
    const maxWords = maxLines * wordsPerLine;

    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <Section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h1 className="text-4xl font-bold">Blog</h1>
            </div>
            <p className="text-lg text-muted">
              Exploring the latest in technology and development
            </p>
          </div>
        </FadeIn>

        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-muted/10 overflow-hidden rounded-t-lg mb-4">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-muted" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border">
                          {post.category || 'General'}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-base leading-7 text-muted mb-4 flex-1 line-clamp-3">
                        {truncateText(post.excerpt, 3)}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-muted mb-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-muted/10 text-muted border border-border">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">No blog posts yet</h3>
              <p className="text-muted">
                Check back soon for the latest insights and articles.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </Section>
  );
};
