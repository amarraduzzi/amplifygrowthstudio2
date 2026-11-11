// Bssaha model: the restaurants, the cities and the copy, shared by the Bssaha page and the Livraison page.
import { CITIES, MIN_TO_OPEN } from '../data/cities';
import { waLink } from '../config';
import { RESTOS } from '../data/bssaha';
import { bssahaCopy } from '../i18n/bssaha';
import type { Lang } from '../i18n/routes';
export function bssahaModel(lang: Lang) {
  const c = bssahaCopy(lang);
  // WhatsApp messages go to the Amplify team, who read French.
  const wa = 'Bonjour, je voudrais ajouter mon restaurant sur Bssaha.';
  const restos = RESTOS.filter(r => r.actif).map(r => ({
    nom: r.nom, ville: r.ville ?? 'rabat', modes: r.modes, horaires: r.horaires, quartier: r.quartier[lang], cuisine: r.cuisine[lang], description: r.description[lang],
    href: r.orderUrl || (r.whatsapp ? `https://wa.me/${r.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Bonjour, je souhaite commander (via Bssaha).')}` : ''),
    isWa: !r.orderUrl && !!r.whatsapp,
  }));
  const quartiers = [...new Set(restos.map(r => `${r.ville}|${r.quartier}`))].sort().map(x => x.split('|') as [string, string]);
  // The glow of a city on the dark page: Rabat is the brand green, the others glow in their petit-taxi colour (brightened for a dark background).
  const GLOW: Record<string, string> = { rabat: '#3DFFA0', casablanca: '#FF5A5F', fes: '#FF5A5F', tanger: '#6EC6FF', marrakech: '#E8B86D', agadir: '#FFA23A' };
  // cities: open when status is live, or as soon as MIN_TO_OPEN restaurants are listed
  const rows = CITIES.map(ct => {
    const count = restos.filter(r => r.ville === ct.id).length;
    const open = ct.status === 'live' || count >= MIN_TO_OPEN;
    const name = ct.name[lang];
    return { id: ct.id, name, lon: ct.lon, lat: ct.lat, color: ct.color, ink: ct.ink, glow: GLOW[ct.id] ?? '#3DFFA0', open, soon: !open && ct.status === 'soon', count, min: MIN_TO_OPEN,
      ownerHref: waLink(`Bonjour, je suis restaurateur à ${ct.name.fr} et je voudrais faire partie des premiers restaurants sur Bssaha.`),
      dinerHref: waLink(`Bonjour, prévenez-moi quand Bssaha ouvre à ${ct.name.fr}.`), listHref: '#liste' };
  });
  const openRows = rows.filter(r => r.open);
  const first = openRows[0];
  const otherHref = waLink('Bonjour, je voudrais Bssaha dans ma ville : ');
  const cuisines = [...new Set(restos.map(r => r.cuisine))].sort();
  const WA_JOIN = waLink(wa);
  return { c, wa, restos, quartiers, rows, openRows, first, otherHref, cuisines, WA_JOIN };
}
