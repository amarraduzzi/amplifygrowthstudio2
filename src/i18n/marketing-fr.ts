// Marketing page (FR). Our view: marketing for horeca has to bring people to the table, not views.
// No invented results: cases only when real ([PLACEHOLDER] until then).
export const mkFr = {
  meta: {
    title: 'Marketing restaurant et café au Maroc qui ramène des clients | Amplify',
    description: 'Référencement Google, dégustations, actions de quartier et un vrai concept. Du marketing pour restaurants, cafés et snacks qui se mesure en clients à table, pas en vues. Rabat.',
  },
  wa: 'Bonjour, je voudrais plus de clients dans mon établissement. On peut parler d’un diagnostic ?',
  hero: {
    kicker: 'Marketing pour la restauration',
    h1a: 'Des clients à table.',
    h1b: 'Pas des vues.',
    lead: 'Restaurant, café, coffee shop, snack ou salon de thé : nous faisons du marketing qui fait entrer des gens. Google d’abord, des idées qui vont chercher le client, et un concept qui ne ressemble à personne.',
    cta: 'Demander un diagnostic',
    cta2: 'Notre méthode',
    modes: ['Le marketing classique au Maroc', 'Le marketing Amplify'],
  },
  statement: {
    a: 'Au Maroc, tout le monde',
    b: 'fait les mêmes vidéos, achète les mêmes pubs, fête les mêmes 100 000 vues. Et la salle reste vide.',
  },
  beliefs: {
    kicker: 'Ce que nous croyons',
    h2a: 'Cinq convictions.',
    h2b: 'Zéro vue achetée.',
    items: [
      {
        k: 'google', h: 'Être trouvé quand on a faim',
        p: 'Quand quelqu’un a faim, il n’ouvre pas Instagram. Il tape « café près de moi » ou « tajine Agdal ». Fiche Google complète, avis, photos, horaires justes, site rapide : vous devez être dans les trois premiers, pas sur la deuxième page.',
        tag: 'Google',
      },
      {
        k: 'go', h: 'Amener le produit au client',
        p: 'Les clients ne viennent pas ? Allons à eux. Dégustations dans les bureaux et les coworkings, partenariats avec les salles de sport, les écoles, les hôtels du quartier. Inventif, local, et chaque action a son chiffre.',
        tag: 'Terrain',
      },
      {
        k: 'taste', h: 'Faire goûter',
        p: 'Une bouche qui goûte convainc plus qu’un reel. Une invitation, un plat découverte, une soirée dégustation. Chaque invitation a son code : on sait exactement qui est venu, et qui est revenu.',
        tag: 'Expérience',
      },
      {
        k: 'concept', h: 'Un concept, pas une copie',
        p: 'Beaucoup jouent la carte « sûre » parce qu’ils ne savent pas quoi faire d’autre. C’est justement ça le risque : on vous oublie. Nous trouvons ce qui rend votre adresse unique, et nous le disons partout, de la carte au trottoir.',
        tag: 'Concept',
      },
      {
        k: 'social', h: 'Les réseaux, à leur place',
        p: 'Instagram et TikTok restent utiles : montrer le concept, garder le lien avec vos habitués, annoncer une soirée. Mais ils servent la stratégie, ils ne la remplacent pas.',
        tag: 'Social',
      },
    ],
  },
  site: {
    kicker: 'Coupe du monde 2030',
    h2a: 'Pas de site ?',
    h2b: 'Pour le monde, vous n’existez pas.',
    p: 'Le Maroc accueille la Coupe du monde 2030 avec l’Espagne et le Portugal. Touristes, supporters, entreprises étrangères : ils arrivent déjà, et ils cherchent sur Google, dans leur langue. Sans site, pas de menu à lire, pas de raison de venir. Un établissement sérieux a un site qui convertit.',
    searches: [['en', 'restaurant near me'], ['es', 'cafetería cerca de mí'], ['ar', 'مطعم قريب مني'], ['fr', 'brunch Rabat'], ['de', 'Café in der Nähe'], ['pt', 'restaurante perto de mim']],
    without: 'Sans site', with: 'Avec un site Amplify',
    noSite: ['Pas de site web', 'Pas de menu en ligne', 'Horaires inconnus'],
    list: [
      ['En français, arabe et anglais', 'Le client lit votre carte dans sa langue.'],
      ['Votre menu, avec photos et prix', 'Toujours à jour, sans PDF illisible.'],
      ['Itinéraire, appel, WhatsApp', 'Un geste pour venir, appeler ou commander.'],
      ['Rapide sur mobile', 'Léger et rapide, même en 4G.'],
      ['Relié à Google', 'Le site et votre fiche Google se renforcent.'],
    ] as [string, string][],
    cta: 'Je veux un site qui convertit',
  },
  compare: {
    h2a: 'Visible',
    h2b: 'ou vendu ?',
    cols: ['Le marketing classique au Maroc', 'Le marketing Amplify'],
    rows: [
      ['Objectif', 'Des vues et des likes', 'Des clients qui entrent et reviennent'],
      ['Premier réflexe', 'Une vidéo de plus sur Instagram', 'Être en haut sur Google Maps'],
      ['Contenu', 'Les mêmes vidéos que les voisins', 'Votre concept, que personne d’autre n’a'],
      ['Budget', 'Des pubs pour faire des vues', 'Des actions qui font goûter'],
      ['Mesure', 'Vues, likes, abonnés', 'Appels, itinéraires, codes utilisés, ventes'],
      ['Le mois suivant', 'On recommence pareil', 'On garde ce qui a marché, on coupe le reste'],
    ],
  },
  process: {
    h2a: 'Comment nous',
    h2b: 'travaillons.',
    steps: [
      ['Nous venons manger chez vous', 'Comme un client. Puis nous regardons votre fiche Google, vos avis, votre quartier et ce que font les autres autour.'],
      ['Nous trouvons votre concept', 'Ce qui vous rend différent, dit en une phrase. C’est la base de tout le reste.'],
      ['Nous passons à l’action', 'Google et avis, dégustations, partenariats de quartier, site et commande WhatsApp, contenu qui donne envie de venir.'],
      ['Nous mesurons et ajustons', 'Chaque action a un chiffre : appels, itinéraires, codes d’invitation, ventes. Avec Amplify POS, vous voyez les ventes bouger à la caisse.'],
    ],
  },
  sectors: ['Restaurant', 'Café', 'Coffee shop', 'Snack', 'Salon de thé', 'Pâtisserie', 'Boulangerie', 'Glacier', 'Food truck', 'Brunch', 'Fast-food', 'Rooftop'],
  sectorsH: 'Pour toute la restauration',
  proof: { h2: 'Un cas concret', ph: '[CAS MARKETING À AJOUTER : action menée, période, clients venus, citation du client]' },
  faq: [
    ['Vous ne faites pas d’Instagram ?', 'Si, mais à sa place. Le contenu montre votre concept et garde le lien avec vos habitués. Nous ne payons pas pour des vues qui ne passent jamais la porte.'],
    ['Pourquoi Google d’abord ?', 'Parce que c’est là que les gens cherchent quand ils ont faim, près de chez eux, maintenant. Une fiche bien tenue travaille pour vous tous les jours, sans budget pub.'],
    ['Ça marche pour un petit snack ou un café de quartier ?', 'Oui, souvent encore mieux. Le quartier, les bureaux autour, les habitués : ce sont exactement les clients qu’on va chercher.'],
    ['Comment savoir si ça marche ?', 'Chaque action a sa mesure : appels et itinéraires sur Google, codes d’invitation utilisés, ventes à la caisse. Vous voyez ce qui ramène des clients et ce qui ne sert à rien.'],
    ['Vous garantissez des résultats ?', 'Personne d’honnête ne peut garantir des clients. Nous garantissons de mesurer chaque action, de vous dire franchement ce qui marche, et d’arrêter ce qui ne marche pas.'],
    ['J’ai déjà Instagram. Pourquoi un site ?', 'Instagram est un mur que vous louez. Le site est à vous : il apparaît sur Google, il se lit dans la langue du visiteur et il fait réserver ou commander. Avec la Coupe du monde 2030, c’est souvent le premier contact d’un étranger avec votre adresse.'],
    ['Combien ça coûte ?', 'Cela dépend de votre établissement et de vos objectifs. Après le diagnostic, vous recevez un plan avec un prix clair.'],
  ] as [string, string][],
  final: { h2a: 'Remplissez la salle.', h2b: 'Pas le compteur de vues.', p: 'Dites-nous où vous en êtes. Nous venons voir, nous goûtons, et nous vous proposons un plan.', cta: 'Demander un diagnostic' },
};
