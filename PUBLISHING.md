# Publishing to npm

## Prerequisites

- npm account with access to `@100xventures` organization

## Quick Publish Workflow

```bash
# 1. Authenticate
pnpm login

# 2. Ensure clean state
git status

# 3. Sync lockfile
pnpm install

# 4. Bump version (patch/minor/major)
npm version patch  # or minor, or major

# 5. Publish
npm publish --access public

# 6. Push to GitHub
git push && git push --tags
```
