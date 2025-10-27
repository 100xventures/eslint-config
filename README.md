# @100xventures/eslint-config

Shared ESLint config for 100x projects.

## Installation

```bash
npm install --save-dev @100xventures/eslint-config
```

## Usage

### Next.js

Compose with Next.js configs using `@eslint/eslintrc` compatibility layer:

```javascript
import { FlatCompat } from '@eslint/eslintrc';
import { base, next } from '@100xventures/eslint-config';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
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
