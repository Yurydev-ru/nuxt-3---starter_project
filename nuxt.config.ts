import { defineNuxtConfig } from 'nuxt/config';

const isDev = import.meta.env.MODE === 'development';

export default defineNuxtConfig({

  css: ['@/assets/scss/main.scss'],
  vite: {
    cacheDir: isDev ? './node_modules/.vite' : './.vite',
    build: {
      minify: isDev ? false : 'terser',
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 2000,
    },
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        scss: {
          additionalData: isDev ? `@use 'assets/scss/dev-import' as *;` : ''
        },
      },
    },
    server: {
      hmr: {
        overlay: false,
        protocol: 'ws',
        host: 'localhost',
        port: 24678,
        clientPort: 3000
      },
    },
  },
  nitro: {
    routeRules: {
        '/_nuxt': {
          headers: {
        },
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'fd-color-mode'
  },
  modules:[
    '@nuxt/content',
    '@nuxtjs/color-mode',
    isDev && '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/mdc',
  ].filter(Boolean),

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  typescript: {
    shim: false,
    strict: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: false,
  },
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});