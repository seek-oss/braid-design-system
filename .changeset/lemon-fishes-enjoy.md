---
'braid-design-system': patch
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Ensure label is vertically centered

Fixes a bug where a `ButtonLink` label would not be vertically centered inside containers that stretch elements to fill the available space, such as `Tiles`.
While the issue did not affect `Button`, the fix was applied to both components to ensure there is no reliance on browser default styling..
