---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - Dropdown
  - FieldLabel
  - MonthPicker
  - PasswordField
  - RadioGroup
  - TextField
  - Textarea
---

Show `description` on form fields when no `label` provided

Previously, a `FieldLabel` without a `label` would return nothing. However, now that form fields can opt for [indirect or hidden labels] (via `aria-label` or `aria-labelledby`), the `description` should still be shown.

> Note: The `secondaryLabel` and `tertiaryLabel` remain conditional based on the presence of a `label`. This is due to their location in the layout being anchored off the `label`.

**EXAMPLE USAGE:**
```jsx
<FieldLabel
  description="Description now visible without label"
/>
```

[indirect or hidden labels]: https://seek-oss.github.io/braid-design-system/components/TextField#indirect-or-hidden-field-labels
