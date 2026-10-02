// Everything that changes when the site moves to its real domain or when data arrives.
// Placeholders are in CAPITALS between brackets and are listed in OPEN-PUNTEN.md.

export const SITE = {
  name: 'Amplify Growth Studio',
  /** The real address. Canonical, hreflang, sitemap and schema all come from this. */
  url: 'https://amplifygrowthstudio.com',
  /**
   * false while the site only lives on amplifygrowthstudio2.pages.dev: no indexing,
   * so Google does not find a copy before the real domain is live. Set to true on launch day.
   */
  live: false,
  /** Languages that are finished. A language goes in here only when all its pages exist. */
  languages: ['fr'] as const,
  /** Live demo menu of the fictional café Dar Nour (supabase/demo/dar-nour.sql). */
  demoMenuUrl: 'https://posamplify.pages.dev/dar-nour',
  /** where "Voir la démo" goes: the live demo section of the POS page on this site */
  demoUrl: '/amplify-pos/#demo',
};

/**
 * The apps (separate projects). When the domain is live these become subdomains of the same domain:
 * app.amplifygrowthstudio.com and menu.amplifygrowthstudio.com. Change them here only.
 */
export const APPS = {
  admin: 'https://amplify-admin.pages.dev',
  menu: 'https://posamplify.pages.dev',
};
/** Start the free trial. product 'profit' = Amplify Profit alone. */
export const signupUrl = (lang = 'fr', product?: 'pos' | 'profit') =>
  `${APPS.admin}/?inscription=1&lang=${lang}${product === 'profit' ? '&produit=profit' : ''}`;
export const loginUrl = (lang = 'fr') => `${APPS.admin}/?lang=${lang}`;

export const CONTACT = {
  /** International format without + or spaces, for wa.me links */
  whatsapp: '212660353741',
  phoneDisplay: '+212 6 60 35 37 41',
  email: 'Amar.amplifygrowth@gmail.com',
  street: '[ADRESSE À COMPLÉTER]',
  city: 'Rabat',
  postalCode: '[CODE POSTAL]',
  country: 'MA',
  mapsUrl: '[LIEN GOOGLE MAPS]',
  /** Google Business Profile (share link from Amar). Rating shown only as stated: 5,0. */
  googleProfileUrl: 'https://share.google/4xvWYbcSjUe3S8w2E',
  googleRating: '5,0',
  /** Link that opens the review form directly. Best: Google Business Profile > "Demander des avis" (g.page/r/.../review). Until then: the profile. */
  reviewUrl: 'https://share.google/4xvWYbcSjUe3S8w2E',
  hours: '[HORAIRES À COMPLÉTER]',
};

export const isPlaceholder = (v: string) => /^\[.*\]$/.test(v.trim());
export const waLink = (text: string) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

/** Real Google review, word for word in its original language. Shown only when filled in. */
export const REVIEW = {
  text: '[TEXTE ORIGINAL DE L’AVIS GOOGLE]',
  author: 'B N',
};
