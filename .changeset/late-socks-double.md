---
'braid-design-system': patch
---

---
updated:
  - TooltipRenderer
---

**TooltipRenderer:** Re-evaluate position when `trigger` or `children` changes

Fixes an issue where the tooltip would not re-evaluate it's position when the `trigger` or `children` prop changed while the tooltip was already open.
