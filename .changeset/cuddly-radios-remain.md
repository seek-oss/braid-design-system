---
'braid-design-system': minor
---

---
updated:
  - AccordionItem
  - Disclosure
---

**AccordionItem, Disclosure**: Change `id` prop from required to optional

The id prop is now optional on both components, allowing simplified usage.

**EXAMPLE USAGE:**

```diff
- <AccordionItem id="item-1" ... />
+ <AccordionItem ... />
```
