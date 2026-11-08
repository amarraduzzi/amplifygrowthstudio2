// Restaurants listed on Bssaha. To add one: copy a block, fill it in, commit. `actif: false` hides it.
// Texts that visitors read are given in the three languages: { fr, en, ar }.
// ville: id of the city in src/data/cities.ts (default 'rabat').
// modes: 'direct' (own order page), 'whatsapp', 'livraison' (restaurant's own delivery), 'emporter'.
// horaires (optional, for "Ouvert maintenant"): keys lun mar mer jeu ven sam dim, value "11:00-23:00".
import type { Lang } from '../i18n/routes';
export type Mode = 'direct' | 'whatsapp' | 'livraison' | 'emporter';
export type L = Record<Lang, string>;
export interface Resto {
  nom: string; ville?: string; quartier: L; cuisine: L; description: L;
  modes: Mode[]; orderUrl?: string; whatsapp?: string; horaires?: Record<string, string>; actif: boolean;
}
const RABAT: L = { fr: 'Rabat', en: 'Rabat', ar: 'الرباط' };
export const RESTOS: Resto[] = [
  { nom: 'Relais Marin', ville: 'rabat', quartier: RABAT,
    cuisine: { fr: 'Café-restaurant', en: 'Café-restaurant', ar: 'مقهى ومطعم' },
    description: { fr: 'Café-restaurant en bord de mer. Commandez directement auprès du restaurant.', en: 'Seaside café-restaurant. Order directly from the restaurant.', ar: 'مقهى ومطعم على شاطئ البحر. اطلب مباشرة من المطعم.' },
    modes: ['direct'], orderUrl: 'https://site.amplifygrowthstudio.com/relais-marin', actif: true },
  // Fill in orderUrl and/or whatsapp (international format, e.g. 2126...), then set actif: true
  { nom: 'Indian Flavors', ville: 'rabat', quartier: RABAT,
    cuisine: { fr: 'Indien', en: 'Indian', ar: 'هندي' },
    description: { fr: 'Cuisine indienne. Commande directe auprès du restaurant.', en: 'Indian cuisine. Order directly from the restaurant.', ar: 'مطبخ هندي. اطلب مباشرة من المطعم.' },
    modes: ['direct', 'whatsapp'], orderUrl: '', whatsapp: '', actif: false },
];
