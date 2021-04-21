---
'braid-design-system': minor
---

---
updated:
  - Accordion
---

**Accordion, AccordionItem:** Allow customisation of size, tone, space and dividers.

Note that, to ensure adequate space for touch targets, the `space` prop only accepts values of `"medium"`, `"large"` and `"xlarge"`.

**EXAMPLE USAGE**

```tsx
<Accordion size="standard" tone="secondary" space="xlarge" dividers={false}>
  <AccordionItem label="Accordion item 1">...</AccordionItem>
  <AccordionItem label="Accordion item 2">...</AccordionItem>
  <AccordionItem label="Accordion item 3">...</AccordionItem>
</Accordion>
```
