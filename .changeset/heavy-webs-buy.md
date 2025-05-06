---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - PasswordField
  - TextField
---

Ensure the `input` element fills the visual field boundary.

Previously, when a field action such as "clear" or "toggle password visibility" was present, the native `input` element would shrink to accommodate.

This change ensures the `input` does not change size, instead applying padding to prevent the field value from colliding with the action.
The native browser styles for features such as [`:autofill`] now visually fill the field.