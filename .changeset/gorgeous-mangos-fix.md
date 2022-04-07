---
'braid-design-system': patch
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Guard against open/close handlers firing incorrectly

Add guard to ensure open and close handlers are not re-fired when handler instances are updated.
