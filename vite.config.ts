import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(process.cwd(), 'src/components'),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        experience: 'experience.html',
      },
    },
  },
});
