---
'braid-design-system': patch
---

---
updated:
  - OverflowMenu
  - MenuRenderer
---

**OverflowMenu, MenuRenderer:** Assert that all child nodes are valid menu items

In order to maintain accessibility, we now throw assertion errors in development if any child node within an [OverflowMenu](https://seek-oss.github.io/braid-design-system/components/OverflowMenu) or [MenuRenderer](https://seek-oss.github.io/braid-design-system/components/MenuRenderer) component is not a [MenuItem/MenuItemLink](https://seek-oss.github.io/braid-design-system/components/MenuItem).
