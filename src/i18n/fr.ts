// All French copy. Arabic and English get their own file with the same shape,
// written for their reader, not translated word for word.
// Placeholders: [IN CAPITALS], listed in OPEN-PUNTEN.md. Nothing here is invented.

export const fr = {
  nav: { systems: 'Systèmes', marketing: 'Marketing', restaurants: 'Restaurants', contact: 'Contact' },
  ui: {
    whatsapp: 'Écrire sur WhatsApp',
    whatsappShort: 'WhatsApp',
    demo: 'Voir la démo',
    menu: 'Menu',
    close: 'Fermer',
    skip: 'Aller au contenu',
    home: 'Accueil',
    faq: 'Questions fréquentes',
    langLabel: 'Langue',
    chatYou: 'Vous',
    chatUs: 'Amplify',
    chatReply: 'Bonjour, avec plaisir. Dites-nous où se trouve votre établissement, on passe vous voir.',
    chatNote: 'Le bouton ouvre WhatsApp avec ce message. Vous pouvez le modifier avant l’envoi.',
    faqCta: 'Une autre question ? Posez-la sur WhatsApp.',
    footerTagline: 'Systèmes et marketing pour restaurants et cafés au Maroc.',
    rights: 'Tous droits réservés.',
    privacy: 'Pas de cookies publicitaires sur ce site.',
  },

  home: {
    meta: {
      title: 'Amplify Growth Studio, systèmes et marketing à Rabat',
      description: 'Caisse, suivi des marges et marketing qui vend, pour restaurants et cafés au Maroc. Une équipe à Rabat qui vient chez vous. Écrivez-nous sur WhatsApp.',
    },
    wa: 'Bonjour, je souhaite en savoir plus sur Amplify pour mon restaurant.',
    hero: {
      h1: ['Votre entreprise.', 'Plus simple.', 'Plus rentable.'],
      lead: 'Systèmes et marketing pour les entreprises au Maroc, en commençant par la restauration. Notre équipe à Rabat passe chez vous.',
      leadShort: 'Systèmes et marketing au Maroc. Notre équipe à Rabat passe chez vous.',
      flow: ['Commande reçue', 'Bon envoyé en cuisine', 'Marge calculée'],
      flowShort: ['Commande reçue', 'En cuisine', 'Marge calculée'],
      rating: 'sur Google',
      local: 'Équipe basée à Rabat',
      facts: [
        ['0 %', 'de commission sur vos commandes directes'],
        ['3', 'langues pour votre menu : français, arabe, anglais'],
        ['1', 'seul partenaire pour la caisse, le site et le marketing'],
      ],
      shotAlt: 'La caisse Amplify POS : une table ouverte avec ses articles et le total',
      phoneAlt: 'Le menu QR sur le téléphone du client : les plats et leurs prix',
    },
    statement: {
      a: 'Votre entreprise n’a pas besoin de plus d’outils.',
      b: 'Il a besoin d’outils qui se parlent.',
      p: 'La commande prise à table arrive en cuisine, la vente met à jour votre stock et votre marge, et vos clients reviennent par WhatsApp. Tout est relié.',
      items: [
        ['Caisse', 'Tables, emporter, livraison'],
        ['Cuisine', 'Bons imprimés ou à l’écran'],
        ['Menu QR', 'Commande depuis la table'],
        ['Marges', 'Ce que rapporte chaque plat'],
        ['Marketing', 'Site, WhatsApp, Google'],
      ],
    },
    tour: {
      h2: 'Tout ce dont votre restaurant a besoin',
      p: 'Ce sont de vraies captures du système, pas des maquettes.',
      cards: [
        ['Caisse', 'Une table, quelques gestes, le bon part en cuisine.', 'caisse'],
        ['Plan de salle', 'Chaque table libre ou occupée, avec son montant et son temps.', 'tables'],
        ['Écran cuisine', 'Les bons dans l’ordre, avec le temps d’attente. Un geste : prêt.', 'cuisine'],
        ['Menu QR', 'Le client commande depuis sa table, dans sa langue.', 'menu-qr'],
        ['Marges', 'Le coût et la marge de chaque plat, calculés pour vous.', 'marges'],
      ] as [string, string, string][],
      marketing: ['Marketing', 'Site web, commande WhatsApp, Instagram et fiche Google qui ramènent des clients.'],
    },
    places: {
      h2a: 'Différents métiers.',
      h2b: 'Mêmes problèmes.',
      p: 'Nous commençons par la restauration, mais le problème est souvent le même partout : trop de travail à la main, et pas de vue claire sur ce qui se passe.',
      items: [
        ['Restaurants et cafés', 'Des commandes perdues entre la salle et la cuisine, et une marge qu’on ne connaît pas vraiment.'],
        ['Snacks et fast-food', 'Le rush du midi, l’emporter et la livraison en même temps.'],
        ['Commerces', 'Des clients qui ne vous trouvent pas sur Google, et des ventes qu’on suit sur un cahier.'],
        ['Professions libérales', 'Cabinets, avocats, cliniques : un site qui inspire confiance et des rendez-vous qui arrivent sur WhatsApp.'],
      ],
    },
    proof: {
      h2a: 'Vrais problèmes.',
      h2b: 'Vraies solutions.',
      p: 'Nous publions ici des cas réels, avec l’accord de nos clients et des chiffres vérifiés.',
      ph: '[CAS CLIENT À AJOUTER : nom du lieu, problème, ce que nous avons fait, résultat chiffré, citation]',
      tags: ['Caisse', 'Site web', 'Commande WhatsApp'],
    },
    steps: {
      h2a: 'Moins de suppositions.',
      h2b: 'Plus de direction.',
      p: 'Nous commençons par regarder, pas par vendre.',
      items: [
        ['On se rencontre', 'Nous passons dans votre établissement et regardons comment vous travaillez aujourd’hui.'],
        ['On installe', 'Caisse, menu, site ou campagne : nous configurons tout avec vous.'],
        ['On forme votre équipe', 'Chaque employé a son code et sait quoi faire. Délai habituel : [DÉLAI À CONFIRMER].'],
        ['On suit vos chiffres', 'Ensuite nous restons joignables sur WhatsApp et regardons les résultats avec vous.'],
      ],
    },
    paths: {
      h2: 'On pense au-delà de la caisse.',
      p: 'Deux façons de vous aider. Prenez l’une, l’autre, ou les deux.',
      systems: {
        h3: 'Systèmes',
        p: 'Caisse tactile, commande à table sur téléphone, menu QR et écran cuisine. Puis vos marges, votre stock et votre équipe, au même endroit.',
        list: ['Amplify POS : la caisse', 'Amplify Profit : la gestion', 'Fonctionne sans internet'],
        link: 'Découvrir les systèmes',
      },
      marketing: {
        h3: 'Marketing',
        p: 'Site web, commande WhatsApp, contenu Instagram et référencement local. Plus de clients qui commandent directement chez vous.',
        list: ['Site et page de commande', 'Commande WhatsApp', 'Fiche Google et avis'],
        link: 'Découvrir le marketing',
      },
    },
    faq: [
      ['Combien ça coûte ?', 'Cela dépend de votre établissement et de ce dont vous avez besoin. Demandez un devis sur WhatsApp, la réponse est rapide.'],
      ['Mon équipe va-t-elle s’y retrouver ?', 'La caisse est en français et en arabe, avec de grands boutons. Nous formons votre équipe à l’installation.'],
      ['Je garde ma caisse actuelle. C’est possible ?', 'Oui. La gestion des marges, du stock et de l’équipe fonctionne aussi sans notre caisse.'],
      ['Vous travaillez seulement à Rabat ?', 'Notre équipe est à Rabat. Pour le reste du Maroc, écrivez-nous et nous voyons ensemble comment faire.'],
    ],
    final: { h2: 'Parlons de votre entreprise.', p: 'Un message suffit. Nous répondons directement sur WhatsApp.' },
    footerLine: 'Un seul partenaire pour vendre plus.',
  },

  systems: {
    meta: {
      title: 'Logiciel de caisse restaurant au Maroc | Amplify',
      description: 'Caisse, commande à table, menu QR, écran cuisine, marges, stock et équipe. Un seul système pour restaurants et cafés au Maroc. Demandez une démo.',
    },
    wa: 'Bonjour, je voudrais une démo du système de caisse et de gestion.',
    hero: {
      h1: 'Logiciel de caisse et de gestion pour restaurants au Maroc',
      lead: 'Une caisse qui continue de fonctionner sans internet, et la gestion qui va avec : marge par plat, stock, équipe et charges. En français et en arabe, pensé pour les restaurants et cafés au Maroc.',
      demoNote: 'La démo s’ouvre dans un nouvel onglet.',
    },
    pos: {
      h2: 'Amplify POS : la caisse',
      p: 'Pour servir plus vite et sans erreurs.',
      items: [
        ['Caisse tactile', 'Sur place, à emporter et livraison. Remises et annulations protégées par le code du manager.'],
        ['Fonctionne sans internet', 'Si la connexion coupe, la caisse continue. Tout se synchronise au retour.'],
        ['Commande à table sur téléphone', 'Le serveur scanne un QR code et prend la commande à table. Le bon part en cuisine.'],
        ['Menu QR', 'Le client consulte le menu et commande depuis sa table, en français, en arabe ou en anglais.'],
        ['Écran cuisine', 'Les bons s’affichent en cuisine avec le temps d’attente. Un geste suffit : prêt.'],
        ['Suppléments et formules', 'Fromage en plus, cuisson, menu avec boisson : le prix se calcule tout seul.'],
        ['Addition partagée', 'Par article ou en parts égales. Chaque part reçoit son ticket.'],
        ['Clôture de caisse', 'Le soir, l’équipe compte la caisse sans voir le montant attendu. L’écart apparaît à chaque clôture.'],
        ['Fichier clients et fidélité', 'En option : points de fidélité et clients d’accord pour vos offres WhatsApp.'],
      ],
    },
    profit: {
      h2: 'Amplify Profit : la gestion',
      p: 'Pour savoir enfin ce qui rapporte. Fonctionne aussi sans notre caisse.',
      items: [
        ['Marge par plat', 'Fiches techniques et coût matière : vous voyez quels plats rapportent et lesquels coûtent.'],
        ['Stock et achats', 'Comptage simple, écarts expliqués, et la liste de ce qu’il faut acheter.'],
        ['Équipe', 'Pointage, coût du personnel et suivi des écarts de caisse.'],
        ['Charges et point mort', 'Loyer, salaires, factures : le chiffre d’affaires à faire chaque mois pour être rentable.'],
      ],
    },
    compare: {
      h2: 'Avant et avec Amplify',
      before: 'Avant',
      after: 'Avec Amplify',
      rows: [
        ['Commandes notées sur papier', 'Bons imprimés ou affichés en cuisine'],
        ['La marge, on l’estime', 'La marge de chaque plat, calculée'],
        ['Le stock, au feeling', 'Une liste d’achats basée sur vos ventes'],
        ['La caisse ne tombe pas juste', 'L’écart visible à chaque clôture'],
      ],
    },
    faq: [
      ['Mon équipe va-t-elle s’y retrouver ?', 'La caisse est en français et en arabe, avec de grands boutons. Chaque employé a son code personnel. Nous formons votre équipe à l’installation.'],
      ['Que se passe-t-il si internet coupe ?', 'La caisse continue de prendre et d’encaisser les commandes. Tout se synchronise dès que la connexion revient.'],
      ['Je garde ma caisse actuelle. C’est possible ?', 'Oui. Amplify Profit (marges, stock, équipe, charges) fonctionne aussi seul, sans notre caisse.'],
      ['Combien de temps prend l’installation ?', '[DÉLAI À CONFIRMER]'],
      ['Combien ça coûte ?', 'Le prix dépend de votre établissement et des modules choisis. Demandez un devis sur WhatsApp, la réponse est rapide.'],
    ],
    final: { h2: 'Voyez le système avec vos propres plats.', p: 'Envoyez-nous un message, nous vous montrons la caisse et la gestion.' },
  },

  marketing: {
    meta: {
      title: 'Agence marketing digital restaurant à Rabat | Amplify',
      description: 'Site web, commande WhatsApp, Instagram et référencement local pour restaurants. Plus de commandes en direct, sans commission. Agence à Rabat.',
    },
    wa: 'Bonjour, je voudrais plus de commandes pour mon restaurant.',
    hero: {
      h1: 'Agence marketing digital pour restaurants à Rabat',
      lead: 'Plus de commandes en direct, sans commission sur chaque vente. Nous construisons tout le chemin : le client vous trouve, voit votre menu et commande chez vous.',
    },
    services: {
      h2: 'Ce que nous faisons',
      items: [
        ['Site web et page de commande', 'Rapide sur mobile, en français, arabe et anglais, avec votre menu toujours à jour.'],
        ['Commande WhatsApp', 'Le client choisit ses plats. La commande arrive complète, prête à préparer.'],
        ['Contenu Instagram', 'Du contenu qui donne une raison de venir, pas une photo de plat de plus.'],
        ['Référencement local et fiche Google', 'Être trouvé quand quelqu’un cherche un restaurant près de lui. Photos, horaires et avis à jour.'],
      ],
    },
    flow: {
      h2: 'Le chemin d’une commande',
      items: [
        ['Le client vous découvre', 'Par un QR code, un flyer, Instagram ou Google.'],
        ['Il voit votre menu', 'Sur votre page, avec photos et prix, dans sa langue.'],
        ['Il commande chez vous', 'Sur WhatsApp ou directement sur l’écran du restaurant. Sans intermédiaire.'],
      ],
    },
    proof: { h2: 'Un cas concret', ph: '[CAS MARKETING À AJOUTER : commandes avant et après, période, citation du client]' },
    faq: [
      ['Pourquoi ne pas rester seulement sur les plateformes de livraison ?', 'Les plateformes apportent des clients, mais prennent une commission sur chaque commande. Vos clients fidèles peuvent commander directement chez vous. Vous gardez les deux.'],
      ['J’ai déjà une page Instagram. Pourquoi un site ?', 'Instagram montre votre restaurant. Le site fait commander et vous rend visible sur Google.'],
      ['Je n’ai pas le temps de m’en occuper.', 'Nous nous en chargeons. Il nous faut un premier rendez-vous avec vous, ensuite vous validez sur WhatsApp.'],
      ['Combien ça coûte ?', 'Cela dépend de ce dont vous avez besoin. Demandez un devis sur WhatsApp.'],
    ],
    final: { h2: 'Plus de commandes, directement chez vous.', p: 'Dites-nous où vous en êtes, nous vous proposons un plan.' },
  },

  restaurants: {
    meta: {
      title: 'Digitaliser votre restaurant au Maroc | Amplify',
      description: 'Caisse, commandes, marges et marketing pour restaurants, cafés et snacks au Maroc. Moins d’erreurs, plus de marge, une vraie vue sur votre activité.',
    },
    wa: 'Bonjour, je voudrais digitaliser mon restaurant.',
    hero: {
      h1: 'Digitaliser votre restaurant au Maroc',
      lead: 'Restaurant, café ou snack : moins de papier, moins d’erreurs, et enfin une vue claire sur ce que vous gagnez. Nous commençons par ce qui vous coûte le plus.',
    },
    pains: {
      h2: 'Les problèmes que nous voyons le plus',
      items: [
        'Le chiffre d’affaires est là, mais la marge reste floue.',
        'Des commandes oubliées ou mal comprises entre la salle et la cuisine.',
        'Le stock part, sans savoir où.',
        'La caisse du soir ne correspond pas aux ventes.',
        'Une grande partie des commandes passe par des plateformes à commission.',
        'Peu ou pas de présence sur Google.',
      ],
    },
    solutions: {
      h2: 'Par où nous commençons',
      p: 'Dans l’ordre où cela rapporte le plus, en général.',
      items: [
        ['Voir vos chiffres', 'Marge par plat, coût du personnel, charges et point mort.', 'systems'],
        ['Des commandes sans erreurs', 'Caisse, commande à table et écran cuisine.', 'systems'],
        ['Des commandes en direct', 'Menu QR et commande WhatsApp, sans commission.', 'marketing'],
        ['Être trouvé', 'Site rapide, fiche Google soignée, avis clients.', 'marketing'],
      ] as [string, string, 'systems' | 'marketing'][],
    },
    proof: { h2: 'Un restaurant que nous accompagnons', ph: '[CAS RESTAURANT À AJOUTER : situation de départ, ce qui a changé, chiffres, citation]' },
    faq: [
      ['Par où commencer ?', 'Par ce qui vous coûte le plus. Souvent, c’est la marge ou les erreurs de commande. Nous le regardons ensemble au premier rendez-vous.'],
      ['Ça marche pour un café ou un snack ?', 'Oui. La caisse gère le comptoir, les tables, l’emporter et la livraison.'],
      ['Mes employés préfèrent l’arabe.', 'La caisse et l’écran cuisine existent en français et en arabe. Chaque poste choisit sa langue.'],
      ['Je dois tout changer d’un coup ?', 'Non. Vous pouvez commencer par un seul module, par exemple la gestion des marges, et garder le reste.'],
    ],
    final: { h2: 'Commençons par votre plus gros problème.', p: 'Expliquez-nous en un message, nous vous répondons avec une proposition simple.' },
  },

  contact: {
    meta: {
      title: 'Contact Amplify Growth Studio, Rabat',
      description: 'Écrivez à Amplify Growth Studio sur WhatsApp ou appelez-nous. Systèmes de caisse et marketing pour restaurants et cafés, à Rabat et partout au Maroc.',
    },
    wa: 'Bonjour, je souhaite prendre contact avec Amplify.',
    hero: { h1: 'Contacter Amplify à Rabat', lead: 'Le plus rapide, c’est WhatsApp. Vous pouvez aussi nous appeler ou nous écrire.' },
    form: {
      h2: 'Préparez votre message',
      p: 'Trois informations et le message est prêt. Il s’ouvre dans WhatsApp, rien n’est envoyé avant que vous appuyiez sur envoyer.',
      name: 'Votre prénom',
      type: 'Votre établissement',
      types: ['Restaurant', 'Café', 'Snack ou fast-food', 'Autre'],
      city: 'Ville',
      cityDefault: 'Rabat',
      send: 'Ouvrir dans WhatsApp',
      template: 'Bonjour, je suis {name}. J’ai un établissement ({type}) à {city}. Je voudrais en savoir plus sur Amplify.',
    },
    details: { h2: 'Nos coordonnées', phone: 'Téléphone', email: 'E-mail', address: 'Adresse', hours: 'Horaires', map: 'Voir sur Google Maps' },
  },
};

export type Copy = typeof fr;
