---
'braid-design-system': patch
---

This release fixes a bug where the reset module included all the tokens for all the themes.

Additionally, this release contains significant compilation fixes to ensure that only styles for the imported components are included in the generated CSS.
Previously, due to the default bundling behavior of Vite, styles for all Braid components were included in the generated CSS, regardless of which components were imported.
This should speed up compilation times and reduce the size of the generated CSS in consuming apps.
