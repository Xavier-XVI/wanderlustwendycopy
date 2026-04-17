# Layout Templates & Page Composition

**Purpose:** Define the template structure for how pages are composed; establish consistent layout patterns across the site.

---

## Layout Philosophy

Layouts are higher-level templates that wrap page content. They handle consistent elements (header, nav, footer) so individual pages only need to define their unique content.

### Key Principle: DRY (Don't Repeat Yourself)
Every page includes header, nav, and footer. Rather than repeat these in every page, we use a layout template that wraps them and provides a `<slot />` for page-specific content.

**Decision Rationale:** This reduces duplication, ensures consistency, and makes global changes (like updating the nav) one-file edits instead of many.

---

## BaseLayout.astro

**Purpose:** Default layout for all pages; wraps header, nav, and footer around page content

**Structure:**
```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description?: string;
  ogImage?: string; // For social sharing
}

const { title, description, ogImage } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags (charset, viewport, title, description, OG tags) -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={ogImage} />
    <!-- Fonts, styles, etc. -->
  </head>

  <body>
    <Header />
    <Nav />
    <main>
      <slot /> {/* Page content goes here */}
    </main>
    <Footer />
  </body>
</html>
```

**Props:**
- `title` (string): Page title (for HTML `<title>` and SEO)
- `description` (string, optional): Meta description for search engines
- `ogImage` (string, optional): Image URL for social media sharing

**When to use:**
- Homepage, about pages, archives, category pages, contact form

**Meta Tags Included:**
- `<meta charset="utf-8" />` — character encoding
- `<meta name="viewport" content="width=device-width" />` — responsive viewport
- `<title>` — page title (for browser tab and SEO)
- `<meta name="description" />` — SEO meta description
- Open Graph tags (`og:title`, `og:description`, `og:image`) — for social sharing
- Twitter Card tags — for Twitter sharing

**Decision Rationale:** Metadata is critical for SEO and social sharing. By putting it in the layout, we ensure every page has proper metadata without having to remember it for each page.

---

## PostLayout.astro

**Purpose:** Template specifically for blog posts; includes post metadata (date, category, author) and structured schema for SEO

**Structure:**
```astro
---
// src/layouts/PostLayout.astro
interface Props {
  title: string;
  date: string; // YYYY-MM-DD format
  category: string;
  excerpt: string;
  featured?: string; // Featured image path
  author?: string; // Default: site owner
}

const { title, date, category, excerpt, featured, author = "Wendy" } = Astro.props;
---

<BaseLayout title={title} description={excerpt} ogImage={featured}>
  <article>
    <header>
      <h1>{title}</h1>
      <div class="metadata">
        <span class="date">{formatDate(date)}</span>
        <span class="category">{category}</span>
        <span class="author">{author}</span>
      </div>
      {featured && <img src={featured} alt="" />}
    </header>

    <section class="content">
      <slot /> {/* Post content (markdown) goes here */}
    </section>

    <!-- JSON-LD schema for search engines -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "{title}",
        "datePublished": "{date}",
        "author": { "@type": "Person", "name": "{author}" }
      }
    </script>
  </article>
</BaseLayout>
```

**Props:**
- `title` (string): Post title
- `date` (string): Publication date (YYYY-MM-DD format)
- `category` (string): Post category (Travelogue, Reflection, Living Abroad, Language & Culture)
- `excerpt` (string): Short excerpt for meta description
- `featured` (string, optional): Path to featured image
- `author` (string, optional): Author name (defaults to "Wendy")

**When to use:**
- Blog posts only (routed via `src/pages/blog/[slug].astro`)

**Special Features:**
- **Metadata section:** Displays date, category, and author prominently
- **Featured image:** Optional hero image at the top of the post
- **JSON-LD schema:** Structured data for search engines to understand the post as a BlogPosting
- **Internal content slot:** Markdown content is rendered here

**JSON-LD Rationale:** Schema.org markup helps search engines understand the page structure and improves rich snippet display in search results.

---

## Layout Composition Pattern

Layouts can be nested (PostLayout extends BaseLayout):

```
BaseLayout (common header, nav, footer, meta tags)
  └── PostLayout (post-specific metadata, schema, featured image)
      └── Post content (markdown)
```

This allows:
- **Code reuse:** BaseLayout is defined once, used by all layouts
- **Specialization:** PostLayout adds post-specific features without duplicating header/footer logic
- **Consistency:** Every page has the same header/nav/footer without manual repetition

**Decision Rationale:** Nested layouts follow the DRY principle while allowing specialization for different page types.

---

## Slot Usage

### Single Slot (BaseLayout, PostLayout)
```astro
<main>
  <slot /> {/* Content goes here */}
</main>
```

### Named Slots (For future use)
If a layout needs multiple content areas, use named slots:

```astro
<!-- Layout -->
<header>
  <slot name="header" /> {/* Optional: featured image or header content */}
</header>
<main>
  <slot /> {/* Default content area */}
</main>
```

```astro
<!-- Page using named slots -->
<PostLayout>
  <img slot="header" src="..." alt="..." />
  <p>Post content here...</p>
</PostLayout>
```

**Decision Rationale:** Named slots allow flexibility without creating new layout files for every page variation.

---

## Meta Tag Strategy

### BaseLayout Meta Tags (Applied to All Pages)
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:image" content="..." />
```

**Decision Rationale:** Standardized meta tags improve SEO and social sharing across all pages.

### PostLayout JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "datePublished": "2026-04-14",
  "author": { "@type": "Person", "name": "Wendy" }
}
```

**Decision Rationale:** Schema.org markup helps search engines understand blog posts and enables rich snippets in search results.

---

## Responsive Layout Patterns

### Mobile-First Approach
Layouts should be designed for mobile first, then enhanced for larger screens:

```astro
<div class="flex flex-col md:flex-row gap-4">
  {/* Single column on mobile, two columns on tablet+ */}
</div>
```

**Decision Rationale:** Mobile-first ensures readability and usability on the majority of devices (which are mobile).

### Viewport-Aware Content
Use Tailwind responsive prefixes for layout changes:
- `sm:` — 640px+
- `md:` — 768px+
- `lg:` — 1024px+
- `xl:` — 1280px+

---

## Accessibility in Layouts

Every layout must include:
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- **Skip links:** "Skip to main content" link at the top of the page
- **Heading hierarchy:** H1 for page title, H2 for sections, H3 for subsections
- **Focus management:** Keyboard navigation must be logical and visible
- **Alt text:** Images must have descriptive alt text

```astro
<!-- ✓ Good: Semantic, accessible -->
<body>
  <a href="#main" class="sr-only">Skip to main content</a>
  <Header />
  <Nav />
  <main id="main">
    <slot />
  </main>
  <Footer />
</body>
```

**Decision Rationale:** Semantic HTML and skip links improve accessibility for keyboard and screen reader users.

---

## Layout Checklist Before Using

- [ ] Layout includes `<Header />`, `<Nav />`, and `<Footer />` for consistency
- [ ] Meta tags are properly set (title, description, OG tags)
- [ ] Slot is present and clearly named/documented
- [ ] Layout is responsive (tested on mobile, tablet, desktop)
- [ ] Semantic HTML is used (`<header>`, `<nav>`, `<main>`, etc.)
- [ ] Layout is keyboard-navigable
- [ ] Layout has proper color contrast
- [ ] No hardcoded content (all text is passed via props)

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any Astro-based blog or content site
