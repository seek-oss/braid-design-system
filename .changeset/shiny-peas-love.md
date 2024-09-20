---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - Dropdown
  - MonthPicker
  - PasswordField
  - RadioGroup
  - TextField
  - Textarea
---

Validate accessible field labels in development

Introduce development-time validation for the `label` prop on form fields to guard against blank values and guide towards the alternative labelling options that are available.
This validation helps ensure that all fields are accessible to screen readers and other assistive technologies.
