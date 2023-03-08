---
'braid-design-system': patch
---

---
updated:
  - Disclosure
---

**Disclosure:** Ensure chevron does not wrap alone

Fixes the scenario where based on copy length and container size, the chevron could wrap independently of the rest of the label. By using a zero-width, non-breaking space, the chevron will now wrap together with the last word of the label.
