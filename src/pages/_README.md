# Page Structure & URL Routing

**Purpose:** Define how file paths map to URLs and document the structure of each page in Phase 1.

---

## File-to-Route Mapping (Astro Convention)

In Astro, the file path determines the URL automatically. This is called "file-based routing."

| File Path | URL | Description |
|-----------|-----|-------------|
| `src/pages/index.astro` | `/` | Homepage |
| `src/pages/destinations.astro` | `/destinations` | Destinations page |
| `src/pages/living-abroad.astro` | `/living-abroad` | Living Abroad guide |
| `src/pages/bucket-list.astro` | `/bucket-list` | Bucket List |
| `src/pages/contact.astro` | `/contact` | Contact page |
| `src/pages/blog/[slug].astro` | `/blog/post-slug` | Dynamic blog post route |
| `src/pages/blog/index.astro` | `/blog` | Blog archive/listing |

**Decision Rationale:** File-based routing is intuitive and requires no configuration. The file structure mirrors the URL structure, making navigation obvious for developers and editors.

---

## Phase 1 Pages

### 1. Homepage (`src/pages/index.astro`)

**Purpose:** Landing page; introduces Wendy and the blog

**Content sections:**
- Hero banner with site title and tagline
- Brief intro to Wendy (who she is, what the blog covers)
- Featured posts (2-3 hand-selected posts)
- Newsletter signup CTA (Phase 2; optional in Phase 1)
- Link to blog archive

**Meta:** 
- Title: "Wanderlust Wendy | Travel Stories & Expat Life"
- Description: "A travel blog by Wendy about exploring the world, living abroad, and cultural discovery."

**Layout:** BaseLayout

**Rationale:** Homepage is the entry point for new visitors. It should immediately communicate what the site is about and guide visitors to content.

---

### 2. Blog Archive (`src/pages/blog/index.astro`)

**Purpose:** Listing of all blog posts; sortable by category (Phase 2)

**Content:**
- List of all posts with PostCard components
- Sorted by date (newest first)
- Optional: Filter by category (Phase 2)
- Optional: Search bar (Phase 2)

**Meta:**
- Title: "Blog Archive | Wanderlust Wendy"
- Description: "All travel stories, reflections, and expat guides from Wanderlust Wendy."

**Layout:** BaseLayout

**Rationale:** Blog archive is the hub for discovering older posts. In Phase 1, posts are sorted chronologically; Phase 2 adds filtering and search.

---

### 3. Dynamic Blog Post Route (`src/pages/blog/[slug].astro`)

**Purpose:** Individual blog post page; renders a single post from markdown

**Dynamic route parameter:** `[slug]`
- `slug` is extracted from the post filename (e.g., `sapa-vietnam-hiking.md` → `/blog/sapa-vietnam-hiking`)

**Content:**
- Post title, date, category, featured image
- Post content (rendered from markdown)
- Related posts (2-3 posts from the same category, Phase 2)
- Newsletter signup CTA (Phase 2)

**Meta:**
- Title: Post title
- Description: Post excerpt
- OG Image: Featured image
- JSON-LD schema: BlogPosting type

**Layout:** PostLayout

**Implementation:**
```astro
// src/pages/blog/[slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
```

**Rationale:** Dynamic routes allow creating a new post simply by adding a markdown file. Astro automatically generates pages for each post.

---

### 4. Destinations Page (`src/pages/destinations.astro`)

**Purpose:** Hub for destination guides and travel stories organized by location

**Content:**
- Introduction to travel philosophy
- Grid/list of destinations with featured posts from each location
- Links to related posts (e.g., all posts tagged with Vietnam)
- Optional: Map or interactive destination browser (Phase 2)

**Meta:**
- Title: "Destinations | Wanderlust Wendy"
- Description: "Travel guides and stories from locations around the world."

**Layout:** BaseLayout

**Rationale:** Destinations page provides a secondary way to browse content beyond chronological order. It groups related posts by location.

---

### 5. Living Abroad Page (`src/pages/living-abroad.astro`)

**Purpose:** Hub for guides and reflections on living internationally

**Content:**
- Introduction to living abroad experience
- Posts categorized as "Living Abroad" (e.g., Saigon Living Guide)
- Guides and practical tips (language learning, bureaucracy, cultural adaptation)
- Link to all "Living Abroad" posts

**Meta:**
- Title: "Living Abroad | Wanderlust Wendy"
- Description: "Guides and reflections on what it's like to live as an expat."

**Layout:** BaseLayout

**Rationale:** Living Abroad is a specific content vertical within the blog. This page emphasizes that angle and makes it easy for readers interested in this topic to find relevant posts.

---

### 6. Bucket List Page (`src/pages/bucket-list.astro`)

**Purpose:** Aspirational page; shared bucket list of places to visit or experiences to have

**Content:**
- Introduction explaining the bucket list concept
- List of destinations/experiences (as cards or a visual grid)
- Notes on why each destination matters to Wendy
- Optional: Links to related blog posts about each destination

**Meta:**
- Title: "Bucket List | Wanderlust Wendy"
- Description: "Places and experiences on Wendy's travel bucket list."

**Layout:** BaseLayout

**Rationale:** Bucket List adds a personal dimension to the blog beyond documentation. It shows Wendy's aspirations and makes the blog feel more human.

---

### 7. Contact Page (`src/pages/contact.astro`)

**Purpose:** Contact form for readers to reach Wendy

**Content:**
- Brief intro ("Get in touch")
- Contact form (Name, Email, Message)
- Optional: Social media links
- Optional: Email address or other contact info

**Form handling (Phase 1):**
- Form submission sends email to Wendy (via Formspree, Netlify Forms, or similar free service)

**Form handling (Phase 2):**
- Form data stored in database
- Auto-reply to user
- Option for users to subscribe to newsletter from the form

**Meta:**
- Title: "Contact | Wanderlust Wendy"
- Description: "Get in touch with Wendy."

**Layout:** BaseLayout

**Rationale:** Contact form is important for reader engagement and opportunities (collaboration requests, sponsorships, etc.). It's a simple, essential page.

---

## Navigation Structure

The main navigation menu includes links to:
1. Home (`/`)
2. Blog (`/blog`)
3. Destinations (`/destinations`)
4. Living Abroad (`/living-abroad`)
5. Bucket List (`/bucket-list`)
6. Contact (`/contact`)

**Rationale:** These 6 pages provide the main content hubs. Additional pages (archives, category pages) can be discovered from the blog.

---

## Content Organization by Page Type

### Landing Pages (Home, Destinations, Living Abroad, Bucket List)
- Introduce a topic or theme
- Highlight featured posts
- Guide readers to deeper content
- Include calls-to-action (newsletter signup, link to related posts)

### Content Pages (Blog posts, archives)
- Display post content
- Include metadata (date, category, author)
- Provide navigation to related posts
- Optional: Comments or reader engagement (Phase 2)

### Functional Pages (Contact)
- Forms and interactive elements
- Clear instructions
- Minimal distraction

**Decision Rationale:** Different page types serve different purposes. Organization by type ensures each page has a clear purpose and structure.

---

## URL Naming Conventions

### Static Pages
- Descriptive, hyphenated slugs: `/destinations`, `/living-abroad`, `/bucket-list`
- All lowercase
- No file extensions in URLs

### Blog Posts
- Slug derived from post title: "Sapa Vietnam Hiking Adventure" → `sapa-vietnam-hiking`
- Slug is readable and descriptive
- URL: `/blog/sapa-vietnam-hiking`

### Category/Archive Pages (Phase 2)
- `/blog/category/travelogue` — all posts with "Travelogue" category
- `/blog/archive/2026/04` — posts from April 2026

**Decision Rationale:** Readable URLs improve user experience and SEO. Users should be able to guess the URL structure.

---

## Internal Linking Strategy

Every page should link to relevant other pages:
- **Homepage:** Links to featured posts, blog archive, key pages
- **Blog posts:** Links to related posts (same category or location)
- **Destinations page:** Links to posts about each destination
- **Living Abroad page:** Links to all "Living Abroad" posts
- **Blog archive:** Links to each post

**Decision Rationale:** Internal links keep readers on the site, improve SEO, and create a web of related content.

---

## Meta Data for Each Page

| Page | Title | Description | OG Image |
|------|-------|-------------|----------|
| Home | "Wanderlust Wendy \| Travel Stories & Expat Life" | "A travel blog by Wendy about exploring the world, living abroad, and cultural discovery." | Featured blog post image |
| Blog Archive | "Blog Archive \| Wanderlust Wendy" | "All travel stories, reflections, and expat guides." | Site logo or generic image |
| Blog Post | Post title | Post excerpt (first 150 characters) | Featured image |
| Destinations | "Destinations \| Wanderlust Wendy" | "Travel guides and stories from around the world." | Featured destination image |
| Living Abroad | "Living Abroad \| Wanderlust Wendy" | "Guides and reflections on living as an expat." | Featured Living Abroad post image |
| Bucket List | "Bucket List \| Wanderlust Wendy" | "Places and experiences on Wendy's travel bucket list." | Featured image from bucket list |
| Contact | "Contact \| Wanderlust Wendy" | "Get in touch with Wendy." | Site logo |

**Decision Rationale:** Consistent, descriptive meta data improves SEO and social sharing.

---

## Page Build Order (Phase 1)

1. **Homepage** (sets the tone, establishes visual identity)
2. **Blog post template** (`[slug].astro`) and blog archive
3. **Destinations page**
4. **Living Abroad page**
5. **Bucket List page**
6. **Contact page**

**Rationale:** Building pages in this order prioritizes core content pages and allows testing of the blog post template early.

---

## Phase 2 Enhancements

- Category archive pages (`/blog/category/travelogue`)
- Date-based archive pages (`/blog/2026`)
- Related posts section (on blog post pages)
- Search page (`/search`) with full-text search
- Comments section (on blog posts)
- Email confirmation page (`/email/confirm`)

**Decision Rationale:** Phase 2 adds discovery and engagement features. Phase 1 focuses on core content.

---

## Page Checklist Before Publishing

- [ ] Page has proper meta tags (title, description, OG tags)
- [ ] Navigation is present and correct (active link highlighted)
- [ ] Page is responsive (mobile, tablet, desktop)
- [ ] Internal links are working and relevant
- [ ] Images have alt text
- [ ] Forms (if any) are functional and accessible
- [ ] Page follows the site's brand voice and design
- [ ] Content is proofread and spell-checked

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any Astro-based blog or content site
