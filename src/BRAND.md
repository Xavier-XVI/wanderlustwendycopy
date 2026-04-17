# Brand Voice & Design Philosophy

**Purpose:** Define the tone, voice, visual identity, and core values that guide all content and design decisions for this site.

---

## Brand Voice & Tone

### Voice Characteristics
- **Honest and reflective:** Wendy shares real experiences, not curated Instagram highlights
- **Warm and conversational:** Writing feels like a conversation with a thoughtful friend, not corporate copy
- **Multilingual sensibility:** Naturally weaves in cultural observations and language nuances
- **Generational authenticity:** Relatable perspective from someone balancing motherhood, career, and global experience
- **Non-influencer:** Rejects sponsored content, affiliate marketing, and performative travel

### Tone Guardrails
- Avoid: Overly polished, aspirational, or "perfect travel" narratives
- Avoid: Sponsored or paid endorsements of destinations/products
- Avoid: AI-generated content or heavily edited photos that misrepresent reality
- Embrace: Vulnerability, humor about cultural mishaps, honest limitations
- Embrace: Educational insights (language learning, expat life, parenting abroad)

### Voice Examples
**✓ Good:**
- "I spent three hours getting lost in Saigon traffic. Here's what I learned about urban navigation (and patience)."
- "As a Taiwanese-American in Taiwan, I'm still discovering things my parents never told me about home."

**✗ Avoid:**
- "LIFE-CHANGING experience in Vietnam! 💫 Use code WENDY10 for hotels!"
- "The most beautiful sunset of my life (with all color saturation cranked to 11)"

**Why this matters:** The voice is the core differentiator. Authenticity builds trust and attracts readers who value substance over aesthetics.

---

## Visual Identity

### Design Aesthetic
- **Minimal and editorial:** Clean layouts prioritize content; design doesn't compete for attention
- **Warm, muted palette:** Earth tones, dusty pastels, warm neutrals create a calm, contemplative feeling
- **Generous whitespace:** Content breathes; no cramped, cluttered layouts
- **Typography-forward:** Good typography does the heavy lifting; other design elements are restrained
- **Photography as texture:** Images should feel like extensions of the narrative, not stock photography

### Color Palette (Reference)
| Use | Hex Value | Tailwind |
|-----|-----------|----------|
| Background | #ffffff | white |
| Body text | #141313 | gray-900 |
| Headings | #1f1d1d | gray-900 |
| Card/section bg | #f5f0eb | amber-50 |
| Accent (links, hover) | #b72e09 | red-700 |
| Secondary accent | #c48f8f | rose-400 |
| Nav/UI | #2e2b2b | gray-800 |

**Decision Rationale:** This palette avoids bright, saturated colors that feel "designed." Instead, it uses warm, desaturated tones that feel editorial and sophisticated, matching the voice.

### Typography (Reference)
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (hero) | Inria Serif | 58px / 36px mobile | 700 | 1.2 |
| H2 (post title) | Inria Serif | 36px | 700 | 1.3 |
| H3 (section) | Inria Serif | 24px | 600 | 1.4 |
| Body | Cabin | 18px | 400 | 1.6 |
| Navigation | Cabin | 15px | 400–500 | 1.4 |
| Meta (date, category) | Cabin | 14px | 400 | 1.4 |

**Decision Rationale:** Inria Serif is chosen for headings because it's elegant without being precious; Cabin is chosen for body text because it's highly readable on screens and pairs well. Self-hosting both fonts ensures brand consistency and avoids relying on Google Fonts for design system.

### What to Avoid
- Stock photography (especially travel clichés: generic beach sunsets, overly styled food photos)
- Bright, saturated colors or vibrant gradients
- Trendy design patterns (if it trends on Dribbble, it's probably not right for this brand)
- Heavy use of illustrations or decorative elements
- Anything that feels "designed" rather than editorial

---

## Core Values

### Authenticity Over Aesthetics
The site should prioritize truth-telling and substance over picture-perfect presentation. A real moment is more valuable than a staged one.

**Decision Rationale:** Many travel blogs fail because they prioritize visual polish over substance. Wendy's differentiation is her honest voice; the design should stay out of the way.

### Educational Value
Content should teach readers something: about language, culture, logistics, or personal growth.

**Decision Rationale:** Content that purely entertains or documents vanity experiences is commoditized. Content that educates builds a loyal, engaged audience.

### No Sponsored Content
The site never carries paid partnerships, affiliate links, or sponsored posts. Reader trust is non-negotiable.

**Decision Rationale:** Trust is the currency of a personal blog. Once readers suspect commercial motivation, the authenticity collapses.

### Accessibility as Standard
All content is readable, navigable, and accessible to people with visual, hearing, motor, and cognitive disabilities.

**Decision Rationale:** Accessibility isn't a "nice-to-have"—it's a core value that aligns with the inclusive, thoughtful approach to global experience.

---

## Implementation Guidelines

### For Writers
1. Before publishing: Ask "Is this authentic? Does it educate or help readers?"
2. Use personal pronouns (I, we) and conversational language
3. Share vulnerable moments alongside victories
4. Link to related posts to build a web of knowledge

### For Designers/Developers
1. Typography should be the star; layout supports the words
2. Use whitespace generously to create a calm, editorial feeling
3. Never use placeholder images; every image should serve the narrative
4. Test all content on mobile first; responsive design is required
5. Avoid decorative elements that don't serve a purpose

### For Content Organization
1. Posts are organized by **category** (Travelogue, Reflection, Living Abroad, Language & Culture)
2. Each post has **metadata** (title, date, category, excerpt, featured image)
3. Internal linking connects related posts thematically
4. No popup overlays, autoplay videos, or ad-like interruptions

---

## Design System Philosophy

**Why templated components?** Consistency reduces cognitive load for readers; it makes the site feel intentional and professional. Every component (post card, navigation, footer) should feel like it belongs to the same family.

**Why minimal custom CSS?** Tailwind's utility classes ensure responsive design without building custom media queries. Self-hosting fonts ensures brand consistency and eliminates external dependencies.

**Why responsive-first?** The majority of readers come from mobile. Desktop is the stretch goal, not the starting point.

---

## Brand Checklist Before Publishing

- [ ] Does the content feel authentic? (Not performative or polished?)
- [ ] Is the voice conversational and honest?
- [ ] Are images real moments or meaningful visuals? (Not stock photography)
- [ ] Does the layout feel clean and editorial?
- [ ] Is the text readable? (Good contrast, appropriate font size)
- [ ] Are internal links present where relevant?
- [ ] Does metadata (title, category, date, excerpt) exist?
- [ ] Is the design minimal (no unnecessary decorative elements)?
- [ ] Would someone with a screen reader be able to navigate this?

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any travel/lifestyle blog prioritizing authenticity and editorial aesthetics
