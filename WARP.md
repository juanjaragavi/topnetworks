# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**TopNetworks Inc.** is a cutting-edge technology company specializing in optimizing digital advertising through programmatic networks. This repository contains the official landing page built with **Astro 5.0 + Tailwind CSS** using the Astrowind template.

- **Primary Language**: Spanish (targeting Spanish-speaking audience)
- **Framework**: Astro 5.0 with React components
- **Styling**: Tailwind CSS with dark mode support
- **Deployment Target**: https://topnetworks.co

## Quick Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 4000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Code quality checks
npm run check          # Run all checks (astro, eslint, prettier)
npm run check:astro    # Check Astro syntax
npm run check:eslint   # Check ESLint rules
npm run check:prettier # Check Prettier formatting

# Auto-fix code issues
npm run fix           # Fix both ESLint and Prettier issues
npm run fix:eslint    # Auto-fix ESLint issues
npm run fix:prettier  # Auto-format with Prettier

# Git workflow automation (from dev branch)
bash ./scripts/git-workflow.sh
```

## Architecture & Project Structure

### Core Technologies Stack
- **Astro 5.0**: Static site generator with island architecture
- **React 19**: For interactive components via `@astrojs/react`
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **MDX**: For blog content with component support
- **TypeScript**: Type safety with strict null checks
- **Vite**: Build tooling and HMR

### Key Directories

```
src/
├── assets/         # Static assets (images, styles, favicons)
├── components/     # Reusable Astro/React components
│   ├── blog/       # Blog-specific components
│   ├── common/     # Shared UI components
│   ├── ui/         # Base UI elements
│   └── widgets/    # Page sections (Header, Footer, etc.)
├── content/        # Content collections (blog posts)
├── layouts/        # Page layouts (Landing, Page, Markdown)
├── pages/          # File-based routing
├── utils/          # Helper functions and utilities
├── config.yaml     # Site-wide configuration
└── navigation.ts   # Navigation menu structure
```

### Important Configuration Files

- **`src/config.yaml`**: Main site configuration (metadata, SEO, blog settings)
- **`astro.config.ts`**: Astro build configuration and integrations
- **`tailwind.config.js`**: Tailwind CSS customization
- **`tsconfig.json`**: TypeScript configuration with path aliases (`~/` → `src/`)

## Development Workflow

### Branch Strategy
- **`dev`**: Active development branch
- **`main`**: Production branch
- **`backup`**: Backup/recovery branch

### Git Automation
The project includes an automated Git workflow script (`scripts/git-workflow.sh`) that:
1. Validates you're on the `dev` branch
2. Stages all changes
3. Resolves merge conflicts automatically
4. Commits using message from `src/lib/documents/commit-message.txt` (if exists)
5. Pushes to origin
6. Optionally merges to `main` and `backup` branches

### Commit Process with Cline Rules
When prompted with "Push and commit our latest changes":
1. Clear `src/lib/documents/commit-message.txt`
2. Check git status
3. Write descriptive commit message to the file
4. Execute: `bash ./scripts/git-workflow.sh`

## Testing & Quality

### Linting Rules
- **ESLint**: Configured for Astro, TypeScript, and React
- **Prettier**: 120 character line width, single quotes, ES5 trailing commas
- Unused variables must be prefixed with `_` to be ignored

### GitHub Actions CI/CD
Automated testing on push/PR to main:
- Node.js matrix testing (v18, v20, v22)
- Build verification
- Code quality checks (ESLint, Prettier, Astro check)

## Content Management

### Blog System
- **Location**: `src/content/post/`
- **Formats**: Markdown (`.md`) and MDX (`.mdx`)
- **Features**: Categories, tags, RSS feed, related posts
- **URL Pattern**: `/blog/[slug]`

### TopNetworks Content Strategy
The site includes specialized portals:
- **TopFinanzas**: Personal finance community (Mexico, USA, UK markets)
- **BudgetBee**: Financial guidance for Gen Z and Millennials

## Performance Optimizations

- **Image Optimization**: Via Astro Assets and Unpic
- **Compression**: HTML, CSS, JS minification via `astro-compress`
- **Lazy Loading**: Images load on intersection
- **Sitemap Generation**: Automatic based on routes
- **Open Graph Tags**: Social media optimization

## Environment-Specific Settings

### Development Server
- **Port**: 4000 (configured in package.json and astro.config.ts)
- **HMR Host**: topnetworks.co
- **Allowed Preview Hosts**: topnetworks.co, www.topnetworks.co, localhost

### Production
- **Output**: Static site generation
- **Site URL**: https://topnetworks.co
- **Trailing Slash**: Disabled

## Key Business Context

TopNetworks specializes in:
- Programmatic advertising optimization
- Performance marketing in financial sector
- Mobile-first content strategy
- Spanish-speaking market focus

The landing page should reflect:
- Clear value proposition for advertisers and users
- Financial solutions and educational content
- Trust indicators and performance metrics
- Mobile-optimized user experience

## Integration Points

### Analytics
- Google Analytics integration ready (configure ID in `src/config.yaml`)
- Google Site Verification configured

### External Services
- Partytown for third-party scripts (when enabled)
- RSS feed generation at `/rss.xml`

## Path Aliases

Use `~` as shorthand for the `src` directory:
```typescript
import Component from '~/components/Component.astro'
import { utility } from '~/utils/utility'
```

## Deployment Checklist

1. Update `src/config.yaml` with production values
2. Configure Google Analytics ID
3. Verify SEO metadata and Open Graph tags
4. Test all responsive breakpoints
5. Validate Spanish language content
6. Run `npm run check` for code quality
7. Build with `npm run build`
8. Preview with `npm run preview`
9. Deploy `dist/` folder to hosting service

## Additional Resources

- **Business Documentation**: `.clinerules/2-WHAT-IS-TOPNETWORKS.md`
- **Development Rules**: `.clinerules/1-RULES.md`
- **Astro Documentation**: https://docs.astro.build/
- **Astrowind Template**: Base template documentation
