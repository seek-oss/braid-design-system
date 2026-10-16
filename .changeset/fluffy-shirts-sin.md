---
"braid-design-system": patch
---

---
updated:
  - Dialog
  - Drawer
---

**Dialog, Drawer:** Keep focus in the top-most modal after the browser window regains focus

Fixes an issue where, with multiple modals open, focus could move to an underlying modal after switching away from and back to the browser window, preventing interaction with fields in the top-most modal.
