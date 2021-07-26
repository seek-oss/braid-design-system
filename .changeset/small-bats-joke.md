---
'braid-design-system': patch
---

---
updated:
  - Checkbox
  - RadioGroup
  - Radio
---

**Checkbox, RadioGroup, Radio:** Use atoms for label cursor styles

Since the disabled state of a checkbox can only be changed via JavaScript, cursor styles can be toggled via `Box` props rather than generating additional CSS.

While this is an improvement in and of itself, this change is being made to work around a third-party testing bug where our use of `:disabled` in a complex CSS selector is causing an exception to be thrown.
