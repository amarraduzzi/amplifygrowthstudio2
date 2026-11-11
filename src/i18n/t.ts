// Inline strings of the components. The French text is the key: EN and AR dictionaries map it.
// A missing key falls back to French, so nothing ever shows empty.
import type { Lang } from './routes';
import { dictEn } from './dict-en';
import { dictAr } from './dict-ar';
import { venuesEn, venuesAr } from './dict-venues';
import { immoEn, immoAr } from './dict-immobilier';
import { pressingEn, pressingAr } from './dict-pressing';
import { garageEn, garageAr } from './dict-garage';
import { hanoutEn, hanoutAr } from './dict-hanout';
import { homeEn, homeAr } from './dict-home';
import { livraisonEn, livraisonAr } from './dict-livraison';
import { livraison2En, livraison2Ar } from './dict-livraison-2';
const D: Record<Lang, Record<string, string>> = { fr: {}, en: { ...garageEn, ...dictEn, ...venuesEn, ...immoEn, ...pressingEn, ...hanoutEn, ...homeEn, ...livraisonEn, ...livraison2En }, ar: { ...garageAr, ...dictAr, ...venuesAr, ...immoAr, ...pressingAr, ...hanoutAr, ...homeAr, ...livraisonAr, ...livraison2Ar } };
export const tr = (lang: Lang) => (fr: string): string => D[lang][fr] ?? fr;
/** The language of the page being rendered, from its URL. */
export const langOf = (url: URL): Lang => (url.pathname.startsWith('/ar/') || url.pathname === '/ar' ? 'ar' : url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : 'fr');
