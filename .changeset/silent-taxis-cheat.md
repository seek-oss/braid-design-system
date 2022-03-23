---
'braid-design-system': patch
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Mouse leave no longer affects focus state

Previously, moving the mouse from hovering a menu item to outside of the menu would shift focus the to the menu trigger. This is not a requirement for accessibility and introduces undesired behaviour when the trigger is used in conjunction with [TooltipRenderer](https://seek-oss.github.io/braid-design-system/components/TooltipRenderer).

Note: As per the [menu accessibility guidelines](https://www.w3.org/TR/wai-aria-practices-1.2/#menu), focus will still be returned to the trigger when clicking outside the menu, selecting a menu item or pressing the escape key.
