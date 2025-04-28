import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',

      ],
    },
  },
  ssr: true,
  modules:[
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/mdc',
  ],

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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use 'assets/scss/themes' as *;
          @use 'assets/scss/base/index' as *;
          `,
        },
      },
    },
    server: {
      hmr: {
        overlay: false,
        protocol: 'ws',
        host: 'localhost',
        port: 3000,
        clientPort: 3000
      },
    },
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
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
    }
  },
});