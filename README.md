# Portfolio - Myadaram Sai Kiran

A production-grade personal portfolio website built with modern web technologies, following clean architecture principles and anti-vibe-coded design standards.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **ESLint + Prettier** - Code quality and formatting

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx          # Main app component (layout shell)
│   └── providers.tsx    # Context providers (Router, etc.)
├── features/
│   ├── hero/            # Hero section feature
│   ├── about/           # About section feature
│   ├── experience/      # Experience section feature
│   ├── projects/        # Projects section feature
│   ├── skills/          # Skills section feature
│   └── contact/         # Contact section feature
├── components/
│   ├── layout/          # Layout components (Header, Footer, Container)
│   ├── ui/              # Reusable UI components (Button, Card, Section, Link)
│   └── animations/      # Animation wrappers (FadeIn, SlideIn, HoverElevation)
├── data/
│   └── profile.ts       # Single source of truth for all profile data
├── styles/
│   └── globals.css      # Global styles with Tailwind imports
├── utils/
│   └── constants.ts     # App-wide constants
└── main.tsx             # Application entry point
```

## 🎨 Design System

### Spacing
- **8-point scale**: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128px
- Consistent spacing throughout the application

### Border Radius
- **Small**: 4px
- **Medium**: 8px
- **Large**: 12px
- Only these three values are used

### Typography
- System font stack for optimal performance
- Consistent heading hierarchy (h1-h4)
- Proper line heights and spacing

### Colors
- Disciplined color palette (no purple gradients)
- Dark mode support via CSS variables
- High contrast for accessibility

### Animations
- Subtle, purposeful animations only
- Framer Motion for smooth transitions
- No aggressive hover effects

## 🛠️ Local Setup

### Prerequisites
- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint code
bun run lint
```

## 📝 Configuration

### Environment Variables

Create a `.env` file based on `.env.example` if you need environment-specific configuration.

### Profile Data

Edit `src/data/profile.ts` to update:
- Personal information
- Social links
- Experience entries
- Projects
- Skills

## 🚢 Deployment

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic on push)

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `bun run build`
4. Publish directory: `dist`

### GitHub Pages

1. Update `vite.config.ts` with base path
2. Build: `bun run build`
3. Deploy `dist` folder to `gh-pages` branch

## ⚡ Performance & SEO

- **Code splitting**: Automatic via Vite
- **Image optimization**: Optimize images before adding
- **Lazy loading**: Sections load on scroll
- **Meta tags**: Complete OpenGraph and Twitter card support
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🎯 Design Principles

This portfolio follows strict anti-vibe-coded principles:

- ✅ No purple gradients (unless brand-justified)
- ✅ No sparkle emojis
- ✅ Subtle hover animations only
- ✅ No emojis as UI elements
- ✅ Consistent 8-point spacing
- ✅ Standardized border radiuses
- ✅ Proper typography hierarchy
- ✅ Loading states for async operations
- ✅ Functional social links
- ✅ Proper grid alignment
- ✅ Mobile-responsive
- ✅ Complete meta tags
- ✅ Specific, grounded copy
- ✅ Consistent component styling

## 📄 License

Private project - All rights reserved

## 👤 Author

**Myadaram Sai Kiran**
- Location: Hyderabad, Telangana, India
- Role: Full-Stack Engineer | AI Systems Builder

---

Built with intention, not vibes.
