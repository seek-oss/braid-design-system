---
'braid-design-system': minor
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Add `autoCollapse`, `defaultExpanded`, and animate expand/collapse height

Opening an item with `autoCollapse` closes any other open item. These accordions start collapsed unless an item sets `defaultExpanded` with an explicit `id`. Item-level `expanded` remains incompatible with `autoCollapse`.

Items now animate height when opening and closing, unless `prefers-reduced-motion` is set. Collapsed panels stay in the document at zero height (`visibility: hidden`, `aria-hidden`, `inert`) instead of `display: none`. Initial open state is not animated.

**EXAMPLE USAGE:**

```jsx
<Accordion autoCollapse>
  <AccordionItem id="one" label="One" defaultExpanded>
    ...
  </AccordionItem>
  <AccordionItem label="Two">...</AccordionItem>
</Accordion>
```
