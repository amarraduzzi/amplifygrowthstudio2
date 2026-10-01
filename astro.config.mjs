// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  integrations: [sitemap({
    i18n: { defaultLocale: 'fr', locales: { fr: 'fr-MA', ar: 'ar-MA', en: 'en' } },
  })],
  vite: { plugins: [tailwindcss()] },
});
