---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - Badge
  - Button
  - Card
  - Pagination
  - Textarea
  - TooltipRenderer
  - useToast
---

Improved consistency of border radius usage across components

Over time, individual components have reached for a larger radius in the scale, rather than increasing the scale at a theme level. This resulted in inconsistent use across the system, preventing uplift of the scale.

Re-aligning all components to use the scale consistently enables themes to apply very different radius scales — enabling an upcoming design uplift theme.
