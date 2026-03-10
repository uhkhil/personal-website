import './src/types.d.ts';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'node:path';
import profileData from './data/profile.json';
import metaData from './data/meta.json';
import experienceData from './data/experience.json';

import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(process.cwd(), 'src/components'),
      context: {
        profile: profileData,
        meta: metaData,
        ...experienceData, // spreading to easily pass `experiences` array
      },
    }),
    cloudflare(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        experience: 'experience.html',
        notfound: '404.html',
      },
    },
  },
});
