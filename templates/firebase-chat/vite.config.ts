import { defineConfig } from 'vite';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@@': '/',
      '@components': '/src/components',
      '@models': '/src/models',
      '@store': '/src/store',
    },
  },
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
    Pages(),
    Layouts(),
  ],
  envPrefix: [
    'FIREBASE_',
  ],
  server: {
    port: 3000,
  },
});
