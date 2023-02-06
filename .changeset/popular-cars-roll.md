---
'braid-design-system': patch
---

Use theme tokens for shape of font metrics

Internally some theme utilities were using Capsize’s `FontMetrics` as their expected payload, rather than correctly using the shape of the theme tokens.
This makes Braid compatible with Capsize v3.x.
