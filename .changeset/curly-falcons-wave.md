---
'braid-design-system': minor
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Add `weight` support

Add support for customising the `weight` of `AccordionItem`s.
This can be either at an `Accordion` level or on a standalone `AccordionItem` based on design requirements.

Note, in order to maintain visual consistency, the `weight` prop can only be specified on an `AccordionItem` when outside of an `Accordion`.

**EXAMPLE USAGE:**
```jsx
<Accordion weight="strong">
  <AccordionItem />
  ...
</Accordion>
```

or

```jsx
<AccordionItem weight="strong" />
```
