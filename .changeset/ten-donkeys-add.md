---
'braid-design-system': patch
---

Added a hard font-size declaration to the TextDropdown component. Previously this component inherited it's font-size, leading to inconsistent experiences, potential WAI issues, and poor UI.

With this patch it is reset to the globalText: standard font size.
