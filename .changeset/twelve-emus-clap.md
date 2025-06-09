---
'braid-design-system': patch
---

---
updated:
  - Dialog
  - Drawer
---

**Dialog, Drawer**: Ensure that only elements outside the `Dialog` or `Drawer` are `aria-hidden` when open

Fixes an issue where the close button inside the `Dialog` or `Drawer` was incorrectly inside an `aria-hidden` region.
