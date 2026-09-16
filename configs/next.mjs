import { createRequire } from 'node:module';
import tailwindcssPlugin from 'eslint-plugin-better-tailwindcss';
import reactPlugin from 'eslint-plugin-react';

const require = createRequire(import.meta.url);

// eslint-config-next's parser requires `next` (next/dist/compiled/babel/eslint-parser).
// The barrel re-exports this file, so Node packages that only import `base`/`test`
// still evaluate it. Fall back when `next` is not installed.
function loadNextConfig(id) {
  try {
    const config = require(id);

    return config?.default ?? config;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND' || error.code === 'ERR_MODULE_NOT_FOUND') {
      return [];
    }

    throw error;
  }
}

const nextVitals = loadNextConfig('eslint-config-next/core-web-vitals');
const nextTs = loadNextConfig('eslint-config-next/typescript');

const next = [
  ...nextVitals,
  ...nextTs,
  {
    name: '@100xventures/eslint-config/next',
    ignores: [
      '.next/', // Next.js build output
      'src/components/ui/', // Ignore shadcn/ui components
      'src/hooks/use-mobile.ts', // Ignore shadcn/ui use-mobile hook
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    plugins: {
      'better-tailwindcss': tailwindcssPlugin,
      react: reactPlugin,
    },
    settings: {
      // Must match what the plugin reads (`better-tailwindcss`), not the `plugins` alias.
      'better-tailwindcss': {
        entryPoint: 'src/app/globals.css',
      },
    },
    rules: {
      'better-tailwindcss/enforce-consistent-class-order': 'error',
      'better-tailwindcss/enforce-canonical-classes': 'error',
      'better-tailwindcss/no-duplicate-classes': 'error',
      'better-tailwindcss/no-deprecated-classes': 'error',
      'better-tailwindcss/no-unnecessary-whitespace': 'error',
      'better-tailwindcss/no-conflicting-classes': 'error',
      'react/no-danger': 'error', // Avoid using dangerouslySetInnerHTML in React components
      'react/jsx-tag-spacing': [
        'error', { 
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
    },
  },
  {
    name: '@100xventures/eslint-config/next/unused-vars',
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default next;
