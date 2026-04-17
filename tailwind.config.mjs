/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#ffffff',
        'brand-text': '#141313',
        'brand-heading': '#1f1d1d',
        'brand-card': '#f5f0eb',
        'brand-accent': '#b72e09',
        'brand-accent-soft': '#c48f8f',
        'brand-nav': '#2e2b2b',
      },
      fontFamily: {
        serif: ['Inria Serif', 'Georgia', 'serif'],
        sans: ['Cabin', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['58px', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'nav': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'meta': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      lineHeight: {
        'reading': '1.6',
      },
    },
  },
  plugins: [],
};
