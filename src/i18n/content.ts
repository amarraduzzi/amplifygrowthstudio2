// Lang-aware access to the long copy files. Same shape in every language.
import type { Lang } from './routes';
import { posFr, profitFr, featuresFr } from './products-fr';
import { posEn, profitEn, featuresEn } from './products-en';
import { posAr, profitAr, featuresAr } from './products-ar';
import { mkFr } from './marketing-fr';
import { mkEn } from './marketing-en';
import { mkAr } from './marketing-ar';
import { rsFr } from './restaurants-fr';
import { rsEn } from './restaurants-en';
import { rsAr } from './restaurants-ar';
export const posOf = (l: Lang): typeof posFr => ({ fr: posFr, en: posEn, ar: posAr })[l] as typeof posFr;
export const profitOf = (l: Lang): typeof profitFr => ({ fr: profitFr, en: profitEn, ar: profitAr })[l] as typeof profitFr;
export const featuresOf = (l: Lang): typeof featuresFr => ({ fr: featuresFr, en: featuresEn, ar: featuresAr })[l] as typeof featuresFr;
export const mkOf = (l: Lang): typeof mkFr => ({ fr: mkFr, en: mkEn, ar: mkAr })[l] as typeof mkFr;
export const rsOf = (l: Lang): typeof rsFr => ({ fr: rsFr, en: rsEn, ar: rsAr })[l] as typeof rsFr;
