---
'braid-design-system': patch
---

---
updated:
  - Tab
---

**Tab:** Remove cropping of the icon slot

Previously the `icon` slot on a `Tab` was cropped on the left to improve alignment with the active tab indicator.
For most icons in a `Tab`, this was subtle polish, but for others it had the undesirable side effect of clipping the side of the icon.

Removing the cropping until we have a better solution for trimming whitespace around icons.
