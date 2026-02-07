'use client';

import { useState } from 'react';
import { Section } from '../../components/ui/Section';
import { FadeIn } from '../../components/animations/FadeIn';
import { Link } from '../../components/ui/Link';
import { profileData } from '../../data/profile';
import Image from 'next/image';
import {
  YouTubeModal,
  getYouTubeVideoId,
  getYouTubeThumbnail,
} from './YouTubeModal';

/** Extract a clean domain name from a URL, falling back to "Live Demo" for ugly cloud/preview URLs */
const getDomainFromUrl = (url: string): string => {
  try {
    const hostname = new URL(url).hostname.replace('www.', '');
    if (
      hostname.includes('.a.run.app') ||
      hostname.includes('.vercel.app') ||
      hostname.includes('.netlify.app')
    ) {
      return 'Link';
    }
    return hostname;
  } catch {
    return 'Link';
  }
};

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Section id="projects" className="!pt-0 !pb-4 md:!pb-6">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl mb-10 md:mb-14">Projects</h2>
      </FadeIn>

      <div className="space-y-16">
        {profileData.projects.map((project, index) => {
          const videoId = project.video
            ? getYouTubeVideoId(project.video)
            : null;

          return (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article className="border-b border-border pb-12 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Project Details - Left Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {project.title}
                    </h3>
                    {(project.context || project.link || project.github) && (
                      <div className="flex items-center gap-6 mb-4">
                        {project.context && (
                          <span className="text-sm text-muted/70">
                            {project.context}
                          </span>
                        )}
                        {project.link && (
                          <Link
                            href={project.link}
                            external
                            className="text-sm"
                          >
                            {getDomainFromUrl(project.link)} →
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            external
                            className="text-sm"
                          >
                            GitHub →
                          </Link>
                        )}
                      </div>
                    )}

                    <p className="text-base leading-relaxed text-foreground mb-5">
                      {project.solution}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full bg-muted/10 text-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Video - Right Side (YouTube) */}
                  {videoId && (
                    <button
                      onClick={() => setActiveVideo(videoId)}
                      className="block md:w-80 lg:w-96 flex-shrink-0 group cursor-pointer"
                      aria-label={`Play ${project.title} demo video`}
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted/5 transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-lg group-hover:shadow-foreground/5 group-hover:-translate-y-1">
                        <Image
                          src={getYouTubeThumbnail(videoId)}
                          alt={`${project.title} video thumbnail`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          unoptimized
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="ml-1"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                        </div>
                        {/* Bottom label */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-medium">
                            Watch Demo →
                          </span>
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Project Image - Right Side (with link) */}
                  {!videoId && project.image && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block md:w-80 lg:w-96 flex-shrink-0 group"
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted/5 transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-lg group-hover:shadow-foreground/5 group-hover:-translate-y-1">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-medium">
                            View Project →
                          </span>
                        </div>
                      </div>
                    </a>
                  )}

                  {/* Image without link - just display */}
                  {!videoId && project.image && !project.link && (
                    <div className="md:w-80 lg:w-96 flex-shrink-0">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted/5">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <YouTubeModal
          videoId={activeVideo}
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </Section>
  );
};
