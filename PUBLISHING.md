# Publishing package

This repository publishes `@100xventures/eslint-config` as a public package on
npm. Pushing the version tag also creates a GitHub Release.

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

This updates `package.json` and creates an annotated `v*` tag (for example `v1.10.0`).

### 2. Publish to npm

```sh
pnpm publish --access public
```

### 3. Verify npm

```sh
pnpm view @100xventures/eslint-config version
```

### 4. Push commit and tag

```sh
git push origin HEAD --follow-tags
```

`--follow-tags` pushes `main` and the `v*` tag. The tag must land on `origin/main`.

Pushing the tag runs `.github/workflows/release.yml`, which creates the GitHub Release (`gh release create --generate-notes`). Do not create the release by hand.
