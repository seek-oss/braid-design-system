---
'braid-design-system': patch
---

---
updated:
  - Textarea
---

**Textarea:** Fix "Received NaN for the `rows` attribute." warning.

Fixes the warning in node testing environments where updating the `rows` attribute was failing due to `line-height` being `normal`. Now falling back to the predefined `lines` prop when the dynamic `grow` size is not valid.
