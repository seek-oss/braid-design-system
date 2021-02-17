---
'braid-design-system': minor
---

---
updated:
  - Card
---

**Card:** Add `radius` support

A `radius` prop can also now be specified to round the corners of the container. The supported radii are `none` (default) and `standard`.

Responsive values are supported, e.g. `['none', 'standard']`. This enables cards edges to be softened on larger screens, but squared all should they run full bleed on smaller devices.

**EXAMPLE USAGE:**
```jsx
<Card radius={["none", "standard"]}>
  ...
</Card>
```
