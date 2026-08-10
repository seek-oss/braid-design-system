---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Key suggestion rows by index instead of `index + text`, so locale changes to suggestion labels no longer remount the list, and numeric text can no longer collide keys via string concatenation.
