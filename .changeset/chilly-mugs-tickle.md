---
'braid-design-system': patch
---

---
updated:
  - Drawer
---

**Drawer:** Prevent close button protruding in left position

Fixes an issue where the close button could protrude from a `Drawer`.
This was only visible when setting `position` to `left` and between a small range of screen widths — above 660px (`small` content width) and below 768px (`tablet` breakpoint).
