---
'braid-design-system': patch
---

---
updated:
  - MonthPicker
---

**MonthPicker:** Announce semantic grouping of fields and improved translation support.

When not on a native device, the MonthPicker uses a `fieldset` containing two dropdowns. This change ensures that the grouping is announced correctly. From a translations perspective the labels for the dropdowns are no longer a concatenation of the `label` and `monthLabel`/`yearLabel`, supporting translation of the entire phrase.
