import importPlugin from 'eslint-plugin-import';

const base = [
  {
    ignores: [
      'node_modules/',
      '*.d.ts', // Ignore all TypeScript declaration files
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'], // Enforces trailing commas
      'semi': ['error', 'always'], // Enforces trailing semicolons
      'quotes': ['error', 'single', { 'avoidEscape': true }], // Enforces single quotes, except when avoiding escape
      'jsx-quotes': ['error', 'prefer-double'], // Enforces double quotes in JSX attributes
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }], // Enforces blank line before return statements
      'import/order': ['error', { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'], alphabetize: { order: 'asc', caseInsensitive: true } }], // Enforces import order
      'eol-last': ['error', 'always'], // Enforces trailing newline at end of file
    },
    settings: {
      'import/internal-regex': '^@/(components|lib|hooks|utils|public)/',
    },
  },
];

export default base;
