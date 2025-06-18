---
'braid-design-system': major
'@braid-design-system/codemod': major
---

@braid-design-system/codemod has been moved to its own package.

The `braid-upgrade` command is now no longer apart of the core Braid Design System. Instead, `braid-upgrade` can be run via the `@braid-design-system/codemod` package.

#### Example

```bash
pnpm dlx @braid-design-system/codemod v31.11 "**/*.{ts,tsx}
```
