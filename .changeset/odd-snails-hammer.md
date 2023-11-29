---
'braid-design-system': patch
---

Fixes a bug where the reset module mistakenly included all the tokens for all the themes.

Additionally, this  includes significant compilation improvements to ensure that only styles for the components being used are included — speeding up build times and reducing the overall CSS bundle size.
