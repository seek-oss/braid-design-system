---
'braid-design-system': minor
---

---
updated:
  - AccordionItem
  - Autosuggest
  - ButtonIcon
  - Checkbox
  - CheckboxStandalone
  - Dialog
  - Disclosure
  - Drawer
  - Dropdown
  - MonthPicker
  - PasswordField
  - RadioGroup
  - TabsProvider
  - Textarea
  - TextDropdown
  - TextField
  - Toggle
  - TooltipRenderer
---

Change `id` prop from required to optional, allowing simplified usage

**EXAMPLE USAGE:**

```diff
- <AccordionItem id="item-1" ... />
+ <AccordionItem ... />
```
