// The restaurants that already work with Amplify. Only facts we can stand behind: no service is
// listed unless it runs. `shot` is a real phone screenshot of their site or menu (public/img/clients/shots),
// `pos` a real photo or screenshot of their till; a client with neither still shows in the logo band.
export type Svc = 'pos' | 'site' | 'qr' | 'online';
export interface Shot { src: string; w: number; h: number }
export interface Client {
  name: string; logo: string; bg: string; kind: string; svc: Svc[]; url?: string;
  /** the logo is wider than tall: show it whole, with a margin */
  fit?: 'contain';
  /** the brand's bright colour, for the glow behind the screens */
  accent: string;
  shot?: Shot; pos?: Shot;
}
/** kind is the French text: it goes through tt() where it is shown */
export const CLIENTS: Client[] = [
  { name: 'Gaston Gali', logo: 'gaston-gali', accent: '#c9a45c', bg: '#241e20', kind: 'Pâtisserie, café et traiteur', svc: ['qr'], url: 'https://gastongali.com', shot: { src: '/img/clients/shots/gaston-gali.webp', w: 540, h: 1002 } },
  { name: 'Dom’s Café', logo: 'doms', accent: '#c98a4a', bg: '#0a0404', fit: 'contain', kind: 'Café et pizzeria, Agdal', svc: ['pos', 'site'], url: 'https://domscafeagdal.pages.dev', shot: { src: '/img/clients/shots/doms.webp', w: 540, h: 1002 } },
  { name: 'Indian Flavors', logo: 'indian-flavors', accent: '#d6a53a', bg: '#1b1b1b', kind: 'Restaurant indien, Agdal', svc: ['online', 'site'], url: 'https://indianflavors.pages.dev', shot: { src: '/img/clients/shots/indian-flavors.webp', w: 540, h: 1002 } },
  { name: 'Relais Marin', logo: 'relais-marin', accent: '#d9b25b', bg: '#051935', kind: 'Rabat', svc: ['qr', 'site'], url: 'https://site.amplifygrowthstudio.com/relais-marin', shot: { src: '/img/clients/shots/relais-marin.webp', w: 540, h: 1002 } },
  { name: 'L’Atelier by Sam', logo: 'atelier-sam', accent: '#b89a78', bg: '#faf7f0', kind: 'Salon de thé et brunch', svc: ['pos', 'site'] },
  { name: 'Zayna Café', logo: 'zayna', accent: '#a0533a', bg: '#ffffff', kind: 'Coffee shop', svc: ['pos', 'site'], url: 'https://zaynacoffeeshop.pages.dev', shot: { src: '/img/clients/shots/zayna.webp', w: 540, h: 1002 } },
  { name: 'Smash’n Cheese', logo: 'smashncheese', accent: '#f2a33a', bg: '#ffffff', kind: 'Burgers smash artisanaux', svc: ['site'], url: 'https://smashncheese.pages.dev', shot: { src: '/img/clients/shots/smashncheese.webp', w: 540, h: 1002 } },
  { name: 'Ba Fares', logo: 'ba-fares', accent: '#f2c63e', bg: '#f2c63e', kind: 'Rabat, depuis 1957', svc: ['site'], url: 'https://bafares.pages.dev', shot: { src: '/img/clients/shots/ba-fares.webp', w: 540, h: 1002 } },
  { name: 'Chez Pino', logo: 'chez-pino', accent: '#e8e3d8', bg: '#ffffff', kind: 'Restaurant italien, Hay Riad', svc: ['site'], url: 'https://chezpino.ma', shot: { src: '/img/clients/shots/chez-pino.webp', w: 540, h: 1002 } },
  { name: 'Moë Tea Room', logo: 'moe', accent: '#d9d9d9', bg: '#1c1c1c', kind: 'Salon de thé, Rabat', svc: ['site'], url: 'https://moetearoom.pages.dev', shot: { src: '/img/clients/shots/moe.webp', w: 540, h: 1002 } },
];
