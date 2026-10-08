// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config.ts';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Headings are built from several <span class="block"> lines. Browsers show them on separate lines,
 * but text readers (Google, ChatGPT, screen readers) glue the words: "sitepour". A space before
 * each block span keeps the words apart; on screen nothing changes.
 */
const readableText = {
  name: 'readable-text',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
        const f = path.join(d, e.name);
        if (e.isDirectory()) return walk(f);
        if (!f.endsWith('.html')) return;
        const html = fs.readFileSync(f, 'utf8');
        const out = html
          .replace(/([^\s>]|<\/span>)(<span class="(?:block|pb-t|word)\b)/g, '$1 $2')
          .replace(/(<\/h[1-4]>)(?=<)/g, '$1\n');
        if (out !== html) fs.writeFileSync(f, out);
      });
      walk(dir.pathname);
    },
  },
};

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  integrations: [readableText, sitemap({
    i18n: { defaultLocale: 'fr', locales: { fr: 'fr-MA', ar: 'ar-MA', en: 'en' } },
  })],
  vite: { plugins: [tailwindcss()] },
});
