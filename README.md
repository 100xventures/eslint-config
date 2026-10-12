# `@100xventures/eslint-config`

Opinionated ESLint config used across [100x](https://100xventures.com/) products.

## Installation

```bash
pnpm add -D @100xventures/eslint-config
```

## Usage

Add the following to your `eslint.config.mjs` file:

### Next.js

```javascript
import { base, next, test } from '@100xventures/eslint-config';

export default [
  ...base,
  ...next,
  ...test,
];
```

### Node.js

```javascript
import { base, test } from '@100xventures/eslint-config';

export default [
  ...base,
  ...test,
];
```

## Customization

Configs are fully composable. Override or extend as needed:

```javascript
import { base } from '@100xventures/eslint-config';

export default [
  ...base,
  {
    rules: { 'semi': ['error', 'never'] }, // Override rules
    ignores: ['build/'], // Add ignores
  },
];
```

