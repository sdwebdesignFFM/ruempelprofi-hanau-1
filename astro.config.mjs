import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Pro Stadt anpassen: site = die Produktiv-Domain (für Sitemap & kanonische URLs)
export default defineConfig({
  site: 'https://ruempelprofi-hanau.de',
  integrations: [sitemap({ filter: (page) => !page.includes('/danke') }), icon()],
  build: { inlineStylesheets: 'auto' },
});
