---
'braid-design-system': patch
---

---
updated:
  - Checkbox
  - RadioItem
  - Radio
---

**RadioItem, Checkbox:** Fix stacking context behaviour

A `RadioItem` and `Checkbox` previously created a new stacking context with an elevated `z-index` applied on hover, resulting in their labels overlaying other elements in an unpredictable ways — most noticable when [toggling nested content].

For example, toggling nested content containing an `Autosuggest`, would see the list of suggestions list would be overlayed by the next `RadioItem` on hover.

To fix this, the `z-index` is no longer elevated on hover, and additionally the nested content container applies an elevated index when the field is **checked**.

[toggling nested content]: https://seek-oss.github.io/braid-design-system/components/RadioGroup#toggling-nested-content
