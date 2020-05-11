---
'braid-design-system': patch
---

Prevent field buttons firing on right click

Field buttons, such as clear and password visibility toggle, fire on mouse down to ensure focus is retained on the relevant field. We now ensure that the button only recognises left mouse button clicks.

Affects the following components:

- PasswordField: visibility toggle button
- TextField: clear button
- Autosuggest: clear button
