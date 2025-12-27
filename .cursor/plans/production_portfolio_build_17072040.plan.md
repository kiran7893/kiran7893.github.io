---
name: Production Portfolio Build
overview: Build a production-grade personal portfolio for Myadaram Sai Kiran following clean architecture, anti-vibe-coded design principles, and modern UI/UX. The portfolio will feature a strict design system, consistent spacing, subtle animations, and all sections (Hero, About, Experience, Projects, Skills, Contact) with proper SEO and deployment readiness.
todos: []
---

# Production

Portfolio Build Plan

## Architecture Overview

The portfolio will follow a feature-based folder structure with strict separation of concerns. Each feature owns its UI, constants, and has zero cross-feature coupling. The design system will enforce consistency to avoid "vibe coded" patterns.

## Phase 1: Project Setup & Dependencies

### 1.1 Install Required Dependencies

- Add Tailwind CSS with proper configuration
- Install Framer Motion for subtle animations
- Install React Router for navigation
- Configure Prettier for code formatting
- Update ESLint config for strict TypeScript rules

### 1.2 Configure Tailwind CSS

- Set up `tailwind.config.ts` with design tokens:
- 8-point spacing scale (8, 16, 24, 32, 40, 48, 64, 80, 96, 128)
- Consistent border radius system (4px, 8px, 12px only)
- Disciplined color palette (avoid purple gradients)
- Typography scale with consistent line heights
- Configure dark mode support (CSS variables, no toggle initially)

### 1.3 Project Structure Setup

Create the following folder structure:

```javascript
src/
├── app/
│   ├── App.tsx (layout shell only)
│   ├── routes.tsx (route definitions)
│   └── providers.tsx (context providers)
├── features/
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   └── contact/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── Link.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       └── HoverElevation.tsx
├── data/
│   └── profile.ts (single source of truth)
├── styles/
│   ├── globals.css (Tailwind imports + custom CSS variables)
│   └── typography.css (type scale)
├── utils/
│   └── constants.ts
└── main.tsx
```



## Phase 2: Design System Implementation

### 2.1 Core Design Tokens

- **Spacing**: 8-point scale (8, 16, 24, 32, 40, 48, 64, 80, 96, 128)
- **Border Radius**: Only 4px (small), 8px (medium), 12px (large)
- **Typography**: 
- Heading font: System font stack (Inter-like)
- Body font: System font stack
- Type scale: Consistent sizes with proper line heights
- **Colors**: Disciplined palette (no purple gradients, no neon effects)
- **Shadows**: Single elevation system (subtle, consistent)

### 2.2 Reusable UI Components

Create small, composable components in `components/ui/`:

- `Button.tsx`: Consistent styling, loading states, subtle hover
- `Card.tsx`: Standard padding, border radius, elevation
- `Section.tsx`: Consistent section spacing and container widths
- `Link.tsx`: Accessible, consistent link styling

### 2.3 Animation Components

Create subtle animation wrappers in `components/animations/`:

- `FadeIn.tsx`: Section fade-in on scroll (subtle, purposeful)
- `SlideIn.tsx`: Directional slide animations
- `HoverElevation.tsx`: Subtle card elevation on hover (no aggressive lifting)

## Phase 3: Data Layer

### 3.1 Profile Data (`data/profile.ts`)

Create single source of truth with:

- Personal info (name, location, role)
- Social links (GitHub, LinkedIn, email, resume)
- Experience data (Indhic Software, freelance, internships)
- Projects data (Data Annotation SaaS, Desktop AI Agent, WebSolutions)
- Skills data (grouped: Languages, Frameworks, Cloud, GenAI)
- About summary (concise, GenAI/RAG/cloud focused)

## Phase 4: Feature Implementation

### 4.1 Layout Components

- **Header.tsx**: Clean navigation, no semi-transparent blur, proper contrast
- **Footer.tsx**: Professional copyright text, functional social links
- **Container.tsx**: Consistent max-widths, proper padding

### 4.2 Hero Feature (`features/hero/`)

- Name + role display
- Impactful tagline (AI-driven full-stack systems)
- CTA buttons (GitHub, LinkedIn, Resume) with loading states
- Subtle fade-in animation
- No sparkles, no purple gradients, no emoji overload

### 4.3 About Feature (`features/about/`)

- Concise summary from profile data
- Emphasis on GenAI, RAG, cloud, ownership mindset
- Clean typography, proper spacing

### 4.4 Experience Feature (`features/experience/`)

- Timeline or card layout
- Indhic Software as primary focus
- Freelance + internship roles
- Bullet points optimized for clarity
- Consistent card styling

### 4.5 Projects Feature (`features/projects/`)

- Data Annotation SaaS
- Desktop AI Agent App
- WebSolutions (MERN)
- Project cards with consistent styling
- Subtle hover elevation (not aggressive)

### 4.6 Skills Feature (`features/skills/`)

- Grouped display: Languages, Frameworks, Cloud, GenAI
- Clean grid layout (properly aligned)
- Consistent icon/text sizing (no massive icons)

### 4.7 Contact Feature (`features/contact/`)

- Email, LinkedIn, GitHub links
- All links functional (no placeholders)
- Proper form if needed (with loading states)

## Phase 5: App Structure

### 5.1 App.tsx Cleanup

- Remove all boilerplate code
- Only initialize providers
- Define layout shell (Header, main content, Footer)
- Mount routes
- No business logic, no large JSX blocks

### 5.2 Routes Configuration

- Set up React Router
- Define routes for all sections
- Implement smooth scrolling for anchor links

### 5.3 Providers Setup

- Router provider
- Any theme providers (if needed)
- Animation context (if needed)

## Phase 6: Styling & Polish

### 6.1 Remove All Inline Styles

- Replace with Tailwind utilities
- Remove App.css and unused CSS files
- Consolidate to globals.css

### 6.2 Typography System

- Define consistent heading sizes
- Proper line heights
- Consistent text weights (not too thick, not too light)

### 6.3 Responsive Design

- Mobile-first approach
- Test all breakpoints
- No text overflow, no layout collapse
- Proper button sizing on mobile

## Phase 7: SEO & Meta Tags

### 7.1 HTML Meta Tags

- Update `index.html` with proper title
- Add meta description
- Add OpenGraph tags
- Add Twitter card tags

### 7.2 Favicon & Assets

- Replace default Vite favicon
- Add proper favicon.ico
- Optimize all images

## Phase 8: Code Quality

### 8.1 TypeScript Strictness

- No `any` types
- Proper interfaces for all data
- Type-safe component props

### 8.2 ESLint Configuration

- Strict TypeScript rules
- React best practices
- Import organization

### 8.3 Prettier Configuration

- Consistent formatting
- Proper line lengths
- Consistent quotes

## Phase 9: Documentation

### 9.1 README.md

Create professional README with:

- Project overview
- Tech stack details
- Folder structure explanation
- Local setup instructions
- Build & deploy steps
- Performance & SEO notes
- Design system documentation

### 9.2 Environment Setup

- Create `.env.example` file
- Document required environment variables (if any)

## Phase 10: Deployment Readiness

### 10.1 Build Configuration

- Optimize Vite build config
- Ensure production builds work
- Test build output

### 10.2 Deployment Files

- Add Vercel configuration (if needed)
- Add Netlify configuration (if needed)
- Add GitHub Pages configuration (if needed)

### 10.3 Performance Optimization

- Code splitting
- Image optimization
- Lazy loading for sections

## Anti-Vibe-Coded Checklist

Every component and page must pass:

- ✅ No purple gradients (unless brand-justified)
- ✅ No sparkle emojis
- ✅ Subtle hover animations only
- ✅ No emojis as UI elements
- ✅ Consistent 8-point spacing
- ✅ Standardized border radiuses (4px, 8px, 12px only)
- ✅ Proper typography hierarchy
- ✅ Loading states for all async operations
- ✅ Functional social links
- ✅ Proper grid alignment
- ✅ Mobile-responsive
- ✅ Complete meta tags
- ✅ Specific, grounded copy (no generic taglines)
- ✅ Consistent component styling
- ✅ Subtle, purposeful animations only

## Key Files to Create/Modify

1. `src/app/App.tsx` - Clean layout shell
2. `src/app/routes.tsx` - Route definitions
3. `src/data/profile.ts` - Single source of truth for all data
4. `src/components/ui/*` - Reusable UI components
5. `src/features/*` - Feature modules
6. `tailwind.config.ts` - Design system tokens