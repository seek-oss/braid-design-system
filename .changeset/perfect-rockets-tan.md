---
'braid-design-system': patch
---

---
updated:
  - Badge
---

**Badge:** Ensure label follows correct tone

Ensure that the foreground text of a `Badge` always follows the correct tone for the background colour.
Fixes a bug where using a `Badge` in a `List` that overrides the default tone would result in the `Badge` text following the `List` tone instead of the `Badge` tone.
