---
'braid-design-system': patch
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Move menu to top-level modal container

The menu has been moved to a top-level modal container to prevent the being cut off inside of a container that hides overflow, for example inside a `Dialog`.
