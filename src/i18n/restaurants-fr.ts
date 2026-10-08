// Restaurants page (FR): one partner for the whole place. Caisse, marges and marketing, starting with
// what costs the most. Everything here maps to features that exist (see products-fr and marketing-fr).
export const rsFr = {
  meta: {
    title: 'Digitaliser votre restaurant ou café au Maroc | Amplify',
    description: 'Caisse, commandes, marges, stock et marketing pour restaurants, cafés et snacks au Maroc. Un seul partenaire, en commençant par ce qui vous coûte le plus. Rabat.',
  },
  wa: 'Bonjour, je voudrais digitaliser mon établissement.',
  hero: {
    kicker: 'Restaurants, cafés, snacks',
    h1a: 'Votre restaurant,',
    h1b: 'enfin sous contrôle.',
    lead: 'Des commandes qui arrivent en cuisine, une caisse qui tombe juste, des marges que vous voyez, et des clients qui reviennent. Une seule équipe à Rabat, et on commence par votre priorité.',
    cta: 'Faire mon diagnostic',
    cta2: 'Écrire sur WhatsApp',
    modes: ['Aujourd’hui', 'Avec Amplify'],
    zones: [
      { k: 'salle', name: 'Salle', bad: 'Commande mal comprise', good: 'Commande à table, sur téléphone' },
      { k: 'cuisine', name: 'Cuisine', bad: 'Bon perdu, plat oublié', good: 'Bon imprimé tout seul' },
      { k: 'caisse', name: 'Caisse', bad: 'La caisse ne tombe pas juste', good: 'Comptage à l’aveugle, rapport Z' },
      { k: 'stock', name: 'Réserve', bad: 'Le stock part, et personne ne sait où', good: 'Écart vendu / utilisé en DH' },
      { k: 'bureau', name: 'Bureau', bad: 'Marge floue', good: 'Marge par plat, point mort' },
      { k: 'porte', name: 'Entrée', bad: 'Personne ne vous trouve', good: 'En tête sur Google' },
    ],
  },
  diag: {
    kicker: 'Diagnostic en 10 secondes',
    h2a: 'Qu’est-ce qui vous coûte',
    h2b: 'le plus ?',
    p: 'Touchez ce qui vous parle. Votre plan se construit à droite, dans le bon ordre.',
    empty: 'Choisissez au moins un problème.',
    plan: 'Votre plan',
    send: 'Envoyer mon diagnostic sur WhatsApp',
    pains: [
      { k: 'marge', t: 'Je ne sais pas ce que je gagne vraiment', step: 'Voir vos marges', d: 'Fiches techniques par l’IA, food cost par plat, point mort du jour.', p: 'profit', o: 1 },
      { k: 'commandes', t: 'Des commandes oubliées entre la salle et la cuisine', step: 'Des commandes sans erreurs', d: 'Caisse tactile, commande à table sur téléphone, bons cuisine et bar automatiques.', p: 'pos', o: 2 },
      { k: 'caisse', t: 'La caisse du soir ne tombe pas juste', step: 'Une caisse qui tombe juste', d: 'Codes personnels, remises sous code manager, comptage à l’aveugle, rapport Z.', p: 'pos', o: 3 },
      { k: 'stock', t: 'Le stock part, et personne ne sait où', step: 'Le stock sous contrôle', d: 'Inventaire sur téléphone, achats en une saisie, écart vendu / utilisé en dirhams.', p: 'profit', o: 4 },
      { k: 'plateformes', t: 'Trop de commandes passent par des plateformes', step: 'Des commandes en direct', d: 'Menu QR à table et liste WhatsApp de vos clients, sans commission.', p: 'marketing', o: 5 },
      { k: 'google', t: 'Peu de monde me trouve sur Google', step: 'Être trouvé', d: 'Fiche Google soignée, avis, site rapide en trois langues.', p: 'marketing', o: 6 },
      { k: 'creux', t: 'La salle est vide aux heures creuses', step: 'Remplir les heures creuses', d: 'Dégustations, actions de quartier et offres WhatsApp aux habitués.', p: 'marketing', o: 7 },
      { k: 'equipe', t: 'Je ne sais pas qui fait quoi dans l’équipe', step: 'Une équipe en chiffres', d: 'Pointage, coût du personnel, remises et annulations par employé.', p: 'profit', o: 8 },
    ],
  },
  trio: {
    h2a: 'Un seul partenaire.',
    h2b: 'Trois outils qui se parlent.',
    p: 'Chaque vente à la caisse nourrit vos marges. Chaque action marketing se mesure à la caisse. Rien à ressaisir.',
    items: [
      { k: 'pos', name: 'Amplify POS', h: 'La caisse', p: 'Caisse, tables, menu QR, bons cuisine. Même sans internet.', cta: 'Voir Amplify POS' },
      { k: 'profit', name: 'Amplify Profit', h: 'Les marges', p: 'Ce que coûte chaque plat, ce qu’il rapporte, et le bon prix.', cta: 'Voir Amplify Profit' },
      { k: 'marketing', name: 'Marketing', h: 'Les clients', p: 'Google, dégustations, WhatsApp et un site qui fait réserver et commander.', cta: 'Voir le marketing' },
    ],
    flows: ['ventes', 'marges', 'mesure'],
  },
  types: {
    h2a: 'Votre métier,',
    h2b: 'vos priorités.',
    items: [
      { k: 'resto', t: 'Restaurant', pts: ['Commande à table sur le téléphone du serveur', 'Bons cuisine et bar automatiques', 'Marge par plat et prix conseillé'] },
      { k: 'cafe', t: 'Café', pts: ['Encaissement rapide au comptoir', 'Fichier clients et points de fidélité', 'Offres WhatsApp aux heures creuses'] },
      { k: 'snack', t: 'Snack et fast-food', pts: ['Sur place, à emporter, livraison et Glovo', 'Écran cuisine avec le temps d’attente', 'Écart de stock vendu / utilisé'] },
      { k: 'the', t: 'Salon de thé et pâtisserie', pts: ['Menu QR avec photos, en trois langues', 'Formules et suppléments calculés tout seuls', 'Être en tête sur Google Maps'] },
    ],
  },
  faq: [
    ['Par où commencer ?', 'Par ce qui vous coûte le plus. Faites le diagnostic sur cette page, ou décrivez-nous votre situation sur WhatsApp. Souvent, c’est la marge ou les erreurs de commande.'],
    ['Ça marche pour un café ou un snack ?', 'Oui. La caisse gère le comptoir, les tables, l’emporter et la livraison. Le marketing s’adapte à votre quartier.'],
    ['Mes employés préfèrent l’arabe.', 'La caisse et l’écran cuisine existent en français et en arabe. Chaque employé choisit sa langue.'],
    ['Je dois tout changer d’un coup ?', 'Non. Vous pouvez commencer par un seul outil, par exemple Amplify Profit avec votre caisse actuelle, et ajouter le reste plus tard.'],
    ['Vous venez sur place ?', 'À Rabat et autour, oui : nous installons la caisse, importons votre carte et formons votre équipe sur place. Ailleurs au Maroc, nous faisons tout cela avec vous en appel vidéo.'],
  ] as [string, string][],
  final: { h2a: 'Commençons par', h2b: 'votre plus gros problème.', p: 'Un message suffit. Nous vous répondons avec une proposition simple.', cta: 'Écrire sur WhatsApp', chosen: 'Votre diagnostic sera joint au message.' },
};
