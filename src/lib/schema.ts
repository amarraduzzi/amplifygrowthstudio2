import { SITE } from '../config';
const hasPlaceholder = (s: string) => /\[[^\]]+\]/.test(s);

/** FAQPage: answers that still contain a placeholder are left out of the schema. */
export function faqSchema(items: string[][]) {
  const qa = items.filter(([, a]) => !hasPlaceholder(a));
  if (!qa.length) return null;
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name, description, url,
    provider: { '@id': `${SITE.url}/#business` }, areaServed: { '@type': 'Country', name: 'Maroc' },
  };
}
