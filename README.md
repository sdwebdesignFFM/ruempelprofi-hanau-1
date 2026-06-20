# ruempelprofi-hanau.de — Rank-&-Rent-Seite (Astro)

Statische, conversion- & SEO-optimierte Local-Service-Seite. Datengetrieben → als Vorlage für weitere Städte klonbar.

## Stack
- **Astro** (0 KB Client-JS) · **astro-icon** (Lucide) · **@astrojs/sitemap**
- Fonts self-hosted (DSGVO-konform) · Bilder als WebP (astro:assets)

## Entwicklung
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deploy: Cloudflare Pages
- **Framework preset:** Astro (oder None)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node-Version:** 20 (Env-Var `NODE_VERSION=20`)
- Danach Custom Domain `ruempelprofi-hanau.de` verbinden.

## Inhalte pflegen
Alle Texte/NAP/Stadtteile/Preise in **`src/data/hanau.ts`**.
- `web3formsKey` — Access-Key für den Formular-Versand (web3forms.com, Empfänger: info@sdwebdesign.de)
- Telefon: `nap.phoneDisplay` / `nap.phoneLink`
- Bewertungen: `reviews.items` (leer = Sektion ausgeblendet; erst echte Reviews eintragen)

## Neue Stadt klonen
`src/data/hanau.ts` kopieren → Stadt/NAP/Stadtteile/Texte anpassen (>=30 % individualisieren gegen Duplicate Content), eigene Bilder in `src/assets/`, `astro.config.mjs` `site` + Domain setzen.

## Vor Go-Live
- Impressum/Datenschutz prüfen (Generator/anwaltlich)
- Echte Telefonnummer & ggf. Call-Tracking
- Bewertungen/Map Pack (GBP) erst mit realem Betrieb/Mieter
