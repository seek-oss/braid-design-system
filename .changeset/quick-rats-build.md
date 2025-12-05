---
'braid-design-system': major
---

---
updated:
  - Box
  - atoms
---

**Box, atoms**: Remove deprecated `outline` value `none`, and `boxShadow` value `outlineFocus`.

Braid leverages the `outline` property directly, managing focus rings of interactive elements as part of its scoped CSS reset.

**MIGRATION GUIDE:**

For styling the focus ring via `Box`:

1. Remove usage of `outline="none"` and `boxShadow="outlineFocus"`
2. Refer to [`focus outlines`] for guidance on leveraging Braid's focus outline styles.

```diff
- <Box outline="none" className={styles.customFocusStyles} />
+ <Box />
```

For styling the focus outline of an element based on the focus of another element, see [`outlineStyle`].

[`focus outlines`]: https://seek-oss.github.io/braid-design-system/components/Box#focus-outlines
[`outlineStyle`]: https://seek-oss.github.io/braid-design-system/css/outlineStyle