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
      react: reactPlugin,
    },
    rules: {
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
