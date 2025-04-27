import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'


const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  test: {
    include: ['**/__tests__/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules/', 'dist/'],
    coverage: {
      reporter: ['text', 'lcov'],
      },
  },
})