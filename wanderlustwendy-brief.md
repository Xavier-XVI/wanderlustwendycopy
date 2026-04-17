# Wanderlust Wendy — Site Rebuild Brief for Claude Code

> This document is a complete briefing for rebuilding wanderlustwendy.com as a modern static site.
> Read this fully before writing any code or making any design decisions.

---

## 1. Project Overview

**Site:** wanderlustwendy.com  
**Owner:** Wendy — twin mom, based in Taichung, Taiwan  
**Goal:** Rebuild the existing WordPress blog as a modern, fast, SEO-optimised static site hosted on GitHub (GitHub Pages or Vercel). Keep the soul and aesthetic of the current site, but modernise the design and improve performance and SEO.

### Phase 1 Scope (this build)
- Build the **shell** of the site with all pages and navigation
- Migrate and display **5 blog posts** (listed in Section 6)
- Do **not** migrate the full archive yet — that is Phase 2

---

## 2. About Wendy & The Blog

### Who She Is
- Taiwanese-American woman, ~40 years old, based in Taichung, Taiwan
- Twin boys mother (boys are young, pre-school/early school age)
- Multilingual: Mandarin, English, French, Taiwanese Hokkien, basic Vietnamese
- Former Peace Corps volunteer (Cameroon, ~2008)
- Former expat: Shanghai (6 years, ~2012–2018), Saigon/Ho Chi Minh City (~1.5 years, 2019–2020)
- World traveller: 40+ countries visited
- Le Wagon coding bootcamp graduate (Shanghai, 2018)
- Type-A, list-maker, reflective, intellectually curious

### Blog's New Direction (2026 onward)
The blog is relaunching with a new focus:
- **Worldschooling** — exploring alternative education for the twins
- **Raising multilingual, multicultural children**
- **Family travel and adventures**
- **Motherhood reflections**
- **Personal growth & life philosophy**

### Content That Still Lives on the Site (archive)
- **Destinations** — travel travelogues (Vietnam, Paris, London, RTW trip, etc.)
- **Living Abroad** — three sub-chronicles:
  - *Saigon Chronicle* (2019–2020)
  - *Shanghai Story* (2012–2018)
  - *Peace Corps* (2008-era, Cameroon)
- **Bucket List** — personal life & travel bucket list

### Voice & Tone
- Honest, reflective, self-deprecating, warm
- NOT influencer-y, NOT sponsored, NOT AI-generated
- Writes like a thoughtful friend sharing real life lessons
- Dislikes tourist traps and conventional thinking
- Explicitly rejects sponsored posts and paid promotions

---

## 3. Recommended Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Astro** | Perfect for content-heavy blogs. Markdown-native, blazing fast, zero JS by default, excellent SEO |
| Styling | **Tailwind CSS** | Utility-first, easy to maintain, great for responsive design |
| Content | **MDX / Markdown** | Wendy can write posts in `.md` files — no CMS needed |
| Deployment | **GitHub Pages or Vercel** | Free, fast, integrates with GitHub |
| Fonts | Google Fonts (self-hosted via Astro) | **Inria Serif** (headings) + **Cabin** (body) |

### Project Structure (suggested)
```
wanderlustwendy/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   └── Nav.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── destinations.astro   # Destinations archive
│   │   ├── living-abroad.astro  # Living Abroad archive
│   │   ├── bucket-list.astro    # Bucket list page
│   │   ├── contact.astro        # Contact page
│   │   └── blog/
│   │       └── [slug].astro     # Dynamic post pages
│   └── content/
│       └── blog/
│           ├── hello-again.md
│           ├── one-week-sapa-vietnam.md
│           ├── ha-giang-tour.md
│           ├── saigon-living-guide.md
│           └── one-year-around-the-world.md
├── public/
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 4. Design System

### Colour Palette
| Name | Hex | Usage |
|---|---|---|
| White | `#ffffff` | Page background |
| Near-black | `#141313` | Body text |
| Dark heading | `#1f1d1d` | H1, H2 headings |
| Warm off-white | `#f5f0eb` | Cards, sidebar, section backgrounds |
| Accent red-orange | `#b72e09` | Links on hover, category labels, accents |
| Dusty rose | `#c48f8f` | Secondary accent, decorative elements, social icons hover |
| Nav dark | `#2e2b2b` | Navigation link colour |

### Typography
| Element | Font | Size | Weight |
|---|---|---|---|
| H1 | Inria Serif | 58px (desktop) / 36px (mobile) | 700 |
| H2 | Inria Serif | 36px | 700 |
| H3 | Inria Serif | 24px | 600 |
| Body | Cabin | 18px | 400 |
| Nav links | Cabin | 15px | 400–500 |
| Post meta | Cabin | 14px | 400 |
| Line height (body) | — | 1.6 | — |

### Layout
- **Max content width:** ~1200px centered
- **Navigation:** Horizontal top nav, transparent background, right-aligned links + social icons
- **Hero (home):** Large serif headline on left, decorative geometric illustration on right (abstract circles and lines — keep the current illustrated style)
- **Post cards:** Two-column grid on desktop, single column on mobile. Each card: title (serif), date, category tag, excerpt, read more link
- **Footer:** Two-column split — left: logo + tagline, right: social icons (email, Instagram, X/Twitter)
- **No sidebar** — clean, full-width reading experience on post pages

### Design Principles (modernise but keep the feel)
- Keep the **minimal, editorial aesthetic** — lots of white space
- Keep the **serif/sans-serif contrast** (Inria Serif headings, Cabin body)
- Keep the **warm, muted tone** — no bright colours, no gradients
- **Modernise** by: improving spacing rhythm, adding subtle hover transitions, making mobile experience cleaner, improving post typography (wider line-height, better paragraph spacing)
- The decorative geometric shapes (concentric circles, dot grids, abstract lines) are part of the brand — use them sparingly as section dividers or hero accents
- **No stock photography** on structural pages — keep it personal

---

## 5. Site Architecture & Pages

### Navigation (top-level)
```
Home | Destinations | Bucket List | Living Abroad | Contact
```
Plus social icons: Instagram (@wanderlustwlee), X/Twitter (@wanderlustwlee)

### Page Descriptions

#### Home (`/`)
- Hero section: large headline introducing Wendy ("Hello, I am Wendy..."), with her tagline: *Twin mom based in Taiwan. Exploring worldschooling & raising trilingual global citizens.*
- "Latest Thoughts" section — shows the most recent blog posts (3 max on homepage)
- Small "Welcome" blurb below posts
- No full sidebar

#### Destinations (`/destinations/`)
- Intro copy: *"When I plan for my travels, I'm frustrated by the time it takes to read through all the content in the blogosphere. My destination guides are the Best of the Blogosphere — saving you time and kickstarting your planning."*
- Grid of post cards filtered to the `travelogue` category
- Phase 1: show the 2 travel posts from the 5-post set

#### Living Abroad (`/living-abroad/`)
- Three sub-sections displayed on one page:
  1. **Saigon Chronicle** — life in Ho Chi Minh City 2019–2020
  2. **Shanghai Story** — life in Shanghai 2012–2018
  3. **Peace Corps** — Cameroon service ~2008
- Each sub-section has a heading and its own post grid
- Phase 1: show the 1 Living Abroad post from the 5-post set under the relevant sub-section

#### Bucket List (`/bucket-list/`)
- Static page — no post grid needed
- Structured list page with sections: Life Experiences, Travel, Countries Visited, Shanghai Specific
- Use checkmarks (✓) for completed items, plain bullets for pending
- Display last updated date: *Last updated: April 2020*

#### Contact (`/contact/`)
- Simple page
- Short intro: *"Thank you for visiting! I'm happy to answer questions and elaborate on my experiences."*
- Note: **No sponsored posts. No social media promotion services.**
- Contact methods:
  - Email: wendy@wanderlustwendy.com
  - Instagram: @wanderlustwlee
  - X/Twitter: @wanderlustwlee

---

## 6. Phase 1 — The 5 Blog Posts to Include

These are the posts to migrate for the initial build. Use real content from the site.

| # | Title | Slug | Category | Date |
|---|---|---|---|---|
| 1 | Hello, Again! | `hello-again` | Reflection | January 29, 2026 |
| 2 | One Week of Hiking and Relaxation in Sapa, Vietnam | `sapa-vietnam-hiking` | Travelogue / Destinations | October 6, 2021 |
| 3 | Five-Day Car Tour to Discover Vietnam's Ha Giang Region with YESD | `ha-giang-car-tour` | Travelogue / Destinations | June 22, 2021 |
| 4 | The Practical Guide to Saigon Living | `saigon-living-guide` | Living Abroad / Saigon Chronicle | September 7, 2020 |
| 5 | One Year of Around-the-World Travel on $55 a Day | `around-the-world-travel` | Travelogue / Destinations | July 3, 2020 |

### Post Frontmatter Format (for each `.md` file)
```yaml
---
title: "Hello, Again!"
date: 2026-01-29
category: "Reflection"
excerpt: "For years, 'start blog again' sat on my new year resolution. This year, I feel a certain fire underneath me to actually follow through."
slug: "hello-again"
featured: true
---
```

### Content for Post #1 (Hello, Again! — full text available)
Use the exact text from the live site. This is the most important post as it sets the new direction of the blog.

> For all other posts, fetch content from the live URLs below and use actual text — do not fabricate content:
> - https://wanderlustwendy.com/sapa-vietnam/
> - https://wanderlustwendy.com/ha-giang-region/
> - https://wanderlustwendy.com/saigon-living/
> - https://wanderlustwendy.com/around-the-world-travel/

---

## 7. SEO Requirements (build in from day one)

### Technical SEO
- [ ] Each page has a unique `<title>` tag: `{Page Title} — Wanderlust Wendy`
- [ ] Each page has a unique meta description (150–160 chars)
- [ ] Canonical URLs on all pages
- [ ] `sitemap.xml` auto-generated by Astro (`@astrojs/sitemap`)
- [ ] `robots.txt` allowing all crawlers
- [ ] Open Graph tags on all pages and posts (for social sharing)
- [ ] Twitter card meta tags
- [ ] Structured data (JSON-LD) on blog posts: `BlogPosting` schema
- [ ] Images have descriptive `alt` text
- [ ] All internal links use clean slugs (no query strings)

### Performance SEO
- [ ] Fonts self-hosted (no Google Fonts render-blocking)
- [ ] Images use `<img loading="lazy">` or Astro's Image component
- [ ] No unused JavaScript on static pages
- [ ] Core Web Vitals target: LCP < 2.5s, CLS < 0.1

### Content SEO
- [ ] Blog post URLs: `/blog/{slug}/`
- [ ] Category pages: `/destinations/`, `/living-abroad/`
- [ ] Breadcrumb navigation on post pages
- [ ] Post word count targets: 800–2000 words per post

---

## 8. Build Instructions for Claude Code

### Step 1 — Scaffold
```bash
npm create astro@latest wanderlustwendy -- --template minimal
cd wanderlustwendy
npx astro add tailwind
npx astro add sitemap
```

### Step 2 — Implement Design System
- Add Inria Serif and Cabin fonts (self-host via Fontsource or download from Google Fonts)
- Set up Tailwind config with the exact colour palette and font families from Section 4
- Build `BaseLayout.astro` with Header, Nav, Footer components

### Step 3 — Build Pages
Order: Home → Blog post template → Destinations → Living Abroad → Bucket List → Contact

### Step 4 — Migrate 5 Posts
- Create `.md` files in `src/content/blog/` with correct frontmatter
- For post #1 (Hello, Again!) use the full text provided above
- For posts #2–5, use placeholder excerpts and note that full content needs to be added

### Step 5 — SEO Layer
- Add all meta tags to BaseLayout
- Configure sitemap plugin
- Add JSON-LD to PostLayout

### Step 6 — Deploy Config
- Add `astro.config.mjs` with `site: 'https://wanderlustwendy.com'`
- Add GitHub Actions workflow for auto-deploy to GitHub Pages

---

## 9. What to Preserve vs. What to Improve

| Element | Preserve | Improve |
|---|---|---|
| Fonts (Inria Serif + Cabin) | ✓ | — |
| Colour palette | ✓ | — |
| Minimal white space aesthetic | ✓ | — |
| Geometric decorative shapes | ✓ | Use more intentionally |
| Navigation structure | ✓ | — |
| No sponsored content policy | ✓ | — |
| Mobile responsiveness | — | Full mobile-first rebuild |
| Typography rhythm | — | Improve spacing, reading width (65ch max) |
| Post card design | — | Modernise with cleaner hover states |
| Page load speed | — | Target 95+ Lighthouse score |
| SEO meta tags | — | Fully implement from scratch |
| Social sharing | — | Replace WordPress plugin with clean OG tags |
| Footer | ✓ mostly | Cleaner layout, better spacing |

---

## 10. Out of Scope for Phase 1

- Full archive migration (100+ posts)
- Search functionality
- Newsletter/email signup
- Comments system
- Analytics integration
- Image gallery pages
- Multi-language support (future consideration — Wendy is multilingual)

---

*Brief prepared: April 2026*  
*Site audited live at: wanderlustwendy.com*
