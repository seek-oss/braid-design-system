---
'braid-design-system': minor
---

---
updated:
  - Box
  - atoms
---

**Box, atoms**: Deprecate `outline` value `none`.

`outline="none"` is deprecated and will be removed in a future release.

Braid manages most focus outlines automatically.

If you are applying an outline to a custom element, you can do so via `outline="focus"`.

If you are indirectly applying an outline to a different element, see the [`outlineStyle`] function.

[`outlineStyle`]: https://seek-oss.github.io/braid-design-system/css/outlineStyle

If you are removing the outline to create a custom focus style.

**MIGRATION GUIDE:**

```diff
- <Box outline="none" className={styles.customFocusRingStyling} ...>
+ <Box ... />
```
