---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - Checkbox
  - CheckboxStandalone
  - Dropdown
  - MonthPicker
  - PasswordField
  - RadioGroup
  - Radio
  - TextField
  - Textarea
---

Standardise `disabled` & `critical` state across form fields

Improves the consistency of form fields when combining both `disabled` and `critical` tone, which includes:
- Hiding `critical` borders
- Hiding `message` and not reserving space for it unless explicitly providing the `reserveMessageSpace` prop.
