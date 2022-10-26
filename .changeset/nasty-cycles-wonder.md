---
'braid-design-system': minor
---

---
updated:
  - TextField
---

**TextField:** Add `inputMode` and `step` support

Provide support for the native `inputMode` and `step` attributes.

The `inputMode` will also be defaulted based on the specified `type`. For example: `<TextField type="number" />` will default the `inputMode` to `numeric`.

**EXAMPLE USAGE:**
```jsx
<TextField inputMode="numeric" step=".01" />
```
