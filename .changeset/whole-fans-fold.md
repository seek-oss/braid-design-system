---
'braid-design-system': patch
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Animate expand and collapse height

Accordion items now transition their content height when opening and closing. Overflow is only clipped during the animation so Capsize typography is not cropped in the open state. Motion is disabled when `prefers-reduced-motion` is set. Collapsed panels remain in the document at zero height (`visibility: hidden`, `aria-hidden`, `inert`) instead of `display: none`.
