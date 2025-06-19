---
'braid-design-system': minor
---

---
updated:
  - Box
  - atoms
---

**Box, atoms**: Deprecate `outline` prop.

The "outline" prop is deprecated and will be removed in a future release.

Braid manages focus outlines automatically.
If you are removing the outline to create a custom focus style, please consider relying on Braid's outline instead.

**MIGRATION GUIDE:**

```diff
- <Box outline="none" className={styles.customFocusRingStyling} ...>
+ <Box ... />
```
