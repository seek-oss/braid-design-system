---
'braid-design-system': patch
---

---
updated:
  - RadioGroup
---

**RadioGroup:** Ensure `reserveMessageSpace` prevents layout shift correctly

Consider the `removeMessageSpace` prop as well as `message` when conditionally applying internal padding between radio list and field message.
