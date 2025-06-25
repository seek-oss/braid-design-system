---
'braid-design-system': minor
'@braid-design-system/codemod': major
---

@braid-design-system/codemod has been moved to its own package.

**Note: This is technically a breaking change for local migrations, but we expect minimal impact so are releasing this as a minor version change.**

The `braid-upgrade` command is now no longer part of the `braid-design-system` package. Instead, `braid-upgrade` can be run via the `@braid-design-system/codemod` package.

#### Example

```bash
pnpm dlx @braid-design-system/codemod v31.11 "**/*.{ts,tsx}"
```
