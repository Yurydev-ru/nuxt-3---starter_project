import js from '@eslint/js';
import eslintPlugin from 'eslint-plugin-flat';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.js'],
    },
]);

// export default tseslint.config(
//     ignores: [
//         '**/node_modules/**',
//         '**/dist/**',
//         '**/build/**',
//         '**/coverage/**',
//         '**/out/**',
//         '**/lib/**',
//         '**/es/**',
//         '**/cjs/**',
//         '**/esm/**',
//         '**/test/**',
//         '**/tests/**',
//         '**/__tests__/**'
//     ],
//     eslint.configs.recommended,
//     tseslint.configs.recommendedTypeChecked,
//     eslintPlugin.configs['flat/recommended'],
//     // files: ['**/*.ts', '**/*.js'],
//     // plugins: {
//     //     js,
//     //     ts: tseslint,
//     //     tsParser,
//     // },
//     languageOptions: {
//         parser: {
//             js: js.parser,
//             ts: tseslint.parser,
//             tsParser: tsParser,
//         },
//         parserOptions: {
//             ts: {
//                 project: './tsconfig.json',
//                 tsconfigRootDir: __dirname,
//                 sourceType: 'module',
//             },
//         },

//     },

//   features: {
//     tooling: true,
//     stylistic: true,
//   },
// )
