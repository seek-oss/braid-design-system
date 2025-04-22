---
'braid-design-system': minor
---

---
updated:
  - AccordionItem
  - Autosuggest
  - Checkbox
  - CheckboxStandalone
  - Dialog
  - Disclosure
  - Drawer
  - Dropdown
  - PasswordField
  - Textarea
  - TextDropdown
  - TextField
---

Change `id` prop from required to optional, allowing simplified usage

**EXAMPLE USAGE:**

```diff
- <AccordionItem id="item-1" ... />
+ <AccordionItem ... />
```
