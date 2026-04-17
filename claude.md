# Wanderlust Wendy — Project Navigation & Routing
**Version 1.0 — Astro Blog Rebuild (Phase 1)**

---

## Quick Start for Claude

This document explains the project structure so you can navigate efficiently and understand what goes where.

### Project Goal
Rebuild wanderlustwendy.com from WordPress → static Astro site, deployed on GitHub Pages.

### Tech Stack
- **Framework:** Astro (SSG, markdown-native, zero JavaScript by default)
- **Styling:** Tailwind CSS (utility-first, responsive)
- **Content:** MDX/Markdown files in `src/content/blog/`
- **Deployment:** GitHub Pages (no domain changes to existing site)
- **Phase 1 Scope:** 5 blog posts + core pages (Home, Destinations, Living Abroad, Bucket List, Contact)

---

## Folder Structure & What Lives Where

```
wanderlustwendy.com/
├── claude.md                              ← YOU ARE HERE
├── PROJECT-NOTES.md                       # Project status, decisions, notes
├── wanderlustwendy-brief.md              # Original project brief (reference only)
│
├── src/
│   ├── BRAND.md                          # Brand voice, tone, philosophy
│   ├── components/                       # Reusable UI components
│   │   ├── README.md                     # Component guidelines
│   │   ├── Header.astro
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   │
│   ├── layouts/                          # Page layout templates
│   │   ├── README.md                     # Layout documentation
│   │   ├── BaseLayout.astro              # Default layout (header, nav, footer)
│   │   └── PostLayout.astro              # Blog post template
│   │
│   ├── pages/                            # Static pages (home, destinations, etc.)
│   │   ├── README.md                     # Page structure & URL routing
│   │   ├── index.astro                   # Home page (/)
│   │   ├── destinations.astro            # Destinations page (/destinations)
│   │   ├── living-abroad.astro           # Living Abroad page (/living-abroad)
│   │   ├── bucket-list.astro             # Bucket List page (/bucket-list)
│   │   ├── contact.astro                 # Contact page (/contact)
│   │   └── blog/
│   │       └── [slug].astro              # Dynamic blog post template
│   │
│   ├── content/                          # Blog post content (Markdown/MDX)
│   │   └── blog/
│   │       ├── README.md                 # Content guidelines & frontmatter format
│   │       ├── hello-again.md            # Post 1: Hello, Again! (Reflection)
│   │       ├── sapa-vietnam-hiking.md    # Post 2: Sapa Vietnam (Travelogue)
│   │       ├── ha-giang-car-tour.md      # Post 3: Ha Giang (Travelogue)
│   │       ├── saigon-living-guide.md    # Post 4: Saigon Living (Living Abroad)
│   │       └── around-the-world-travel.md # Post 5: Around World Travel (Travelogue)
│   │
│   ├── assets/                           # Static assets (fonts, etc.)
│   │   ├── README.md                     # Assets documentation
│   │   └── fonts/                        # Inria Serif, Cabin (self-hosted)
│   │
│   └── styles/                           # Global styles, Tailwind config
│       └── globals.css                   # Custom CSS (color vars, spacing, etc.)
│
├── public/                               # Public static files
│   ├── images/                           # Blog post images, favicon, etc.
│   │   └── README.md                     # Image guidelines & naming
│   └── robots.txt                        # SEO
│
├── astro.config.mjs                      # Astro configuration
├── tailwind.config.mjs                   # Tailwind CSS configuration
├── package.json                          # Dependencies (Astro, Tailwind, etc.)
└── package-lock.json
```

---

## File Descriptions

### Root Level

| File | Purpose |
|------|---------|
| **claude.md** | This file — routing & navigation for Claude |
| **PROJECT-NOTES.md** | Decisions made, current status, blockers, next steps |
| **wanderlustwendy-brief.md** | Original project brief (reference for requirements) |

### `src/BRAND.md`
**What:** Brand voice, tone, philosophy, design principles  
**Who updates it:** Xavier (you) when refining brand direction  
**Claude uses it:** Before writing copy, designing components, or making design decisions  
**Contains:**
- Voice & tone examples
- What Wendy represents (honest, reflective, warm, NOT influencer-y)
- Design aesthetic (minimal, editorial, warm muted tones)
- No-nos (sponsored posts, AI-generated content, stock photos)

### `src/components/README.md`
**What:** Guidelines for building & maintaining UI components  
**Contains:**
- Component naming convention
- Props patterns
- Styling approach (Tailwind classes)
- How each component (Header, Nav, Footer, PostCard) fits together

### `src/layouts/README.md`
**What:** Layout template documentation  
**Contains:**
- How BaseLayout works (wraps every page)
- How PostLayout works (wraps blog posts)
- Slot structure, props, metadata handling

### `src/pages/README.md`
**What:** Page structure & URL routing  
**Contains:**
- URL pattern: how files map to routes
- Which pages exist in Phase 1
- Navigation structure (Home | Destinations | Bucket List | Living Abroad | Contact)

### `src/content/blog/README.md`
**What:** Blog content guidelines & frontmatter format  
**Contains:**
- Frontmatter template (title, date, category, excerpt, slug, featured)
- Post naming convention: `slug-format.md`
- Content guidelines: word count, images, alt text, internal links
- How to organize posts by category
- Writing voice reminders (reference BRAND.md)

### `public/images/README.md`
**What:** Image organization & optimization guidelines  
**Contains:**
- Image naming convention: `post-slug--image-name.jpg`
- Image requirements: format, dimensions, alt text
- Where images go (public/images/ directory)
- How to reference in Markdown posts

---

## Development Workflow (for Claude)

When building this site, follow this order:

### Phase 1A: Setup (Day 1)
1. Create Astro scaffold: `npm create astro@latest wanderlustwendy`
2. Add Tailwind: `npx astro add tailwind`
3. Add Sitemap: `npx astro add sitemap`
4. Create folder structure (✓ already done)
5. Set up Tailwind config with color palette & fonts

### Phase 1B: Design System (Days 2-3)
1. Create `src/styles/globals.css` with Tailwind color variables
2. Download & self-host Inria Serif + Cabin fonts
3. Build `BaseLayout.astro` (header, nav, footer wrapper)
4. Build `Header.astro`, `Nav.astro`, `Footer.astro` components
5. Test responsive layout on mobile/tablet/desktop

### Phase 1C: Pages (Days 4-6)
1. Create `PostLayout.astro` for blog post template
2. Build `pages/index.astro` (Home)
3. Build `pages/blog/[slug].astro` (dynamic blog post route)
4. Build `pages/destinations.astro`
5. Build `pages/living-abroad.astro`
6. Build `pages/bucket-list.astro`
7. Build `pages/contact.astro`

### Phase 1D: Content (Days 7-8)
1. Fetch 5 posts from live URLs
2. Convert to Markdown files with frontmatter
3. Add to `src/content/blog/`
4. Verify all posts render correctly

### Phase 1E: SEO & Deployment (Day 9)
1. Add meta tags to BaseLayout (title, description, OG tags, Twitter cards)
2. Add JSON-LD schema to PostLayout
3. Configure Sitemap plugin
4. Create GitHub Actions workflow for auto-deploy to GitHub Pages
5. Test build & deployment

---

## Key Design System Colors

| Use | Hex | Tailwind |
|-----|-----|----------|
| Background | `#ffffff` | white |
| Body text | `#141313` | gray-900 |
| Headings | `#1f1d1d` | gray-900 |
| Card/section bg | `#f5f0eb` | amber-50 |
| Accent (links, hover) | `#b72e09` | red-700 |
| Secondary accent | `#c48f8f` | rose-400 |
| Nav links | `#2e2b2b` | gray-800 |

---

## Key Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inria Serif | 58px / 36px mobile | 700 |
| H2 | Inria Serif | 36px | 700 |
| H3 | Inria Serif | 24px | 600 |
| Body | Cabin | 18px | 400 |
| Nav | Cabin | 15px | 400–500 |
| Meta (date, category) | Cabin | 14px | 400 |
| Line height | — | 1.6 | — |

---

## Links to Important Docs

- **Brand Voice:** `src/BRAND.md` — tone, philosophy, design principles
- **Content Guidelines:** `src/content/blog/README.md` — frontmatter, post format
- **Component Library:** `src/components/README.md` — building blocks
- **Page Routing:** `src/pages/README.md` — URL structure
- **Original Brief:** `wanderlustwendy-brief.md` — full requirements

---

## Common Tasks (For Reference)

### "I need to write a blog post"
1. Read `src/content/blog/README.md` for frontmatter format
2. Read `src/BRAND.md` for voice & tone
3. Create `slug-format.md` in `src/content/blog/`
4. Include hero image in `public/images/`
5. Reference image with alt text in post

### "I need to create a new component"
1. Create `.astro` file in `src/components/`
2. Follow naming & props patterns in `src/components/README.md`
3. Use Tailwind classes from design system (colors, spacing, typography)
4. Add to BaseLayout or appropriate page

### "I need to add a new page"
1. Create `.astro` file in `src/pages/`
2. Wrap with `BaseLayout`
3. Add navigation link in `Nav.astro` if it should appear in menu
4. Follow URL pattern in `src/pages/README.md`

### "I'm deploying to GitHub Pages"
1. Ensure `astro.config.mjs` has `site: 'https://github-username.github.io/wanderlustwendy'`
2. GitHub Actions workflow auto-deploys on push to `main`
3. Check GitHub Pages settings: source = GitHub Actions

---

## Project Status

**Phase:** Phase 1 — Setup & 5 posts  
**Status:** [See PROJECT-NOTES.md for current progress]  
**Next Steps:** [See PROJECT-NOTES.md]  
**Blockers:** [See PROJECT-NOTES.md]

---

**Last Updated:** April 14, 2026  
**Owner:** Xavier XVI (learning exercise for wanderlustwendy.com rebuild)
