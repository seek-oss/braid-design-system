---
'braid-design-system': patch
---

---
updated:
  - TextField
  - PasswordField
  - Textarea
  - Dropdown
---

**TextField, PasswordField, Textarea, Dropdown:** Add support for multiple field descriptions

Previously, if a custom `aria-describedby` prop was passed, it would take precedence over the `message` prop, which also uses `aria-describedby`. Both descriptions can now be applied at the same time. 
