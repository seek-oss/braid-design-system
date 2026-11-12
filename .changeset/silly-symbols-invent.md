---
'braid-design-system': patch
---

---
updated:
  - IconChevron
---

**IconChevron:** Rotate `right` by -90deg so it interpolates clockwise to `down`

Resting appearance is unchanged. Animating from `right` to `down` now travels 90deg clockwise instead of 270deg the long way.

**EXAMPLE USAGE:**

```jsx
<IconChevron direction="right" />
```
