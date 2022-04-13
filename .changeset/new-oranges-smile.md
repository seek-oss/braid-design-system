---
'braid-design-system': patch
---

---
updated:
  - Dialog
  - Drawer
---

**Dialog, Drawer:** Prevent sticky close button container from blocking content

Fix regression introduced when migrating the close action to use `ButtonIcon`. The close action container was blocking the content of the `Dialog`/`Drawer`, and when scrolling could prevent a user from interacting with the content as it went behind the container.

Additionally, re-introduced the surface coloured background behind the button to prevent the button from visually colliding with content when scrolling.
