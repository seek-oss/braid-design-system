---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add `translate="no"` to the suggestion list and the ARIA live announcement region to prevent browser translations from wrapping text nodes in `<font>` elements, which breaks React DOM updates.