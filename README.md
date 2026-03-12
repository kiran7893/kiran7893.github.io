# Portfolio - Next.js Version

Portfolio website built with Next.js 16, configured for GitHub Pages deployment.

## Features

- Portfolio sections (Hero, About, Experience, Projects, Skills, Contact)
- Blog with MDX support
- Static export for GitHub Pages
- Tailwind CSS styling
- Framer Motion animations

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Analytics (GA4)

1. Copy `.env.example` to `.env.local` and set your measurement ID:

```bash
cp .env.example .env.local
# then set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
```

2. GA4 events tracked by this site:
   - `page_view` for route changes (home, blog list, blog posts)
   - `resume_click` when the Resume button is opened
   - `blog_post_click` when a blog post is opened from the blog list
   - `blog_nav_click` when Blog is opened from header navigation
   - `github_click` and `linkedin_click` for profile/social clicks
   - `contact_email_click` for mail clicks from hero/header/contact section
   - `outbound_link_click` for external and `mailto:` links through shared link components
   - `project_demo_click` and `project_preview_click` for project engagement

3. In GA4 Data Stream settings, enable Enhanced Measurement.

4. In GA4 Admin -> Events, mark `resume_click` as a conversion if resume opens are a KPI.

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup

1. Push this repository to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/myadaramsaikiran/myadaramsaikiran.github.io.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# The out/ directory contains the static files
# Deploy the contents of out/ to GitHub Pages
```

## Blog

Blog posts are stored in `content/blog/` as MDX files with frontmatter.

## Tech Stack

- Next.js 16.0.10
- React 19
- TypeScript
- Tailwind CSS v4
- MDX for blog posts
- Framer Motion for animations
