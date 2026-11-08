// Cities of Bssaha. A city is "live" when its status is 'live', or as soon as enough restaurants are listed (MIN_TO_OPEN).
// Only real numbers are shown: the count is the listed restaurants (actif: true) of that city, nothing else.
import type { L } from './bssaha';
export type CityStatus = 'live' | 'soon' | 'later';
export interface City { id: string; name: L; lon: number; lat: number; status: CityStatus }
export const MIN_TO_OPEN = 10;
export const CITIES: City[] = [
  { id: 'rabat', name: { fr: 'Rabat', en: 'Rabat', ar: 'الرباط' }, lon: -6.84, lat: 34.02, status: 'live' },
  { id: 'casablanca', name: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' }, lon: -7.62, lat: 33.57, status: 'soon' },
  { id: 'tanger', name: { fr: 'Tanger', en: 'Tangier', ar: 'طنجة' }, lon: -5.8, lat: 35.78, status: 'later' },
  { id: 'fes', name: { fr: 'Fès', en: 'Fez', ar: 'فاس' }, lon: -5.0, lat: 34.03, status: 'later' },
  { id: 'marrakech', name: { fr: 'Marrakech', en: 'Marrakech', ar: 'مراكش' }, lon: -8.0, lat: 31.63, status: 'later' },
  { id: 'agadir', name: { fr: 'Agadir', en: 'Agadir', ar: 'أكادير' }, lon: -9.6, lat: 30.42, status: 'later' },
];
