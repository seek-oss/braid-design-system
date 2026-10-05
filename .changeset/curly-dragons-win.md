---
'braid-design-system': minor
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Add shared open state and height animation

By default each item still manages itself. Set `multiple` to `false` so only one item can be open, or use `value`, `defaultValue`, and `onChange` on `Accordion`. Items need a `value` in that case.

Items animate their height unless reduced motion is set. Collapsed panels stay in the document at zero height instead of `display: none`.

**EXAMPLE USAGE:**

```jsx
<Accordion multiple={false} defaultValue="one">
  <AccordionItem value="one" label="One">
    ...
  </AccordionItem>
  <AccordionItem value="two" label="Two">...</AccordionItem>
</Accordion>
```
