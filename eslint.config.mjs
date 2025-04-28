import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import markdown from 'eslint-plugin-markdown';
import { defineConfig} from 'eslint/config';

export default defineConfig([

    {
        ignores: [
            "**/node_modules",
            ".output",
            ".nuxt",
            ".git",
            ".vite",
            "public",
            "dist",
            "coverage",
            "build",
            "lib",
            "es",
            "cjs",
            ".turbo",
            ".output/public",
            "*.config.js"
          ],
    },
    {
        files: ['**/*.ts', '**/*.vue', '**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: "module",
            parser: vueParser,
            parserOptions: {
                parser: {
                    ts: tsParser,
                    js: tsParser,
                    '<template>': 'espree'
                },
                project: ['./tsconfig.json'],
                extraFileExtensions: ['.vue'],
            },
            globals: {
                useRouter: 'readonly',
                useAsyncData: 'readonly',
                definePageMeta: 'readonly',
                useHead: 'readonly',
                ref: 'readonly',
                computed: 'readonly',
                defineNuxtConfig: 'readonly'
            },
        },
        plugins: {
            js,
            vue,
            ts,
            stylistic,
            markdown,
        },
        extends: ["js/recommended"],
        rules: {
           "no-unused-vars": "off",
            "vue/no-setup-props-destructure": "off",
            "vue/no-v-html": "warn",
        }
    }
])