---
'braid-design-system': minor
---

Box: Add `userSelect="none"`.

**FEATURES**

**`Box`**

You can now set `userSelect` to `"none"` directly on `Box`.

Since the default value of `user-select` in CSS is `"auto"`, you can make this value dynamic by conditionally setting it to `undefined`, e.g. `<Box userSelect={selectable ? undefined : 'none'}`.
