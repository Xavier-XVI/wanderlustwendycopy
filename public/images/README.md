# Image Organization & Optimization Guidelines

**Purpose:** Define image naming conventions, optimization standards, and best practices for sourcing images for the site.

---

## Image Philosophy

Images on this site serve a purpose: they illustrate stories, convey emotions, and document real experiences. Every image should:
- Be **authentic** (real photos from real experiences, not stock imagery)
- Be **optimized** (correct format, compressed, appropriate dimensions)
- Be **accessible** (descriptive alt text for screen readers and SEO)
- Be **consistent** (color-corrected, similarly edited, cohesive tone)

**Decision Rationale:** Authentic images build trust and differentiate the blog from stock-heavy travel sites. Optimization ensures fast page loads.

---

## Folder Structure

```
public/images/
├── README.md                              ← YOU ARE HERE
├── sapa-vietnam-hiking--hero.jpg          ← Hero/featured image
├── sapa-vietnam-hiking--locals.jpg        ← In-post image
├── sapa-vietnam-hiking--sunset.jpg        ← In-post image
├── ha-giang-car-tour--hero.jpg
├── saigon-living-guide--hero.jpg
├── ... (additional post images)
└── favicon.ico                            ← Site favicon
```

---

## Image Naming Convention

All images follow a consistent naming pattern:

```
[post-slug]--[image-name].[format]
```

**Rules:**
- Start with the **post slug** (matches the post filename)
- Add `--` (double hyphen) as a separator
- Add a **descriptive image name**
- Use `.jpg` for photographs, `.png` for graphics
- All lowercase, hyphenated

**Examples:**
- `sapa-vietnam-hiking--hero.jpg` — Featured/hero image for the Sapa post
- `sapa-vietnam-hiking--locals.jpg` — Photo of local people in Sapa
- `sapa-vietnam-hiking--sunset.jpg` — Sunset photo from the hike
- `saigon-living-guide--apartment.jpg` — Photo of a typical Saigon apartment

**Special case:**
- `favicon.ico` — Site favicon (appears in browser tab)

**Decision Rationale:** This naming convention makes images easy to find, relates them to their posts, and allows batch operations (e.g., all Sapa images start with `sapa-vietnam-hiking--`).

---

## Image Formats

### JPEG (.jpg)
**Use for:** Photographs, complex images, nature photography
- **Compression:** Lossy (some quality lost, but file size much smaller)
- **File size:** 100–300 KB typical
- **Quality setting:** 80% (good balance of quality and file size)
- **Example:** `sapa-vietnam-hiking--sunset.jpg`

### PNG (.png)
**Use for:** Graphics, icons, images requiring transparency
- **Compression:** Lossless (no quality loss)
- **File size:** Usually larger than JPEG
- **Only if necessary:** Transparency is required
- **Example:** Infographic or diagram (rare in travel blog)

### WebP (.webp, Phase 2)
**Use for:** Future optimization; smaller than JPEG without quality loss
- **Phase 1:** Not required (JPEG is sufficient)
- **Phase 2:** Convert JPEG → WebP for performance
- **Tools:** ImageMagick, online converters

**Decision Rationale:** JPEG is standard for photographs; PNG for graphics. WebP is added in Phase 2 for optimization.

---

## Image Dimensions & Optimization

### Featured/Hero Image (for featured image in post)
- **Dimensions:** 1200px × 630px (16:9 aspect ratio)
- **Purpose:** Open Graph image, social media sharing, post preview
- **File size:** < 200 KB (after compression)
- **Optimization:** Compress with ImageMagick or online tool

### Inline Images (within post content)
- **Dimensions:** Max width 800px (fits within post content)
- **Purpose:** Illustrate points within the narrative
- **File size:** < 150 KB per image
- **Optimization:** Compress with ImageMagick or online tool

### Multiple images in a post
- Don't exceed 5 images per post (keeps page load time under 3s)
- Use images that directly support the narrative
- Avoid decorative images that don't serve a purpose

**Decision Rationale:** 1200×630 is the standard for social media sharing. Inline images are sized to fit the content width without scrolling.

---

## Image Optimization Process

### Before Uploading:
1. **Crop** to the desired dimensions
2. **Resize** to target dimensions (1200px wide for featured, 800px for inline)
3. **Compress** using ImageMagick or online tool
4. **Check file size** (< 200 KB for featured, < 150 KB for inline)

### Tools:
- **ImageMagick** (command-line): `convert input.jpg -quality 80 -resize 1200x630 output.jpg`
- **Online tools:** TinyJPG, Compressor.io, ImageOptim
- **Manual in editor:** Most photo editors (Lightroom, Photoshop, Figma) allow export quality settings

### Target File Sizes:
| Image Type | Max Size | Typical Size |
|-----------|----------|--------------|
| Featured image | 200 KB | 120–180 KB |
| Inline image | 150 KB | 80–120 KB |

**Decision Rationale:** Compressed images load faster, reducing page load time and improving user experience on mobile.

---

## Image Alt Text Guidelines

Every image **must have descriptive alt text**. Alt text is used by:
- Screen readers (for accessibility)
- Search engines (for SEO)
- When images fail to load (as fallback text)

### Alt Text Best Practices

✓ **Good alt text:**
- Descriptive and concise (1–3 sentences)
- Includes relevant context
- Describes what's in the image and why it matters
- Example: "Local vendor arranging fresh flowers at the Hoi An night market"

✗ **Avoid:**
- "Image" or "Photo" (too generic)
- "Picture of a sunset" (too vague)
- Very long sentences (unclear for screen readers)
- Keyword stuffing (doesn't help SEO and is inaccessible)
- Empty alt text (defeats the purpose)

### How to Add Alt Text in Markdown

```markdown
![Local vendor arranging flowers at Hoi An night market](../../public/images/hoi-an-night-market--flowers.jpg)

{/* Alt text is between the [ ] brackets */}
```

### Hero Image Alt Text
For featured images, use alt text in the frontmatter (layout handles this):

```yaml
---
title: "Sapa, Vietnam: Hiking in the Clouds"
featured: "../../public/images/sapa-vietnam-hiking--hero.jpg"
featured_alt: "Misty mountains and green rice terraces in Sapa"
---
```

**Decision Rationale:** Descriptive alt text improves accessibility and SEO without adding visible clutter.

---

## Image Color Consistency

Aim for a **cohesive visual tone** across all images:

### Color Grading Guidelines
- **Saturation:** Natural (don't over-saturate or desaturate)
- **Contrast:** Good but not punchy (align with the brand's calm, editorial tone)
- **Warmth:** Slightly warm (amber/golden tones, not cool/blue)
- **Consistency:** All images should feel like they're from the same photographer/editor

### Tools:
- Lightroom presets (create one preset and apply to all post images)
- Photoshop actions
- VSCO or similar mobile apps
- Online tools like Pixlr or Canva

**Decision Rationale:** Color consistency makes the site feel intentional and professional. It's worth the extra effort.

---

## Image Sourcing

### What NOT to Use
- ✗ Generic stock photos (Unsplash, Pexels, etc.)
- ✗ Photos that don't match the story (misleading)
- ✗ AI-generated images (contrary to brand authenticity)
- ✗ Copyrighted images without permission

### What to USE
- ✓ Original photographs from the author
- ✓ Photos taken specifically for the blog
- ✓ Photos with permission from the subject (ask locals before posting)
- ✓ Creative Commons or licensed images (with proper attribution)

**Decision Rationale:** Authentic, original images build trust. Generic stock photos undermine credibility.

---

## Responsive Images (Phase 2, Optional)

In Phase 1, images are fixed size. Phase 2 may include responsive image sizes:

```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-1200.jpg">
  <source media="(min-width: 640px)" srcset="image-800.jpg">
  <img src="image-600.jpg" alt="..." />
</picture>
```

This serves different image sizes to different devices, optimizing for mobile/tablet/desktop.

**Decision Rationale:** Responsive images reduce file size on mobile (improves performance). Phase 1 uses fixed sizes for simplicity.

---

## Favicon

The site favicon (appears in the browser tab) is stored here:

```
public/images/favicon.ico
```

### Favicon Specifications
- **Format:** .ico (32×32 or 64×64 pixels)
- **File size:** < 10 KB
- **Purpose:** Browser tab identification

### Creating a Favicon
1. Design a simple image (32×32 pixels)
2. Convert to .ico format using an online tool
3. Save as `favicon.ico` in `public/images/`
4. Reference in HTML `<head>`: `<link rel="icon" href="/images/favicon.ico" />`

**Decision Rationale:** Favicon provides brand recognition in the browser. Simple design is best (detail is lost at small size).

---

## Image Checklist Before Publishing

- [ ] Image is authentic (original photo, not stock)
- [ ] Image is compressed (< 200 KB featured, < 150 KB inline)
- [ ] Image dimensions are correct (1200×630 featured, max 800px inline)
- [ ] Image is color-graded consistently with other site images
- [ ] Image filename follows naming convention (`post-slug--image-name.jpg`)
- [ ] Image has descriptive alt text (1–3 sentences, descriptive)
- [ ] Image serves the narrative (not decorative or misleading)
- [ ] Image is referenced correctly in markdown (correct relative path)
- [ ] Image loads on mobile, tablet, and desktop without scrolling

---

## Performance Impact

### Page Load Time Estimate
- **3 images @ 100 KB each:** ~300 KB total → ~1–2 seconds load time on 4G
- **5 images @ 100 KB each:** ~500 KB total → ~2–3 seconds load time on 4G
- **Target:** Keep total page size < 500 KB for sub-3-second load time

**Decision Rationale:** Compressed images ensure fast load times, which improve user experience and SEO.

---

## Phase 2 Enhancements

- **WebP format:** Smaller file sizes without quality loss
- **Lazy loading:** Images load only when user scrolls to them
- **Responsive images:** Different sizes for different devices
- **Image processing pipeline:** Automated image compression and resizing
- **Image CDN:** Cloudinary or similar for dynamic optimization

**Decision Rationale:** Phase 2 adds advanced image optimization. Phase 1 focuses on manual optimization and core functionality.

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any static site with image optimization requirements
