import { fr, type Copy } from './fr';
import type { Lang } from './routes';
const COPY: Partial<Record<Lang, Copy>> = { fr };
export const copy = (lang: Lang): Copy => COPY[lang] ?? fr;
