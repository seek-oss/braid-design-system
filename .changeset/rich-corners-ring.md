---
'braid-design-system': minor
---

---
updated:
  - TooltipRenderer
---

**TooltipRenderer**: Improve tooltip positioning at viewport edges.

Subtly adjusts tooltip layout when triggered near window boundaries to ensure optimal arrow placement.
This change prevents arrows from intersecting with border radius corners while maintaining proper alignment with target elements when they are placed at viewport edges.
