// Every page and its address per language. A language only gets links once it is in SITE.languages.
import { SITE } from '../config';

export type Lang = 'fr' | 'ar' | 'en';
export type PageKey = 'home' | 'systems' | 'pos' | 'profit' | 'features' | 'marketing' | 'restaurants' | 'contact';

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { fr: '/', ar: '/ar/', en: '/en/' },
  systems: { fr: '/systemes/', ar: '/ar/systemes/', en: '/en/systems/' },
  pos: { fr: '/amplify-pos/', ar: '/ar/amplify-pos/', en: '/en/amplify-pos/' },
  profit: { fr: '/amplify-profit/', ar: '/ar/amplify-profit/', en: '/en/amplify-profit/' },
  features: { fr: '/amplify-pos/fonctionnalites/', ar: '/ar/amplify-pos/fonctionnalites/', en: '/en/amplify-pos/features/' },
  marketing: { fr: '/marketing/', ar: '/ar/marketing/', en: '/en/marketing/' },
  restaurants: { fr: '/restaurants/', ar: '/ar/restaurants/', en: '/en/restaurants/' },
  contact: { fr: '/contact/', ar: '/ar/contact/', en: '/en/contact/' },
};

export const LOCALE: Record<Lang, string> = { fr: 'fr-MA', ar: 'ar-MA', en: 'en' };
export const liveLanguages = () => [...SITE.languages] as Lang[];
export const href = (page: PageKey, lang: Lang) => ROUTES[page][lang];
export const abs = (path: string) => new URL(path, SITE.url).toString();
