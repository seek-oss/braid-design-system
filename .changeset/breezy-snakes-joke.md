---
'braid-design-system': patch
---

---
updated:
  - Badge
---

**Badge:** Use span element

As the `Badge` component is not used as a container element, we now use a `span`. This allows it to be used inside `button` elements, such as an `AccordionItem`, without producing invalid html.
