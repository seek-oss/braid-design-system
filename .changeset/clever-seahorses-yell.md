---
'braid-design-system': patch
---

---
updated:
  - Tiles
---

**Tiles**: Fixes a bug where nested `Tiles` components could calculate their columns incorrectly.

Previously, when using a `Tiles` component inside another `Tiles` component, the responsive column calculation could be incorrect in certain scenarios. 
This change ensures nested `Tiles` elements always calculate their columns correctly.
