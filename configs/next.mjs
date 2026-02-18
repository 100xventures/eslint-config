import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

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
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      'tailwindcss/classnames-order': 'error', // Enforces classnames order
      'tailwindcss/enforces-shorthand': 'error', // Enforces shorthand syntax
    },
  },
];

export default next;
