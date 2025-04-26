// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue';
import ts from '@typescript-eslint/eslint-plugin';
// import markdown from 'eslint-plugin-markdown';
export default withNuxt ({
    ignores: [
      'node_modules',
        'dist',
         '.nuxt',
         'package'
        ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2],
      'no-console': ['warn'],
      'no-debugger': ['error'],
      },
})