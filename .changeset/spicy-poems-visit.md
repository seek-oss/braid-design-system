---
'braid-design-system': patch
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Ensure `bleedY` is backwards compatibile for `transparent` variant

Ensure that `bleedY` applies bleed only vertically on `transparent` variant, isolating the new horizontal bleed to the new `bleed` prop exclusively.
