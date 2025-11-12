---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - MenuRenderer
  - TooltipRenderer
---

**Autosuggest, MenuRenderer, TooltipRenderer:** Improve placement logic

In `MenuRenderer`, if there is not enough space for the menu above or below the trigger, the menu will be positioned based on the `placement` prop.