# @100xventures/eslint-config

Shared ESLint config for 100x projects.

## Installation

```bash
pnpm add -D @100xventures/eslint-config
```

## Usage

Add the following to your `eslint.config.mjs` file:

### Next.js

```javascript
import { base, next } from '@100xventures/eslint-config';
import coreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...coreWebVitals,
  ...base,
  ...next,
];
```

### Other Projects

```javascript
import { base } from '@100xventures/eslint-config';

export default [...base];
```

## Customization

Configs are fully composable. Override or extend as needed:

```javascript
import { base } from '@100xventures/eslint-config';

export default [
  ...base,
  {
    rules: { 'semi': ['error', 'never'] }, // Override rules
    ignores: ['dist/', 'build/'], // Add ignores
  },
];
```
