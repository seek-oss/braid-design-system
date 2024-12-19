---
'braid-design-system': patch
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem**: Improve default spacing values and simplify internal layout.

This change reduces the default spacing within `Accordion` and `AccordionItem` components at certain sizes to improve its visual balance, ensuring the content is better associated with the correct `AccordionItem`.

Within the `Accordion` component, the default space between `AccordionItem` components has been reduced for size `large` with dividers, and sizes `small` and `xsmall` without dividers.
Within the `AccordionItem` component, the space between the `label` and content has been reduced for sizes `large` and `small`.
