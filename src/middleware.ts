// English and Arabic pages: the long copy comes from the en/ar files. Short inline strings written in
// French inside the components are swapped here, on the finished HTML, from the dictionaries
// (dict-en.ts, dict-ar.ts; key = the exact French text). Scripts and styles are left untouched.
import { defineMiddleware } from 'astro:middleware';
import { dictEn } from './i18n/dict-en';
import { dictAr } from './i18n/dict-ar';

const decode = (s: string) => s.replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const encText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const encAttr = (s: string) => encText(s).replace(/"/g, '&quot;');

const swap = (html: string, d: Record<string, string>, ar = false) => {
  // keep <script>, <style>, JSON-LD and <x-notr> zones (demos that show several languages on purpose) as they are
  return html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<x-notr>[\s\S]*?<\/x-notr>)/i).map((part, i) => {
    if (i % 2) return part;
    // text between tags
    part = part.replace(/>([^<]+)</g, (m, raw: string) => {
      const txt = decode(raw); const key = txt.trim();
      if (!key || !(key in d)) {
        // Arabic: DH / MAD inside mixed text (amounts built from numbers) become درهم
        if (ar && /\b(DH|MAD)\b/.test(txt)) return `>${encText(txt.replace(/\b(DH|MAD)\b/g, 'درهم'))}<`;
        return m;
      }
      const lead = txt.slice(0, txt.indexOf(key)), tail = txt.slice(txt.indexOf(key) + key.length);
      return `>${encText(lead + d[key] + tail)}<`;
    });
    // readable attributes
    part = part.replace(/\b(alt|aria-label|placeholder|title|content|data-t)="([^"]*)"/g, (m, a: string, raw: string) => {
      const key = decode(raw).trim();
      return key && key in d ? `${a}="${encAttr(d[key])}"` : m;
    });
    return part;
  }).join('');
};

export const onRequest = defineMiddleware(async (ctx, next) => {
  const res = await next();
  const p = ctx.url.pathname;
  const d = p.startsWith('/en/') ? dictEn : p.startsWith('/ar/') ? dictAr : null;
  if (!d || !Object.keys(d).length || !(res.headers.get('content-type') ?? '').includes('text/html')) return res;
  const html = await res.text();
  return new Response(swap(html, d, p.startsWith('/ar/')), { status: res.status, headers: res.headers });
});
