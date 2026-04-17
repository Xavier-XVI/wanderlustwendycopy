# Assets Organization & Self-Hosting Strategy

**Purpose:** Define how static assets (fonts, etc.) are organized and managed. Establish best practices for self-hosting assets to ensure brand consistency and reduce external dependencies.

---

## Asset Philosophy

Assets (fonts, icons, etc.) are self-hosted rather than fetched from CDNs. This approach:
- **Ensures consistency:** Fonts don't change unexpectedly
- **Reduces dependencies:** No reliance on third-party services
- **Improves privacy:** No tracking pixels from external services
- **Guarantees availability:** No risk of CDN downtime affecting the site
- **Optimizes performance:** Assets are served from the same origin with no extra DNS lookups

**Decision Rationale:** Self-hosting increases control and reliability at minimal cost.

---

## Folder Structure

```
src/assets/
├── fonts/
│   ├── inria-serif-700.woff2
│   ├── inria-serif-400.woff2
│   ├── cabin-500.woff2
│   ├── cabin-400.woff2
│   └── README.md (this file)
└── ... (future: icons, other assets)
```

---

## Fonts: Inria Serif & Cabin

### Why These Fonts?

**Inria Serif** (headings)
- Elegant, editorial serif typeface
- Licensed under SIL Open Font License (free, open source)
- Used for all headings (H1, H2, H3)
- Provides brand identity and sophistication

**Cabin** (body text)
- Clean, readable sans-serif typeface
- Licensed under SIL Open Font License (free, open source)
- Used for body text, navigation, metadata
- Excellent on-screen readability

**Decision Rationale:** Both fonts are open-source and free to use and modify. They pair well together and align with the brand's editorial, minimal aesthetic.

---

## Font File Types

Modern web typography uses **WOFF2** format:
- **WOFF2** (Web Open Font Format 2): Compressed, modern, supported by all modern browsers
- Smaller file size than TTF or OTF
- No need to provide fallbacks (all modern browsers support WOFF2)

**File structure:**
```
Filename: [FontName]-[Weight].woff2
Examples:
- inria-serif-700.woff2 (bold headings)
- inria-serif-400.woff2 (regular, rarely used)
- cabin-500.woff2 (medium, for navigation)
- cabin-400.woff2 (regular, for body text)
```

**Decision Rationale:** WOFF2 is the modern standard, reducing file size and improving performance.

---

## Implementing Fonts in CSS

Fonts are declared in `src/styles/globals.css` using `@font-face`:

```css
/* Inria Serif Bold (for headings) */
@font-face {
  font-family: 'Inria Serif';
  src: url('/fonts/inria-serif-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

/* Cabin Regular (for body text) */
@font-face {
  font-family: 'Cabin';
  src: url('/fonts/cabin-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

/* Cabin Medium (for navigation) */
@font-face {
  font-family: 'Cabin';
  src: url('/fonts/cabin-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}
```

Then, use them in Tailwind configuration:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    fontFamily: {
      serif: ['Inria Serif', 'serif'],
      sans: ['Cabin', 'sans-serif'],
    },
  },
};
```

**Decision Rationale:** Declaring fonts in CSS ensures they load once per page; using them in Tailwind config makes them available to all components.

---

## Font Loading Strategy

### Critical Fonts (Headings)
Inria Serif should load immediately because it's critical to the page appearance.

### Non-Critical Fonts (Body Text)
Cabin can load asynchronously with `font-display: swap`, which shows a fallback serif/sans font until the web font loads.

```css
@font-face {
  font-family: 'Cabin';
  src: url('/fonts/cabin-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback serif until Cabin loads */
}
```

**Decision Rationale:** `font-display: swap` prevents blank text (FOUT) and shows content immediately. This improves perceived performance.

---

## Font Licensing & Attribution

### Inria Serif
- **License:** SIL Open Font License (OFL)
- **Source:** https://www.inria.fr/en/inria-fonts
- **Attribution required:** Yes (in FONTS-LICENSE.md or similar)
- **Commercial use:** Allowed
- **Modification:** Allowed

### Cabin
- **License:** SIL Open Font License (OFL)
- **Source:** https://www.impallari.com/cabin
- **Attribution required:** Yes
- **Commercial use:** Allowed
- **Modification:** Allowed

### Attribution File
Create `src/assets/fonts/LICENSES.md`:

```markdown
# Font Licenses

## Inria Serif
Licensed under the SIL Open Font License.
Source: https://www.inria.fr/en/inria-fonts
Created by Inria.

## Cabin
Licensed under the SIL Open Font License.
Source: https://www.impallari.com/cabin
Created by Pablo Impallari and Igino Marini.
```

**Decision Rationale:** Proper attribution respects font creators and ensures license compliance.

---

## Font Subsetting (Phase 2, Optional)

If font file sizes become a concern, consider subsetting fonts to include only necessary characters:

**Tools:**
- `subfont` — Automatically subsets fonts for web
- Google Fonts tools
- Fonttools (command-line)

**Example:** Subset Cabin to Latin characters only (excludes Cyrillic, Greek, etc.):

```bash
fonttools subset cabin-400.woff2 --unicodes=U+0000-U+00FF,U+0131
```

This reduces file size significantly if you don't need international character support.

**Decision Rationale:** Phase 1 uses full fonts for simplicity. Phase 2 optimizes if performance metrics indicate need.

---

## Performance Optimization

### Font File Sizes
- Typical WOFF2 files: 20–50 KB per weight
- Total for Inria Serif (1 weight) + Cabin (2 weights): ~80–100 KB
- Impact on page load: Minimal (fonts are cached after first load)

### Preload Hints (Optional)
For critical fonts (Inria Serif), add a preload hint in the HTML `<head>`:

```html
<link rel="preload" as="font" type="font/woff2" href="/fonts/inria-serif-700.woff2" crossorigin />
```

**Decision Rationale:** Preloading critical fonts prioritizes their loading and improves visual stability.

---

## Future Assets (Phase 2+)

### Icons
If the design needs icons, consider:
- **SVG icons:** Inline SVG in components (no file needed)
- **Icon font:** If multiple icons are needed (create a custom font)
- **Icon library:** Lucide Icons (lightweight, free, open-source)

### Illustrations
- **Custom SVGs:** Created by designer or using Figma
- **Avoid raster images** (PNGs, JPGs) for decorative graphics; use SVG for scalability

### Other Assets
- **Favicon:** Stored in `public/` (not `src/assets/`)
- **OG images:** Blog post featured images (stored in `public/images/`)

**Decision Rationale:** SVG is preferred for scalability and small file size. Raster formats are used only for photographs.

---

## Adding a New Asset

To add a new asset to the project:

1. **Get the file** (download font, create SVG, etc.)
2. **Optimize it** (compress with fonttools, optimize SVG with SVGO, etc.)
3. **Place it in appropriate folder** (`src/assets/fonts/`, etc.)
4. **Reference in CSS or component** (via `@font-face` or `<link>`)
5. **Document it** (update this README)
6. **Test it** (verify it loads and works on all devices)

---

## Asset Checklist

- [ ] Font files are WOFF2 format (no TTF or OTF)
- [ ] Font files are compressed (< 50 KB per weight)
- [ ] Font licensing is documented (LICENSES.md)
- [ ] Fonts are declared in CSS with `@font-face`
- [ ] Fonts are used in Tailwind config
- [ ] Fonts load without breaking page layout (use `font-display: swap`)
- [ ] Fallback fonts are specified (serif, sans-serif)
- [ ] No external CDN dependencies (all assets self-hosted)
- [ ] Preload hints are added for critical fonts (optional)

---

**Document Status:**
- **Version:** 1.0
- **Last Updated:** April 14, 2026
- **Reusable for:** Any static site with self-hosted fonts
