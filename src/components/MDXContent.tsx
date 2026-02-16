'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom components for MDX
const components: Partial<Components> = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 mt-12 leading-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-8 leading-tight" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-6" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="text-foreground mb-6 leading-8 text-lg" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside text-foreground mb-6 space-y-3 ml-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside text-foreground mb-6 space-y-3 ml-4" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-foreground leading-8 text-lg" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-accent" {...props}>
      {children}
    </em>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-accent hover:text-accent/80 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-accent pl-6 py-5 my-8 bg-muted/10 rounded-r-lg"
      {...props}
    >
      <div className="text-foreground text-lg italic leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code className="bg-muted/10 text-accent px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="bg-muted/10 border border-border rounded-lg p-4 overflow-x-auto mb-8 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-border rounded-lg overflow-hidden" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-muted/10" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="bg-background" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="border-b border-border" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 text-left text-foreground font-semibold border-r border-border last:border-r-0" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-foreground border-r border-border last:border-r-0" {...props}>
      {children}
    </td>
  ),
  img: ({ src, alt, ...props }) => (
    <div className="my-6 relative w-full h-auto text-center">
      <img
        src={src || ''}
        alt={alt || ''}
        className="rounded-lg border border-border object-cover mx-auto max-w-full h-auto"
        {...props}
      />
      {alt && (
        <p className="text-center text-muted text-sm mt-2 italic">
          {alt}
        </p>
      )}
    </div>
  ),
};

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none">
      <ReactMarkdown
        components={{
          ...components,
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const isInline = !match;
            
            if (isInline) {
              return (
                <code
                  className="bg-muted/10 text-accent px-2 py-1 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <SyntaxHighlighter
                style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                language={language}
                PreTag="div"
                className="rounded-lg"
                {...(props as Record<string, unknown>)}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

