# Publishing to npm

## Prerequisites

- npm account with access to `@100xventures` organization
- Authenticated locally: `npm login`

## Quick Publish Workflow

```bash
# 1. Ensure clean state
git status

# 2. Bump version (patch/minor/major)
npm version patch  # or minor, or major

# 3. Publish
npm publish --access public

# 4. Push to GitHub
git push && git push --tags
```
