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
