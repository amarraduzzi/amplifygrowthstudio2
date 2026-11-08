// Restaurants listed on Bssaha. To add one: copy a block, fill it in, commit. `actif: false` hides it.
// modes: 'direct' (own order page), 'whatsapp', 'livraison' (restaurant's own delivery), 'emporter'.
// horaires (optional, for "Ouvert maintenant"): keys lun mar mer jeu ven sam dim, value "11:00-23:00".
export type Mode = 'direct' | 'whatsapp' | 'livraison' | 'emporter';
export interface Resto {
  nom: string; quartier: string; cuisine: string; description: string;
  modes: Mode[]; orderUrl?: string; whatsapp?: string; horaires?: Record<string, string>; actif: boolean;
}
export const MODES: Record<Mode, string> = {
  direct: 'Commande directe', whatsapp: 'WhatsApp', livraison: 'Livraison du restaurant', emporter: 'À emporter',
};
export const RESTOS: Resto[] = [
  { nom: 'Relais Marin', quartier: 'Rabat', cuisine: 'Café-restaurant', description: 'Café-restaurant en bord de mer. Commandez directement auprès du restaurant.',
    modes: ['direct'], orderUrl: 'https://site.amplifygrowthstudio.com/relais-marin', actif: true },
  // Fill in orderUrl and/or whatsapp, then set actif: true
  { nom: 'Indian Flavors', quartier: 'Rabat', cuisine: 'Indien', description: 'Cuisine indienne. Commande directe auprès du restaurant.',
    modes: ['direct', 'whatsapp'], orderUrl: '', whatsapp: '', actif: false },
];
