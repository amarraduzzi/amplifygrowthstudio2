// The plans of every trade, in one place: used by the "Par métier" block on the pricing page
// and by the price block at the bottom of each sector page. Prices come from SECTOR in config.ts.
import { SECTOR } from '../config';

type Tt = (s: string) => string;
export interface Plan { name: string; n: number; text: string; /** the app's plan key, for the sign-up link */ id?: string }
export interface Metier { key: string; name: string; text: string; icon: string; plans?: Plan[]; price?: string; /** the trade the app signs up (a spa is a salon) */ signup?: 'salon' | 'pressing' | 'garage' | 'hanout' }

export function metiers(tt: Tt): Metier[] {
  const from = (n: number) => tt('Dès {n} DH HT par mois').replace('{n}', String(n));
  return [
    { key: 'salons', signup: 'salon', name: 'Amplify Salons', text: 'L’agenda du salon, avec le site, la caisse et l’acompte en option.', icon: 'scissors', plans: [
      { id: 'nouba', name: 'Nouba', n: SECTOR.salons.nouba, text: 'Pour les barbiers et les salons sans rendez-vous.' },
      { id: 'agenda', name: 'Agenda', n: SECTOR.salons.agenda, text: 'Pour les salons qui travaillent sur rendez-vous.' },
      { id: 'salon', name: 'Salon', n: SECTOR.salons.salon, text: 'Rendez-vous et clients sans rendez-vous, ensemble.' },
    ] },
    { key: 'spas', signup: 'salon', name: 'Amplify Spas', text: 'L’agenda du spa avec ses cabines, l’acompte, et en option la caisse et le site.', icon: 'leaf', plans: [
      { id: 'spa_agenda', name: 'Agenda', n: SECTOR.spas.agenda, text: 'Les rendez-vous, les cabines et la réservation en ligne.' },
      { id: 'spa_agenda_till', name: 'Agenda et caisse', n: SECTOR.spas.agendaTill, text: 'Pour les instituts qui n’ont pas besoin d’acompte.' },
      { id: 'spa_full', name: 'Spa complet', n: SECTOR.spas.full, text: 'L’agenda, la caisse et l’acompte, ensemble.' },
    ] },
    { key: 'pressing', signup: 'pressing', name: 'Amplify Pressing', text: 'Les dépôts, la page de suivi pour le client et la facture du mois pour les comptes pro.', icon: 'shirt', plans: [
      { id: 'depots', name: 'Dépôts', n: SECTOR.pressing.entry, text: 'Du dépôt au retrait : étiquettes, liste de prix, ticket, retards et caisse du jour.' },
      { id: 'complet', name: 'Complet', n: SECTOR.pressing.full, text: 'Plus WhatsApp automatique, ramassage et livraison, crédit client, comptes pro et rapport du gérant.' },
    ] },
    { key: 'hotel', name: 'Amplify Hotel', text: 'La réception, Airbnb et Booking, le site de réservation, le ménage et la page du client.', icon: 'door', plans: [
      { name: 'Riad', n: SECTOR.hotel.riad, text: tt('Jusqu’à {n} chambres. Tout Amplify Hotel est inclus.').replace('{n}', String(SECTOR.hotel.riadRooms)) },
      { name: 'Hôtel', n: SECTOR.hotel.hotel, text: tt('Jusqu’à {n} chambres. Tout Amplify Hotel est inclus.').replace('{n}', String(SECTOR.hotel.hotelRooms)) },
      { name: 'Grand hôtel', n: SECTOR.hotel.grand, text: tt('Plus de {n} chambres. Tout Amplify Hotel est inclus.').replace('{n}', String(SECTOR.hotel.hotelRooms)) },
    ] },
    { key: 'dentaire', name: 'Amplify Dentaire', text: 'L’agenda des fauteuils, le dossier et le schéma dentaire, le devis, la caisse et le site du cabinet.', icon: 'heart', plans: [
      { name: 'Cabinet', n: SECTOR.dentaire.cabinet, text: 'Un dentiste. Tout Amplify Dentaire est inclus.' },
      { name: 'Clinique', n: SECTOR.dentaire.clinique, text: 'Plusieurs dentistes et plusieurs fauteuils. Tout Amplify Dentaire est inclus.' },
    ] },
    { key: 'garage', signup: 'garage', name: 'Amplify Garage', text: 'Les devis, les ordres de réparation et le rappel de vidange.', icon: 'check', plans: [
      { id: 'atelier', name: 'Atelier', n: SECTOR.garage.entry, text: 'De la réception à la remise : devis sur WhatsApp, fiche voiture, caisse de l’atelier et équipe.' },
      { id: 'atelier_rappels', name: 'Atelier + rappels', n: SECTOR.garage.full, text: 'Plus les rappels par date et par kilométrage, avec le WhatsApp déjà écrit.' },
    ] },
    { key: 'hanout', signup: 'hanout', name: 'Amplify Hanout', text: 'Le cahier de kridi avec rappel WhatsApp, la caisse et le stock.', icon: 'store', plans: [
      { id: 'kridi', name: 'Kridi seulement', n: SECTOR.hanout.kridi, text: 'Le cahier de kridi, le rappel sur WhatsApp et le plafond par client.' },
      { id: 'kridi_caisse', name: 'Kridi et caisse', n: SECTOR.hanout.till, text: 'Plus la caisse : ventes, monnaie, ticket et clôture du jour.' },
      { id: 'boutique', name: 'Toute ma boutique', n: SECTOR.hanout.shop, text: 'Plus le stock, les fournisseurs, les recharges, l’équipe et les commandes du quartier.' },
    ] },
    { key: 'immoAgent', name: 'Amplify Agent', text: 'Vos biens, vos clients et le bon de visite signé sur le téléphone.', icon: 'briefcase',
      price: tt('Gratuit jusqu’à {a} biens, puis {n} DH par mois').replace('{a}', String(SECTOR.immoAgent.freeProperties)).replace('{n}', String(SECTOR.immoAgent.monthly)) },
    { key: 'immobilier', name: 'Amplify Immobilier', text: 'Pour les agences, les syndics et les promoteurs.', icon: 'store', plans: [
      { name: 'Agence', n: SECTOR.immobilier.agency, text: tt('Biens, mandats, clients, visites et ventes. {m} membres et {p} biens inclus.').replace('{m}', String(SECTOR.immobilier.agencyMembers)).replace('{p}', String(SECTOR.immobilier.agencyProperties)) },
      { name: 'Syndic', n: SECTOR.immobilier.syndic, text: tt('Les appels de fonds au centime pour chaque lot. Jusqu’à {n} lots.').replace('{n}', String(SECTOR.immobilier.syndicLots)) },
      { name: 'Promoteur', n: SECTOR.immobilier.promoter, text: tt('Les lots en VEFA, les appels de fonds et le plafond de 5 % au contrat préliminaire. {n} projets actifs inclus.').replace('{n}', String(SECTOR.immobilier.promoterProjects)) },
    ] },
    { key: 'livraison', name: 'Amplify Livraison', text: 'Votre page de commande, la caisse, le livreur et le suivi, sans commission.', icon: 'truck', price: from(SECTOR.livraison.monthly) },
  ];
}
