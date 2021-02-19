---
'braid-design-system': minor
---

---
updated:
  - Card
---

**Card:** Add `radius` support

A `radius` prop can now be specified to round the corners of the container. The supported radii are `none` (default) and `standard`.

Responsive values are supported, e.g. `['none', 'standard']`, allowing you to add rounded corners on larger screens but omit them when they run full-bleed on smaller devices.

**EXAMPLE USAGE:**
```jsx
<Card radius={["none", "standard"]}>
  ...
</Card>
```
