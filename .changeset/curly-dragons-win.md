---
'braid-design-system': minor
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Add `autoCollapse` and animate expand/collapse height

Opening an item with `autoCollapse` closes any other open item. These accordions start collapsed and cannot use item-level `expanded`.

Items now animate height when opening and closing, unless `prefers-reduced-motion` is set. Collapsed panels stay in the document at zero height (`visibility: hidden`, `aria-hidden`, `inert`) instead of `display: none`.

**EXAMPLE USAGE:**

```jsx
<Accordion autoCollapse>
  <AccordionItem label="One">...</AccordionItem>
  <AccordionItem label="Two">...</AccordionItem>
</Accordion>
```
