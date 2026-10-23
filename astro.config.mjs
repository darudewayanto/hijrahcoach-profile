// @ts-check
import { defineConfig } from 'astro/config';

// Deploy target is set by environment so the same code serves every host:
//   Temporary host: SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
//   Final domain:   SITE_URL=https://hijrahcoach.co.id (BASE_PATH unset → "/")
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hijrahcoach.co.id',
  base: process.env.BASE_PATH ?? '/',
  devToolbar: { enabled: false },
  // Inline CSS into each page: GitHub Pages caches HTML for 10 minutes, so a cached page could
  // otherwise point at a stylesheet hash that a newer deploy already removed (unstyled page).
  build: { inlineStylesheets: 'always' },
});
