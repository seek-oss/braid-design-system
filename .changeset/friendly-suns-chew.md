---
'braid-design-system': minor
---

Divider: Add strong weight variant, e.g. `<Divider weight="strong">`.

Note that this also affects the `dividers` prop on both `Stack` and `Tiles`, e.g. `<Stack space="medium" dividers="strong">`. You can still pass a boolean prop if you want to render the default divider styling, e.g. `<Stack space="medium" dividers>`, so this change is backwards compatible.
