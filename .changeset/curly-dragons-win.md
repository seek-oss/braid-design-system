---
'braid-design-system': minor
---

---
updated:
  - Accordion
---

**Accordion:** Add `autoCollapse` prop

Opening an item closes any other open item. Accordions with `autoCollapse` start collapsed and are not controlled with item-level `expanded`. `onToggle` fires on the item that was clicked, and with `false` on the item that was closed as a result.

**EXAMPLE USAGE:**
```jsx
<Accordion autoCollapse>
  <AccordionItem label="One">...</AccordionItem>
  <AccordionItem label="Two">...</AccordionItem>
</Accordion>
```
