---
'braid-design-system': minor
---

---
updated:
  - Disclosure
  - AccordionItem
---

**Disclosure, AccordionItem:** Animate Disclosure height when opening and closing

Disclosure animates its height unless reduced motion is set. There is no animation prop. After the close animation, collapsed content uses `display: none` so an inline Disclosure does not split the surrounding line.

AccordionItem uses the same animation. Open and close interpolate `grid-template-rows` (`0fr` / `1fr`) so the panel does not snap when the animation ends.

**EXAMPLE USAGE:**

```jsx
<Disclosure expandLabel="Show content" collapseLabel="Hide content">
  ...
</Disclosure>
```
