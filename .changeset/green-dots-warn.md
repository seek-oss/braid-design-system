---
'braid-design-system': patch
---

---
updated:
  - Accordion
---

**Accordion**: Fix `data` prop parsing

Ensure the `data` prop is correctly passed through to `Stack` internally, and validate `data-*` attributes are not being passed in incorrectly.

