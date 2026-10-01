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
  demoUrl: 'https://posamplify.pages.dev',
};

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
  googleProfileUrl: '[LIEN FICHE GOOGLE]',
  hours: '[HORAIRES À COMPLÉTER]',
};

export const isPlaceholder = (v: string) => /^\[.*\]$/.test(v.trim());
export const waLink = (text: string) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
