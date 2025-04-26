import js from '@eslint/js'
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';


export default ({
    files: ['**/*.ts', '**/*.js'],
    plugins: {
        js,
        ts: tseslint,
        tsParser,
    },
    languageOptions: {
        parser: {
            js: js.parser,
            ts: tseslint.parser,
            tsParser: tsParser,
        },
        parserOptions: {
            ts: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
        },

    },

  features: {
    tooling: true,
    stylistic: true,
  },
})
