---
'braid-design-system': patch
---

---
updated:
  - Dialog
  - Drawer
---

**Dialog, Drawer:** Adapt max height to available viewport space

Make use of the new [dynamic viewport units] for applying a max height to modal elements such as `Dialog` and `Drawer`. These new units take into account dynamic browser toolbars that expand and contract as the user scrolls, ensuring the browser interface never obscures the web site content.

Fix also incorporates fallback for older browsers to use regular viewport units.


[Dynamic Viewport units]: https://web.dev/viewport-units/
