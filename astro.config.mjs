import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://xavier-xvi.github.io',
  base: '/wanderlustwendycopy',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/README'),
    }),
    mdx(),
  ],
  build: {
    // Exclude README.md files from being treated as pages
  },
});
