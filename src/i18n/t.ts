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
import { seoEn, seoAr } from './dict-seo';
import { livraisonEn, livraisonAr } from './dict-livraison';
import { livraison2En, livraison2Ar } from './dict-livraison-2';
import { livraison3En, livraison3Ar } from './dict-livraison-3';
import { livraison4En, livraison4Ar } from './dict-livraison-4';
import { livraison5En, livraison5Ar } from './dict-livraison-5';
import { livraison6En, livraison6Ar } from './dict-livraison-6';
const D: Record<Lang, Record<string, string>> = { fr: {}, en: { ...seoEn, ...garageEn, ...dictEn, ...venuesEn, ...immoEn, ...pressingEn, ...hanoutEn, ...homeEn, ...livraisonEn, ...livraison2En, ...livraison3En, ...livraison4En, ...livraison5En, ...livraison6En }, ar: { ...seoAr, ...garageAr, ...dictAr, ...venuesAr, ...immoAr, ...pressingAr, ...hanoutAr, ...homeAr, ...livraisonAr, ...livraison2Ar, ...livraison3Ar, ...livraison4Ar, ...livraison5Ar, ...livraison6Ar } };
export const tr = (lang: Lang) => (fr: string): string => D[lang][fr] ?? fr;
/** The language of the page being rendered, from its URL. */
export const langOf = (url: URL): Lang => (url.pathname.startsWith('/ar/') || url.pathname === '/ar' ? 'ar' : url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : 'fr');
