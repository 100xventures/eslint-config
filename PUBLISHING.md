# Publishing package

This repository publishes `@100xventures/eslint-config` as a public package on
npm. Pushing the version tag also creates a GitHub Release.

## Prerequisites

- npm account with publish access to the `@100xventures` organization
- npm two-factor authentication enabled
- Dependencies installed (`pnpm install --frozen-lockfile`)

### Local login

```sh
npm login
npm whoami
```

`npm whoami` is the session used to publish. `pnpm whoami` can succeed with a
stale token. Do not put a long-lived `_authToken` in `~/.npmrc`.

## Publish

Run this from a clean `main` that matches `origin/main`:

```sh
git status --short
git fetch origin main
git rev-parse HEAD origin/main
```

The two revisions must match.

### 1. Version

Check the published version first:

```sh
npm view @100xventures/eslint-config version
```

It must match `package.json`. If the local version is already ahead, skip the
bump and continue from the push. If it is behind, set `package.json` to the
published version before releasing.

Choose `patch`, `minor`, or `major`:

```sh
pnpm version patch
```

This commits `package.json` and creates an annotated `v*` tag (for example
`v1.10.1`). Do not run it again if a later step fails.

### 2. Push commit and tag

```sh
git push --atomic --follow-tags origin HEAD:refs/heads/main
```

The tag must land on `origin/main`. Pushing it runs
`.github/workflows/release.yml`, which creates the GitHub Release
(`gh release create --generate-notes`). Do not create the release by hand.

### 3. Publish to npm

From this repository root:

```sh
npm publish --access public
```

npm may prompt for 2FA or a passkey. `pnpm publish` sends `~/.npmrc`'s token
and never opens that prompt.

### 4. Verify npm

```sh
npm view @100xventures/eslint-config version --prefer-online
```

### If the atomic Git push fails

The version commit and tag stay local, and the remote is unchanged. Fix the
Git issue, retry the push above, then publish. Do not run `pnpm version`
again.

### If publish fails after the push

The version commit and tag are already on origin, and the GitHub Release may
already exist. Fix the npm issue, then retry the same version:

```sh
npm publish --access public
npm view @100xventures/eslint-config@version version --prefer-online
```

Do not run `pnpm version` again, and do not delete the tag or the GitHub
Release.

### If publish succeeds but verification times out

`npm publish` already accepted the version, and the commit and tag are already
on origin. The registry can take longer than usual to show the new version.
Re-check it:

```sh
npm view @100xventures/eslint-config@version version --prefer-online
```

When that prints the version, the release is complete. Leave the existing
publish and tag in place.
