---
'braid-design-system': minor
---

---
updated:
  - Hidden
---

**Hidden:** Hide content by default.

`Hidden` will now hide content if no hidden conditions are specified, i.e. if no `above`, `below`, or `print` props are provided.
Consumers should review usage of the component without these props to ensure `Hidden` behaves as expected.
