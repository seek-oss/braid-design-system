---
'braid-design-system': minor
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
  - TextDropdown
  - TextField
  - Textarea
---

Add `tabIndex` support to all form fields

Ensure the `tabIndex` prop is available on all form fields, enabling greater control over which elements appear in the keyboard navigation flow.

In line with [MDN guidance], the only supported values are `0` and `-1` to ensure best practice for keyboard navigation and assistive technologies.

**EXAMPLE USAGE:**
```jsx
<TextField tabIndex={-1} />
```

[MDN guidance]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#:~:text=only%20use%200%20and%20%2D1%20as%20tabindex%20values
