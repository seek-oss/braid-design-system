---
'braid-design-system': minor
---

---
updated:
  - Checkbox
---

**Checkbox:** Add support for mixed state

A checkbox can now accept a boolean or `mixed` as the `checked` property. When `mixed`, the checkbox is marked as being in an `indeterminate` state and announced as `mixed` to a screen reader.

**EXAMPLE USAGE:**
```jsx
<Checkbox
  checked="mixed"
  onChange={handler}
  label="Label"
/>
```
