# Open punten (in te vullen door Amplify)

Alles staat in `src/config.ts` (contact) en `src/i18n/fr.ts` (teksten). Placeholders staan in hoofdletters tussen [ ] en zijn op de site geel gemarkeerd.

| Wat | Waar | Status |
|---|---|---|
| WhatsApp-nummer | config.ts `whatsapp` | Voorlopig 0660353741, bevestigen |
| E-mail | config.ts `email` | Voorlopig Gmail, later adres op het eigen domein |
| Adres en postcode (zelfde als Google Bedrijfsprofiel) | config.ts `street`, `postalCode` | Open |
| Openingstijden | config.ts `hours` | Open |
| Link Google Maps en Google Bedrijfsprofiel | config.ts `mapsUrl`, `googleProfileUrl` | Open |
| Doorlooptijd installatie | fr.ts (home stap 3, FAQ Systèmes) | Open, alleen invullen als bevestigd |
| Cases met echte cijfers en toestemming | fr.ts `proof` (home, marketing, restaurants) | Open |
| Analytics-ID en Search Console | Base.astro | Open (WhatsApp-klikken worden al als event klaargezet) |
| Oprichters (Over ons) | nog te bouwen | Open |
| Arabische en Engelse versie | `src/i18n/ar.ts`, `en.ts` | Na akkoord op het Frans |

## Op de dag dat het domein live gaat
1. `src/config.ts`: `live: true`.
2. In Cloudflare Pages het domein toevoegen onder Custom domains.
3. Search Console en Bing Webmaster Tools koppelen, sitemap insturen: `/sitemap-index.xml`.
