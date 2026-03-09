declare module 'vite-plugin-handlebars' {
  import { Plugin } from 'vite';

  interface HandlebarsPluginConfig {
    partialDirectory?: string | string[];
    context?: Record<string, unknown> | ((pagePath: string) => Record<string, unknown>);
  }

  export default function handlebars(config?: HandlebarsPluginConfig): Plugin;
}
