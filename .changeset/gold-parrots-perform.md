---
'braid-design-system': patch
---

---
updated:
  - Autosuggest
  - Button
  - ButtonLink
  - ButtonRenderer
  - Checkbox
  - CheckboxStandalone
  - Dropdown
  - MonthPicker
  - PasswordField
  - Radio
  - RadioItem
  - Radio
  - Textarea
  - TextField
  - TextLink
  - TextLinkButton
  - TextLinkRenderer
  - Toggle
---

**Buttons, Fields, TextLinks, Toggle:** Use `span` for field state overlays instead of `div`

Produce more valid HTML as `div` elements are not as flexible with which elements they can be inside (from a validators perspective).
