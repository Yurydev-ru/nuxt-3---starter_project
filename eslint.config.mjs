import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import markdown from 'eslint-plugin-markdown';
import lightningcss from 'lightningcss';
import { defineConfig} from 'eslint/config';

export default defineConfig([

    {
        ignores: [
            "**/node_modules/**",
            "**/.output/**",
            "**.nuxt/**",
            "**.git/**",
            "**.vite/**",
            "**public/**",
            "**dist",
            "**coverage",

            "**/.output/public/**",
            "**/.config.js*",
            "**/.config.cjs*",
            "**/.config.mjs*",
            "**/vite.config.ts*",
            "**/package.json*",
            "**/package-lock.json*",
            "**/.data/**",
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
            lightningcss,
            "import": require("eslint-plugin-import"),

        },
        extends: [
            "js/recommended",
            "plugin:vue/vue3-recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:@stylistic/recommended",
            "plugin:markdown/recommended",
        ],
        rules: {
            "import/order": ["error",
                { "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always"
             }],
                 },
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_"
                },
            ],
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "vue/no-setup-props-destructure": "off",
            "vue/no-v-html": "warn",
        },
    ])