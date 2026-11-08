// Cities of Bssaha. A city is "live" when its status is 'live', or as soon as enough restaurants are listed (MIN_TO_OPEN).
// Only real numbers are shown: the count is the listed restaurants (actif: true) of that city, nothing else.
// color = the city's petit taxi (Rabat blue, Casablanca red, Fès red, Marrakech ochre, Tanger light blue, Agadir orange);
// ink = text colour that stays readable on it.
import type { L } from './bssaha';
export type CityStatus = 'live' | 'soon' | 'later';
export interface City { id: string; name: L; lon: number; lat: number; status: CityStatus; color: string; ink: string }
export const MIN_TO_OPEN = 10;
export const CITIES: City[] = [
  { id: 'rabat', name: { fr: 'Rabat', en: 'Rabat', ar: 'الرباط' }, lon: -6.84, lat: 34.02, status: 'live', color: '#1F5FD1', ink: '#fff' },
  { id: 'casablanca', name: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' }, lon: -7.62, lat: 33.57, status: 'soon', color: '#D7282F', ink: '#fff' },
  { id: 'tanger', name: { fr: 'Tanger', en: 'Tangier', ar: 'طنجة' }, lon: -5.8, lat: 35.78, status: 'later', color: '#58A8E6', ink: '#001E3E' },
  { id: 'fes', name: { fr: 'Fès', en: 'Fez', ar: 'فاس' }, lon: -5.0, lat: 34.03, status: 'later', color: '#D7282F', ink: '#fff' },
  { id: 'marrakech', name: { fr: 'Marrakech', en: 'Marrakech', ar: 'مراكش' }, lon: -8.0, lat: 31.63, status: 'later', color: '#C9A06B', ink: '#001E3E' },
  { id: 'agadir', name: { fr: 'Agadir', en: 'Agadir', ar: 'أكادير' }, lon: -9.6, lat: 30.42, status: 'later', color: '#F28A1B', ink: '#001E3E' },
];
