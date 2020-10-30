---
'braid-design-system': patch
---

---
updated:
  - Checkbox
  - RadioGroup
  - Radio
---

**Checkbox,RadioGroup,Radio:** Fix element type passed to onChange event

Fixes a bug where the `onChange` event previously received the change event for a `form` element rather than an `input` element.
