import tailwindcssPlugin from 'eslint-plugin-better-tailwindcss';
import reactPlugin from 'eslint-plugin-react';

const next = [
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
];

export default next;
