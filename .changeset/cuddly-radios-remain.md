---
'braid-design-system': minor
---

---
updated:
  - AccordionItem
  - Autosuggest
  - Disclosure
  - TextField
---

Change `id` prop from required to optional, allowing simplified usage

**EXAMPLE USAGE:**

```diff
- <AccordionItem id="item-1" ... />
+ <AccordionItem ... />
```
