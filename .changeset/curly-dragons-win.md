---
'braid-design-system': minor
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Add height animation and shared open state

Items animate their height when opening and closing, unless reduced motion is set.

Set `multiple` to `false` so only one item can be open, or use `value`, `defaultValue`, and `onChange` on `Accordion` to choose which items are open.

**EXAMPLE USAGE:**

```jsx
<Accordion multiple={false} defaultValue="one">
  <AccordionItem value="one" label="One">
    ...
  </AccordionItem>
  <AccordionItem value="two" label="Two">...</AccordionItem>
</Accordion>
```
