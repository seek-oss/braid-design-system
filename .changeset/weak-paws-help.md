---
'braid-design-system': patch
---

---
updated:
  - PasswordField
---

**PasswordField:** Ensure disabled is handled correctly

Fixes a bug where the **disabled** prop was not being honoured, it was hiding the visibility toggle but leaving the field enabled.
