# Project Notes: Wanderlust Wendy Website Rebuild

**Project:** Rebuild wanderlustwendy.com from WordPress to static Astro site  
**Owner:** Xavier XVI (learning exercise)  
**Status:** Phase 1 — Documentation & Planning  
**Last Updated:** April 14, 2026

---

## Quick Status

| Category | Status | Notes |
|----------|--------|-------|
| **Documentation** | ✓ Complete | claude.md + 7 sub-docs created |
| **Folder Structure** | ✓ Complete | All folders created and documented |
| **Design System** | ✓ Defined | Colors, typography, brand voice documented |
| **Astro Setup** | Pending | Will run `npm create astro@latest` in Phase 1A |
| **Component Build** | Pending | Scheduled for Phase 1B |
| **Content Migration** | Pending | Fetch 5 posts from live site in Phase 1D |
| **Deployment** | Pending | GitHub Actions setup in Phase 1E |

---

## Phase 1 Timeline & Milestones

### Phase 1A: Setup (Day 1)
- [ ] Create Astro scaffold: `npm create astro@latest wanderlustwendy`
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add Sitemap: `npx astro add sitemap`
- [ ] Verify folder structure matches documentation
- [ ] Set up Tailwind config with color palette & fonts

### Phase 1B: Design System (Days 2–3)
- [ ] Create `src/styles/globals.css` with Tailwind color variables
- [ ] Download & self-host Inria Serif + Cabin fonts in `src/assets/fonts/`
- [ ] Build `BaseLayout.astro` (header, nav, footer wrapper)
- [ ] Build `Header.astro`, `Nav.astro`, `Footer.astro` components
- [ ] Test responsive layout on mobile/tablet/desktop

### Phase 1C: Pages (Days 4–6)
- [ ] Create `PostLayout.astro` for blog post template
- [ ] Build `pages/index.astro` (Home)
- [ ] Build `pages/blog/[slug].astro` (dynamic blog post route)
- [ ] Build `pages/destinations.astro`
- [ ] Build `pages/living-abroad.astro`
- [ ] Build `pages/bucket-list.astro`
- [ ] Build `pages/contact.astro`

### Phase 1D: Content (Days 7–8)
- [ ] Fetch 5 posts from live URLs
- [ ] Convert to Markdown with frontmatter
- [ ] Place in `src/content/blog/`
- [ ] Verify all posts render correctly

### Phase 1E: SEO & Deployment (Day 9)
- [ ] Add meta tags to BaseLayout (title, description, OG tags)
- [ ] Add JSON-LD schema to PostLayout
- [ ] Configure Sitemap plugin
- [ ] Create GitHub Actions workflow for auto-deploy
- [ ] Test build & deployment

---

## Key Decisions Made

### 1. Framework: Astro (Not React)
**Decision:** Use Astro for static site generation  
**Rationale:** 
- Markdown-native (blog posts are markdown files)
- Zero JavaScript by default (fast performance)
- Static site generation (no server needed)
- Perfect for content-heavy blogs

**Alternative considered:** Next.js/React (rejected: overkill for static blog, adds unnecessary complexity and JavaScript)

### 2. Styling: Tailwind CSS
**Decision:** Use Tailwind for utility-first styling  
**Rationale:**
- No custom CSS needed (utilities handle all styling)
- Responsive design built-in
- Color variables map to design system
- Fast iteration and maintenance

### 3. Fonts: Self-Hosted
**Decision:** Self-host Inria Serif + Cabin fonts  
**Rationale:**
- No external CDN dependencies
- Guaranteed consistency (fonts won't change unexpectedly)
- Better performance (fonts from same origin)
- Full control over font loading strategy

**Alternative considered:** Google Fonts (rejected: external dependency, less control)

### 4. Deployment: GitHub Pages
**Decision:** Deploy to GitHub Pages with GitHub Actions  
**Rationale:**
- Free hosting
- GitHub is version control source
- GitHub Actions provides free CI/CD
- Simple one-command rollback (git revert)

### 5. Content Format: Markdown with Frontmatter
**Decision:** Blog posts are `.md` files with YAML frontmatter  
**Rationale:**
- Human-readable (not database-dependent)
- Version-controlled (all content in git)
- Easy to migrate (can export to other systems)
- Semantic (structured metadata via frontmatter)

---

## Known Constraints & Tradeoffs

### Constraint 1: Phase 1 = 5 Posts Only
**What:** Phase 1 launches with 5 blog posts (not the entire archive)  
**Why:** Learning exercise; full migration can happen in Phase 2  
**Tradeoff:** Initial launch is smaller; more posts added later as skill increases

### Constraint 2: Static Site (No Admin Backend)
**What:** No admin panel; content edited via markdown files in GitHub  
**Why:** Simplicity, version control, no server needed  
**Tradeoff:** Non-technical users must use GitHub (or a web interface in Phase 2)

### Constraint 3: No Server-Side Search (Phase 1)
**What:** Phase 1 has no search functionality  
**Why:** Static sites can't do server-side search; client-side search is Phase 2  
**Tradeoff:** Users browse by category/archive instead of keyword search initially

### Constraint 4: Limited Form Capabilities (Phase 1)
**What:** Contact form uses Formspree or similar free service (not custom backend)  
**Why:** Static sites can't process forms; outsource to free service  
**Tradeoff:** Form data sent to external service; limited customization

**Decision Rationale:** All constraints prioritize simplicity and learning over feature-completeness. Phase 2 adds sophistication as needed.

---

## Design System (Reference)

### Colors
| Use | Hex | Tailwind |
|-----|-----|----------|
| Background | #ffffff | white |
| Body text | #141313 | gray-900 |
| Headings | #1f1d1d | gray-900 |
| Card bg | #f5f0eb | amber-50 |
| Accent (links) | #b72e09 | red-700 |
| Secondary accent | #c48f8f | rose-400 |
| Nav | #2e2b2b | gray-800 |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inria Serif | 58px / 36px mobile | 700 |
| H2 | Inria Serif | 36px | 700 |
| H3 | Inria Serif | 24px | 600 |
| Body | Cabin | 18px | 400 |
| Nav | Cabin | 15px | 400–500 |
| Meta | Cabin | 14px | 400 |

---

## Brand Values (Reference)

1. **Authenticity over aesthetics** — Real moments > perfect photos
2. **Educational value** — Posts teach something useful
3. **No sponsored content** — Reader trust is non-negotiable
4. **Accessibility as standard** — Inclusive design for all users
5. **Minimal design** — Content is the star, design supports it

---

## Common Questions & Answers

### Q: Why Astro and not Next.js?
**A:** Astro is lighter and simpler for a static blog. Next.js is for dynamic apps. This is a static site; Astro is the better fit.

### Q: Why self-host fonts instead of Google Fonts?
**A:** Control. Self-hosting ensures fonts don't change unexpectedly and reduces external dependencies. Performance is similar; brand consistency is better.

### Q: How do we handle contact forms if there's no server?
**A:** Use a third-party service like Formspree or Netlify Forms. Free tier handles reasonable volume.

### Q: Can we add e-commerce later?
**A:** Yes, but that's Phase 3+ (outside current scope). Phase 1 is a blog.

### Q: What if Wendy wants to edit content without git/GitHub?
**A:** That's Phase 2. Phase 1 assumes editing via GitHub. Phase 2 adds a simple web editor.

### Q: How do we track visitors?
**A:** Phase 1: optional (Google Analytics). Phase 2: privacy-focused analytics (Plausible, Fathom).

---

## Blockers & Dependencies

### Current Blockers: None
All blocking dependencies are resolved.

### Upcoming Dependencies (Phase 1B+)
- Need Inria Serif and Cabin font files (can download from official sources)
- Need permission to migrate existing WordPress content (assumed granted)
- Need 5 hero images from Wendy for featured posts

---

## Success Metrics (Phase 1)

| Metric | Target |
|--------|--------|
| Docs complete | 100% |
| Folder structure created | 100% |
| Astro site scaffold | Complete |
| Core components (Header, Nav, Footer) | Built |
| 5 blog posts migrated | Complete |
| Site responsive (mobile/tablet/desktop) | Verified |
| Build time | < 30s |
| Page load time | < 3s (all pages) |
| SEO checklist | All items met |

---

## Tech Debt & Future Improvements

### Phase 1 (Current Focus)
- None documented yet

### Phase 2 (Planned)
- [ ] Admin UI for content editing (so Wendy doesn't need git)
- [ ] Client-side search functionality
- [ ] Email newsletter integration
- [ ] Related posts widget
- [ ] Comment system
- [ ] Privacy-focused analytics

### Phase 3 (Long-term)
- [ ] Category archive pages
- [ ] Date-based archive pages
- [ ] Advanced filtering/sorting
- [ ] Social sharing buttons
- [ ] Reading time estimates
- [ ] E-commerce (if Wendy sells products)

---

## Documentation Map

| Document | Purpose |
|----------|---------|
| `claude.md` | Navigation guide & project structure |
| `src/BRAND.md` | Brand voice, tone, design philosophy |
| `src/components/README.md` | Component building guidelines |
| `src/layouts/README.md` | Layout templates & composition |
| `src/pages/README.md` | Page routing & structure |
| `src/content/blog/README.md` | Blog post guidelines & frontmatter format |
| `src/assets/README.md` | Self-hosted assets strategy |
| `public/images/README.md` | Image naming, optimization, alt text |
| `PROJECT-NOTES.md` | This file — status, decisions, timeline |
| `wanderlustwendy-brief.md` | Original project brief (reference only) |

---

## Contact & Questions

**Project Owner:** Xavier XVI  
**If you have questions:** Refer to the appropriate documentation file above.

**For Claude:** Start with `claude.md` for navigation, then refer to specific sub-docs as needed.

---

## Changelog

### Version 1.0 (April 14, 2026)
- Initial project notes created
- Phase 1 timeline documented
- Key decisions recorded
- Design system frozen
- Documentation structure finalized

---

**Status:** Ready for Phase 1A (Astro Setup)
