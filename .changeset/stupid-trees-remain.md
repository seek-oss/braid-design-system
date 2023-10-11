---
"braid-design-system": patch
---

---
updated:
  - Loader
---

When animating an SVG circle, it seems that the width changes slightly, which on Loader was causing the right-most one to push off the boundaries of the SVG View Box.

This has been fixed so clipping should no longer occur.
