import { SITE } from '../config';
export const GET = () => new Response(
  SITE.live
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', SITE.url)}\n`
    // not live yet: pages carry noindex; crawlers may read them to see it
    : `User-agent: *\nAllow: /\n`,
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
