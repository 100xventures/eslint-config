# Publishing to npm

## Prerequisites

- npm account with access to `@100xventures` organization

## Quick Publish Workflow

```bash
# 1. Authenticate
npm login

# 2. Ensure clean state
git status

# 3. Bump version (patch/minor/major)
npm version patch  # or minor, or major

# 4. Publish
npm publish --access public

# 5. Push to GitHub
git push && git push --tags
```
