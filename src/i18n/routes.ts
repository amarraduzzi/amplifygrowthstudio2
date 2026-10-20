// Every page and its address per language. A language only gets links once it is in SITE.languages.
import { SITE } from '../config';

export type Lang = 'fr' | 'ar' | 'en';
export type PageKey = 'home' | 'pricing' | 'systems' | 'pos' | 'profit' | 'site' | 'features' | 'marketing' | 'restaurants' | 'bakery' | 'contact' | 'blogChiffres' | 'blogPointMort' | 'blogValeur' | 'blogVues' | 'blogCout' | 'blogPlateforme' | 'blogCouts' | 'blog';

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { fr: '/', ar: '/ar/', en: '/en/' },
  pricing: { fr: '/tarifs/', ar: '/ar/tarifs/', en: '/en/pricing/' },
  systems: { fr: '/systemes/', ar: '/ar/systemes/', en: '/en/systems/' },
  pos: { fr: '/amplify-pos/', ar: '/ar/amplify-pos/', en: '/en/amplify-pos/' },
  profit: { fr: '/amplify-profit/', ar: '/ar/amplify-profit/', en: '/en/amplify-profit/' },
  site: { fr: '/amplify-site/', ar: '/ar/amplify-site/', en: '/en/amplify-site/' },
  features: { fr: '/amplify-pos/fonctionnalites/', ar: '/ar/amplify-pos/fonctionnalites/', en: '/en/amplify-pos/features/' },
  marketing: { fr: '/marketing/', ar: '/ar/marketing/', en: '/en/marketing/' },
  restaurants: { fr: '/restaurants/', ar: '/ar/restaurants/', en: '/en/restaurants/' },
  bakery: { fr: '/patisseries/', ar: '/ar/patisseries/', en: '/en/bakeries/' },
  contact: { fr: '/contact/', ar: '/ar/contact/', en: '/en/contact/' },
  // French-only article: the page passes langsOnly=['fr'] to Base, so ar/en are never linked or listed in hreflang
  blog: { fr: '/blog/', ar: '/blog/', en: '/blog/' },
  blogChiffres: { fr: '/blog/six-chiffres-restaurateur/', ar: '/blog/six-chiffres-restaurateur/', en: '/blog/six-chiffres-restaurateur/' },
  blogPointMort: { fr: '/blog/point-mort-restaurant/', ar: '/blog/point-mort-restaurant/', en: '/blog/point-mort-restaurant/' },
  blogValeur: { fr: '/blog/valeur-de-votre-restaurant/', ar: '/blog/valeur-de-votre-restaurant/', en: '/blog/valeur-de-votre-restaurant/' },
  blogPlateforme: { fr: '/blog/commande-plateforme/', ar: '/blog/commande-plateforme/', en: '/blog/commande-plateforme/' },
  blogCouts: { fr: '/blog/couts-bas-defauts-caches/', ar: '/blog/couts-bas-defauts-caches/', en: '/blog/couts-bas-defauts-caches/' },
  blogCout: { fr: '/blog/cout-dun-plat/', ar: '/blog/cout-dun-plat/', en: '/blog/cout-dun-plat/' },
  blogVues: { fr: '/blog/80000-vues/', ar: '/blog/80000-vues/', en: '/blog/80000-vues/' },
};

export const LOCALE: Record<Lang, string> = { fr: 'fr-MA', ar: 'ar-MA', en: 'en' };
export const liveLanguages = () => [...SITE.languages] as Lang[];
export const href = (page: PageKey, lang: Lang) => ROUTES[page][lang];
export const abs = (path: string) => new URL(path, SITE.url).toString();
