---
'braid-design-system': patch
---

---
updated:
  - Table
---

**Table:** Ensure `alignY` applied consistently across browsers

Fixes an issue where setting the `alignY` prop to `top` would not apply the `vertical-align` CSS property — instead falling through to our CSS reset which sets `vertical-align: baseline` (rendering inconsistently across browsers).
