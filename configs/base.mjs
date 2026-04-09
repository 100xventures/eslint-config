import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

const base = [
  {
    name: '@100xventures/eslint-config/base',
    ignores: [
      'node_modules/**',
      '*.d.ts', // Ignore all TypeScript declaration files
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'], // Enforces trailing commas
      'semi': ['error', 'always'], // Enforces trailing semicolons
      'quotes': ['error', 'single', { 'avoidEscape': true }], // Enforces single quotes, except when avoiding escape
      'jsx-quotes': ['error', 'prefer-double'], // Enforces double quotes in JSX attributes
      'padding-line-between-statements': [
        'error', {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ], // Enforces blank line before return statements
      'import/order': [
        'error', {
          groups: [
            'external',
            'builtin',
            'internal',
            'sibling',
            'parent',
            'index',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
            orderImportKind: 'ignore',
          },
          named: true,
        },
      ], // Enforces import order
      'eol-last': ['error', 'always'], // Enforces trailing newline at end of file
      'linebreak-style': ['error', 'unix'], // Enforces Unix line endings
      'no-multiple-empty-lines': [
        'error', {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ], // No blank lines after the last line (avoids "extra newline at EOF" vs formatters)
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Enforces no unused variables, except for variables starting with _
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // If variables start with _ the rule can't be disabled
    },
    settings: {
      'import/internal-regex': '^@/(components|lib|hooks|utils|public)/',
    },
  },
];

export default base;
