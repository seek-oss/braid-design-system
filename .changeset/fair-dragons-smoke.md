---
'braid-design-system': patch
---

---
updated:
  - TextField
  - Dropdown
  - PasswordField
  - MonthPicker
  - Textarea
---

**TextField,Dropdown,PasswordField,MonthPicker,Textarea:** Apply aria-describedby to form elements only when needed

Only apply `aria-describedby` to form elements when needed, e.g. either a `message`, `description`, or an explicit `aria-describedby` is passed.
