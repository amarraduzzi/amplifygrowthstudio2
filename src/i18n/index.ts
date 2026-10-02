import { fr, type Copy } from './fr';
import { en } from './en';
import { ar } from './ar';
import type { Lang } from './routes';
const COPY: Record<Lang, Copy> = { fr, en, ar };
export const copy = (lang: Lang): Copy => COPY[lang] ?? fr;
