import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const base = [
  {
    name: '@100xventures/eslint-config/base',
    ignores: [
      'node_modules/**',
      'dist/**', // Build output
      '*.d.ts', // Ignore all TypeScript declaration files
    ],
  },
  {
    name: '@100xventures/eslint-config/typescript',
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
  },
  {
    name: '@100xventures/eslint-config/typescript-parser',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
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
      'curly': ['error', 'all'], // Requires braces around every control-statement body
      'brace-style': ['error', '1tbs', { allowSingleLine: false }], // Disallows single-line blocks
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
      'no-unused-vars': 'off', // The TypeScript rule below covers JS and TS
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ], // Allows unused args and variables whose names start with _
    },
    settings: {
      'import/internal-regex': '^@/(components|lib|hooks|utils|public)/',
    },
  },
  {
    name: '@100xventures/eslint-config/type-members',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/member-delimiter-style': ['error', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
      }], // Semicolons between type members; trailing semicolon only when multiline
    },
  },
];

export default base;
