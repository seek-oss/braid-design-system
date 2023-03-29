---
'braid-design-system': patch
---

---
updated:
  - Badge
---

**Badge:** Adjust height to support different typographic scales

Adjusts the height of `Badge` to be driven by the capHeight of `xsmall` text plus vertical padding, rather than `xsmall` line height.
This enables different typographic scales across themes, while ensuring the `Badge` height is relative.
