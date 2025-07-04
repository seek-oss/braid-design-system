---
'braid-design-system': patch
---

---
updated:
  - AccordionItem
  - Alert
  - Autosuggest
  - Button
  - ButtonIcon
  - ButtonLink
  - Checkbox
  - CheckboxStandalone
  - Dialog
  - Drawer
  - Dropdown
  - MonthPicker
  - PasswordField
  - RadioItem
  - Step
  - Tab
  - TabPanel
  - Textarea
  - TextDropdown
  - TextField
  - TextLink
  - TextLinkButton
  - Toggle
---

Migrate from custom focus ring visibility to native `:focus-visible` behaviour.

Previously Braid would change the presentation of focus ring outlines based on the user input, i.e. mouse or keyboard,
to prevent showing focus rings on click.
With the updated Browser Support Policy, we can now leverage the native `:focus-visible` pseudo class instead.
