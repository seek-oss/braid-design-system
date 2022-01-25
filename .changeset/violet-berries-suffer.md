---
'braid-design-system': patch
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Ensure layout of the trigger is controlled by the parent

Fixes an issue where the trigger container did not adhere to the parent layout, preventing consumers from providing triggers that take up the full width of their available space. This goes against one of Braid's key layout principles which says [spacing between elements is owned entirely by layout components](https://seek-oss.github.io/braid-design-system/foundations/layout).
