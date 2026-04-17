# Component Library Guidelines

**Purpose:** Define patterns, naming conventions, and composition strategies for building reusable UI components.

---

## Component Philosophy

### Why Components?
Components reduce duplication and ensure visual consistency across the site. Each component represents a single, reusable piece of the design system.

### Astro Components
- Written in `.astro` files
- Accept props (TypeScript-optional)
- Return HTML with embedded styles (scoped to that component)
- No JavaScript by default (unless interactive behavior is required)
- Use Tailwind CSS utility classes for styling

**Decision Rationale:** Astro components are zero-JavaScript by default, which keeps the site fast and performant. We add JavaScript only when interactivity requires it.

---

## Core Components (Phase 1)

### 1. Header.astro
**Purpose:** Site masthead; contains logo/site title

**Props:**
- `title` (string, optional): Site title to display
- `subtitle` (string, optional): Tagline or description

**Styling:**
- Minimal, editorial: Logo/title centered or left-aligned
- No background color (sits on page background)
- Uses serif font for brand identity
- Responsive: Single line on desktop, may stack on mobile if space-constrained

**Rationale:** The header is minimal because the site name and navigation are more important than elaborate branding.

### 2. Nav.astro
**Purpose:** Main navigation menu

**Props:**
- `items` (array): Navigation links with `label` and `href`
- `currentPath` (string, optional): Current page URL to highlight active link

**Styling:**
- Horizontal layout on desktop
- Right-aligned or centered
- Uses sans-serif (Cabin) for clarity
- Links change color on hover (use accent color from design system)
- Mobile: Hamburger menu or stacked vertical layout (Phase 2)

**Rationale:** Navigation is simple and text-only. No icons or decorative elements. Current page is highlighted so readers always know where they are.

### 3. Footer.astro
**Purpose:** Site footer; contains metadata, links, copyright

**Props:**
- `year` (number, optional): Copyright year
- `links` (array, optional): Footer link groups (About, Contact, Archives, etc.)
- `emailCTA` (object, optional): Email signup CTA (Phase 1: optional; Phase 2: required)

**Styling:**
- Minimal, editorial: Small font size, neutral color
- Adequate contrast for readability
- Generous padding for breathing room
- Optional: Newsletter signup form (if email capture is enabled)

**Rationale:** The footer is a secondary information zone. It should not compete with main content. If email capture is enabled, the CTA should be subtle.

### 4. PostCard.astro
**Purpose:** Blog post preview card (used on blog listing pages, archives, or related posts sections)

**Props:**
- `slug` (string): URL slug for the post
- `title` (string): Post title
- `excerpt` (string): Short excerpt/summary
- `date` (string): Publication date (YYYY-MM-DD format)
- `category` (string): Post category (Travelogue, Reflection, Living Abroad, Language & Culture)
- `featured` (boolean, optional): Whether to display this post differently (e.g., larger on homepage)

**Styling:**
- Card container with subtle background (use card bg color from design system)
- Title as link to post
- Metadata (date, category) in smaller, muted font
- Hover state: Subtle color shift or underline on title
- Optional: featured cards are larger, more prominent

**Rationale:** Cards are self-contained units of information. The featured state allows flexibility for highlighting important posts on the homepage without adding complexity.

---

## Component Composition Patterns

### Props Best Practices
```astro
// ✓ Good: Explicit, typed props
interface Props {
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
}

const { title, excerpt, date, featured = false } = Astro.props;
```

```astro
// ✗ Avoid: Spreading all props without type safety
const { ...props } = Astro.props;
```

**Decision Rationale:** Explicit props make components self-documenting and easier to maintain.

### Slots for Flexible Content
```astro
// ✓ Good: Use slots for content that varies
<div class="card">
  <slot /> {/* Post content goes here */}
</div>
```

**Decision Rationale:** Slots allow components to wrap different content without needing a prop for every variation.

### Styling Conventions
- **Always use Tailwind utility classes** (no custom CSS in components unless unavoidable)
- **No hardcoded colors:** Reference color variables from design system (use Tailwind class names)
- **Responsive-first:** Use Tailwind's responsive prefixes (`md:`, `lg:`, etc.) for layout changes
- **Never use `!important`:** If you need it, the specificity is wrong

```astro
// ✓ Good
<h1 class="text-3xl md:text-4xl font-bold text-gray-900">
  <slot />
</h1>

// ✗ Avoid
<h1 style="color: #141313; font-size: 36px; font-weight: bold;">
  <slot />
</h1>
```

---

## Component Naming Conventions

| Pattern | Example | Use Case |
|---------|---------|----------|
| Singular noun | `Header.astro`, `Nav.astro`, `Footer.astro` | Layout components |
| Descriptive name | `PostCard.astro`, `CategoryTag.astro`, `ShareButtons.astro` | Content components |
| Capitalized PascalCase | `MyComponent.astro` | All components |

**Decision Rationale:** PascalCase matches Astro conventions and makes components visually distinct from HTML elements in templates.

---

## Accessibility Requirements

Every component must meet WCAG 2.1 AA standards:
- **Semantic HTML:** Use `<button>`, `<a>`, `<nav>`, `<header>`, etc. appropriately
- **Keyboard navigation:** All interactive elements must be accessible via keyboard
- **Alt text:** Images must have descriptive alt text
- **Color contrast:** Text must have sufficient contrast (4.5:1 for body text, 3:1 for large text)
- **ARIA labels:** Use `aria-label` or `aria-describedby` for elements without visible text labels

```astro
// ✓ Good: Semantic, accessible
<a href="/blog/{{ slug }}" class="hover:underline">
  {{ title }}
</a>

// ✗ Avoid: Non-semantic, keyboard-inaccessible
<div onClick="navigateTo(slug)" class="cursor-pointer">
  {{ title }}
</div>
```

**Decision Rationale:** Accessibility is a core brand value. Every component must be usable by everyone.

---

## Testing Components Locally

When building a new component:
1. Create the `.astro` file in `src/components/`
2. Import it in a test page (e.g., `src/pages/index.astro`)
3. Render with different prop combinations to verify behavior
4. Test on mobile, tablet, and desktop
5. Verify keyboard navigation and screen reader compatibility
6. Check responsive breakpoints (320px, 768px, 1024px, 1440px)

---

## Phase 1 vs. Phase 2 Components

**Phase 1 (MVP):**
- Header, Nav, Footer, PostCard
- All components are static (no JavaScript)
- No interactive elements beyond basic links

**Phase 2 (Enhancement):**
- SearchBox (interactive client-side search)
- EmailSignup (form validation and submission)
- CategoryFilter (dynamic filtering of posts)
- Hamburger menu (responsive mobile nav)
- These will include JavaScript interactivity

**Decision Rationale:** Phase 1 keeps things simple; JavaScript is added in Phase 2 only when needed for functionality.

---

## Component Checklist Before Merging

- [ ] Component has a clear, single purpose
- [ ] Props are explicitly typed (via TypeScript interface)
- [ ] Component uses only Tailwind classes (no custom CSS unless justified)
- [ ] Component is responsive (tested on mobile, tablet, desktop)
- [ ] All interactive elements are keyboard-accessible
- [ ] Images have descriptive alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Component is tested with different prop combinations
- [ ] No hardcoded content (all text is passed via props or slots)
- [ ] Component documentation is clear (what it does, what props it accepts)

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any Astro-based static site project
