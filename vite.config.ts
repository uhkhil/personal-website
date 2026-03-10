import './src/types.d.ts';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'node:path';

import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(process.cwd(), 'src/components'),
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
