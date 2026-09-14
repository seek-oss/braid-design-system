---
'braid-design-system': patch
---

---
updated:
  - Accordion
  - AccordionItem
---

**Accordion, AccordionItem:** Animate expand and collapse height

Accordion items now transition their content height when opening and closing. Duration scales with content height (about 320px/s, between 200ms and 500ms). Pixel heights are used only while the animation is running; settled open panels use `height: auto` so server render and Capsize are not clipped. Overflow is only clipped during the animation. Motion is disabled when `prefers-reduced-motion` is set. Collapsed panels remain in the document at zero height (`visibility: hidden`, `aria-hidden`, `inert`) instead of `display: none`.
