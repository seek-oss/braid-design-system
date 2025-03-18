---
'braid-design-system': minor
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu**: Add automatic menu positioning to ensure menus are placed within viewport bounds.

Menus now detect when they would render outside window boundaries and automatically adjust their position.
This includes flipping their vertical placement and/or aligning to window edges as needed to ensure menus remain fully visible.
