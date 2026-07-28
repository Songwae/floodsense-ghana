// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to your final domain before production deploy.
// This only affects canonical URLs + sitemap; it does not block local dev.
// GitHub Pages example: site 'https://songwae.github.io' + base '/floodsense-ghana'
export default defineConfig({
  site: 'https://floodsense-ghana.org',
  integrations: [sitemap()],
});
