# Publishing package

This repository publishes `@100xventures/eslint-config` as a public package on
npm.

## Prerequisites

- npm account with publish access to the `@100xventures` organization
- npm two-factor authentication enabled

Authenticate against the npm registry:

```sh
pnpm login
pnpm whoami
```

Ensure clean Git working tree on the commit being released:

```sh
git status --short
pnpm install --frozen-lockfile
```

## Publish

### 1. Version

Choose `patch`, `minor`, or `major`:

```sh
pnpm version patch
```

### 2. Publish

```sh
pnpm publish --access public
```

### 3. Verify and push

```sh
pnpm view @100xventures/eslint-config@1.9.1 version
git push origin HEAD --follow-tags
```
