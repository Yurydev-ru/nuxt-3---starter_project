import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules:['@nuxtjs/color-mode', '@nuxt/eslint'],
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
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/assets/scss/themes' as *;
          @use '@/assets/scss/base/index' as *;`
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
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      }
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: false,
  }
})