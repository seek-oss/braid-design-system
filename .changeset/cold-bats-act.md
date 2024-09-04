---
'braid-design-system': minor
---

---
updated:
  - Tiles
---

**Tiles:** Remove `columns` limit

The `columns` prop was previously limited from 1 to 6.
With the migration to [CSS Grid] this limit no longer applies.

Note: Responsive values are also still supported, e.g. `columns={{ mobile: 1, tablet: 8 }}`.

**EXAMPLE USAGE:**
```jsx
<Tiles columns={8}>
  ...
</Tiles>
```

[CSS Grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid
