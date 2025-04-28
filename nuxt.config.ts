import { defineNuxtConfig } from 'nuxt/config';

const isDev = import.meta.env.MODE === 'development';

export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: !isDev,
      routes: [
        '/',
      ],
    },
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
  css: ['@/assets/scss/main.scss'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'fd-color-mode'
  },
  vite: {
    cacheDir: isDev ? './node_modules/.vite' : './.vite',
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
    build: {
      minify: isDev ? false : 'terser',
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 2000,
    }
  },
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