---
'braid-design-system': patch
---

---
updated:
  - Alert
  - Card
  - useToast
---

**Alert, Card, useToast:** Decouple keyline width from space scale

Previously the keyline width on the left determined its width using the space scale.
Re-aligning this to use the grid unit to enable themes with larger space scales.
