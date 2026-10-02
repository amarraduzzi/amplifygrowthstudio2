// Inline strings of the components. The French text is the key: EN and AR dictionaries map it.
// A missing key falls back to French, so nothing ever shows empty.
import type { Lang } from './routes';
import { dictEn } from './dict-en';
import { dictAr } from './dict-ar';
const D: Record<Lang, Record<string, string>> = { fr: {}, en: dictEn, ar: dictAr };
export const tr = (lang: Lang) => (fr: string): string => D[lang][fr] ?? fr;
/** The language of the page being rendered, from its URL. */
export const langOf = (url: URL): Lang => (url.pathname.startsWith('/ar/') || url.pathname === '/ar' ? 'ar' : url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : 'fr');
