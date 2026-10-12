import vitest from '@vitest/eslint-plugin';

const test = [
  {
    name: '@100xventures/eslint-config/test',
    ignores: [
      '.playwright/**', // Playwright output
      'blob-report/**', // Playwright blob reporter output
      'coverage/**', // Test coverage output
      'playwright-report/**', // Playwright HTML report
      'test-results/**', // Playwright test output
    ],
  },
  {
    name: '@100xventures/eslint-config/test',
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
];

export default test;
