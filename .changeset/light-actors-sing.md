---
'braid-design-system': patch
---

---
updated:
  - MenuRenderer
  - OverflowMenu
---

**MenuRenderer, OverflowMenu:** Make menu modal & limit number of items

The menu has been made modal to prevent the being cut off inside of a container that hides overflow, for example inside a `Dialog`. Additionally the menu now also limits the height to a maximum of 8 items above tablet and 6 items on mobile.
