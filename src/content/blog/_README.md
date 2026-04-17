# Blog Content Guidelines & Frontmatter Format

**Purpose:** Define the structure, format, and writing guidelines for blog posts. Establish standards for content organization and metadata.

---

## Content Philosophy

Blog posts are the heart of this site. Each post should:
- Be **authentic and honest** (reflect the author's real experience and voice)
- Be **educational or reflective** (teach readers something or offer meaningful insight)
- Be **well-organized** (clear structure, good hierarchy, scannable)
- Be **accessible** (readable font size, good contrast, semantic HTML)
- **Respect reader time** (no filler, no affiliate spam, no corporate-speak)

**Decision Rationale:** Quality content builds an engaged, loyal audience. Quantity without substance creates noise.

---

## Post Naming Convention

Posts are stored as markdown files with the following naming pattern:

```
slug-format.md
```

**Rules:**
- All lowercase
- Words separated by hyphens
- No spaces, underscores, or special characters
- Descriptive (matches the post title)
- Unique and human-readable

**Examples:**
- `hello-again.md` — Post title: "Hello, Again!"
- `sapa-vietnam-hiking.md` — Post title: "Sapa, Vietnam: A Hiking Adventure"
- `saigon-living-guide.md` — Post title: "Living in Saigon: A Practical Guide"
- `has-giang-car-tour.md` — Post title: "Ha Giang by Car: A Road Trip Report"

**Decision Rationale:** Slug-based naming makes files easy to find and ensures consistency between filename and URL.

---

## Frontmatter Template

Every post begins with YAML frontmatter that defines metadata:

```yaml
---
title: "Post Title Goes Here"
date: 2026-04-14
category: "Travelogue" # Options: Travelogue, Reflection, Living Abroad, Language & Culture
excerpt: "A brief excerpt or summary of the post (1-2 sentences, max 150 characters)."
slug: "post-slug-format"
featured: true # Optional: true if this post should be highlighted on homepage
---

# Post content starts here...
```

### Frontmatter Fields

| Field | Type | Required | Example | Notes |
|-------|------|----------|---------|-------|
| `title` | string | Yes | "Sapa, Vietnam: Hiking in the Clouds" | Used for post heading and page title |
| `date` | YYYY-MM-DD | Yes | 2026-04-14 | Publication date; determines sort order |
| `category` | string | Yes | "Travelogue" | Must be one of: Travelogue, Reflection, Living Abroad, Language & Culture |
| `excerpt` | string | Yes | "A weekend hiking trip in Sapa..." | Max 150 chars; used for previews and meta description |
| `slug` | string | Yes | "sapa-vietnam-hiking" | Matches filename; used to generate URL |
| `featured` | boolean | Optional | true | If true, post appears on homepage featured section |
| `author` | string | Optional | "Wendy" | Defaults to "Wendy" if not specified |

**Decision Rationale:** Frontmatter makes post metadata machine-readable. Tools can extract metadata without parsing markdown content.

---

## Post Categories (Phase 1)

Posts should be assigned to one of these categories:

| Category | Description | Tone | Examples |
|----------|-------------|------|----------|
| **Travelogue** | Travel story or destination guide; narrative-focused | Descriptive, experiential | "Sapa Vietnam Hiking", "Ha Giang Car Tour" |
| **Reflection** | Personal reflection or essay about travel/expat life | Thoughtful, introspective | "Hello, Again!" (returning home perspective) |
| **Living Abroad** | Practical guide or story about living in a foreign country | Practical, personal | "Saigon Living Guide", "Adjusting to Taiwan" |
| **Language & Culture** | Posts about language learning, cultural insights, or cultural adaptation | Educational, conversational | "Learning Taiwanese", "Understanding Vietnamese Humor" |

**Decision Rationale:** Categories help readers discover content aligned with their interests and make the site more navigable.

---

## Content Guidelines

### Word Count
- **Minimum:** 800 words (enough to be substantive)
- **Target:** 1,200–2,000 words (readable in one sitting)
- **Maximum:** No hard limit, but very long posts (>3,000 words) should be split into multiple posts

**Rationale:** 800+ words allows for depth; 1,200–2,000 is a sweet spot for reader engagement.

### Structure
Every post should have:

1. **Title** (H1, handled by layout)
2. **Excerpt/Lede** (first 1–2 paragraphs, hooks the reader)
3. **Body** (main content, organized with H2 sections)
4. **Conclusion** (wrap up, call-to-action if appropriate)

**Example structure:**
```markdown
---
title: "Sapa, Vietnam: Hiking in the Clouds"
---

# Sapa, Vietnam: Hiking in the Clouds

[Lede: 1–2 paragraphs setting the scene and hooking the reader]

## The Journey to Sapa

[2–3 paragraphs about getting there]

## Hiking the Trails

[2–3 paragraphs about the hiking experience]

## Local Culture & Food

[2–3 paragraphs about interactions with locals, food, culture]

## Lessons Learned

[Reflection: what did this trip teach you?]

---

[Closing thought or call-to-action]
```

### Heading Hierarchy
- **H1:** Reserved for post title (handled by layout; don't use in markdown)
- **H2:** Major sections (always start with H2)
- **H3:** Subsections within major sections
- **H4+:** Rarely used; avoid unless necessary

**Rationale:** Proper heading hierarchy improves readability and accessibility. Screen readers rely on it for navigation.

### Writing Voice
- Write in first person ("I", "we") when telling personal stories
- Use conversational tone (as if talking to a friend)
- Avoid corporate-speak, marketing language, or overly formal tone
- Be honest about challenges and failures; don't gloss over difficulty
- Embrace personality and humor

**See `src/BRAND.md` for detailed voice guidelines.**

### Links & References
- **Internal links:** Link to related posts using markdown `[Post Title](../post-slug/index.html)` or relative paths
- **External links:** Link to relevant resources, guides, or cited sources
- **No affiliate links:** Never use tracked/affiliate links for personal gain
- **Link context:** Always use descriptive anchor text (e.g., "read my guide on learning Vietnamese" not "click here")

### Images
- **Hero image:** One featured image at the top of the post (required; see public/images/README.md for specs)
- **Inline images:** Optional; use to break up text and illustrate points
- **Captions:** Optional; provide context for images if helpful
- **No stock photos:** Use only real photos from the experience

**See `public/images/README.md` for image guidelines.**

### Code Blocks (if applicable)
Use markdown code blocks for any code or technical content:

````markdown
```html
<h1>Example Code</h1>
```
````

### Quotes & Callouts
Highlight important quotes or insights:

```markdown
> "This is a meaningful quote or insight worth emphasizing."
```

---

## Post Metadata Best Practices

### Excerpt
The excerpt is critical for:
- Social media sharing (Twitter, Facebook)
- Search engine results (appears as meta description)
- Blog preview cards (appears on archive page)
- Email newsletter (if applicable)

**Guidelines:**
- 1–2 sentences, max 150 characters
- Summarize the main idea or hook the reader
- Don't repeat the title
- Write in first person when possible

**Examples:**
- ✓ "I spent a weekend hiking through the misty mountains of Sapa and learned what it really means to get lost."
- ✗ "This post is about my trip to Sapa in Vietnam."

### Featured Posts
Set `featured: true` for posts that should appear on the homepage. Typically 2–3 posts at a time.

**Rationale:** Featured posts highlight the best content and help new visitors discover key pieces.

---

## Quality Checklist Before Publishing

- [ ] **Frontmatter is complete** (title, date, category, excerpt, slug, featured)
- [ ] **Slug matches filename** (e.g., `sapa-vietnam-hiking.md` has slug "sapa-vietnam-hiking")
- [ ] **Title is compelling** (captures the post idea, not generic)
- [ ] **Excerpt hooks the reader** (first 2 sentences set up the post)
- [ ] **Word count is 800+** (substantive, not fluff)
- [ ] **Heading hierarchy is correct** (H2 for sections, H3 for subsections)
- [ ] **Content is proofread** (no typos, grammar errors, or awkward phrasing)
- [ ] **Voice is authentic** (personal, conversational, honest)
- [ ] **Internal links are present** (link to 2–3 related posts)
- [ ] **Hero image is included** (featured image at the top)
- [ ] **Image alt text is descriptive** (explains the image for screen readers)
- [ ] **No affiliate links or sponsored content** (all links are organic/genuine)
- [ ] **Posts respects reader time** (no filler, gets to the point)
- [ ] **Category is accurate** (pick the most relevant category)

---

## Post Examples (Phase 1 Posts)

### Post 1: "Hello, Again!"
- **Category:** Reflection
- **Slug:** `hello-again`
- **Tone:** Introspective; about Wendy's perspective returning home
- **Length:** 1,200–1,500 words

### Post 2: "Sapa, Vietnam: Hiking in the Clouds"
- **Category:** Travelogue
- **Slug:** `sapa-vietnam-hiking`
- **Tone:** Narrative; describing a hiking trip
- **Length:** 1,500–2,000 words
- **Featured:** Yes (homepage highlight)

### Post 3: "Ha Giang by Car: A Road Trip Report"
- **Category:** Travelogue
- **Slug:** `ha-giang-car-tour`
- **Tone:** Adventurous, practical; includes travel tips
- **Length:** 1,200–1,800 words

### Post 4: "Living in Saigon: A Practical Guide"
- **Category:** Living Abroad
- **Slug:** `saigon-living-guide`
- **Tone:** Practical, personal; includes logistics and cultural insights
- **Length:** 2,000–2,500 words
- **Featured:** Yes (homepage highlight)

### Post 5: "Around the World Travel: Lessons Learned"
- **Category:** Travelogue (or Reflection; team decides)
- **Slug:** `around-the-world-travel`
- **Tone:** Reflective, narrative; synthesizes travel experiences
- **Length:** 1,500–2,000 words

---

## Phase 2 Enhancements

- **Related posts:** Automatically suggest 2–3 related posts at the end of each post
- **Reading time estimate:** "5 min read" displayed near the date
- **Table of contents:** Auto-generated from headings
- **Comments:** Reader comments below each post (with moderation)
- **Tags:** Additional metadata for filtering beyond categories

**Decision Rationale:** Phase 2 adds discovery and engagement features. Phase 1 focuses on core content quality.

---

## Asset Linking in Posts

### Featured Image
In frontmatter (handled by layout):
```yaml
featured: "../../assets/images/sapa-vietnam-hiking--hero.jpg"
```

### Inline Images in Content
In markdown:
```markdown
![Alt text describing the image](../../public/images/sapa-vietnam-hiking--locals.jpg)
```

**Path structure:**
- Images are stored in `public/images/`
- Use relative paths from the markdown file location
- See `public/images/README.md` for naming and optimization guidelines

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any markdown-based blog platform (Astro, 11ty, Jekyll, etc.)
