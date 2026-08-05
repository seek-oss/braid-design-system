---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
---

**Autosuggest:** Fix suggestion menu being clipped at the bottom of the viewport by allowing the menu to flip above the field when there isn’t enough space below. Also keep keyboard highlight scrolling inside the menu so it no longer jumps the page (a regression from using native `scrollIntoView` on portalled items).
