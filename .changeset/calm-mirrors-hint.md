---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Add `translate="no"` to the suggestion list and the ARIA live announcement region to prevent browser translations from wrapping text nodes in `<font>` elements, which breaks React DOM updates. Also key suggestion rows by index instead of `index + text`, so locale changes to suggestion labels no longer remount the list, and numeric text can no longer collide keys via string concatenation.
