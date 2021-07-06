---
'braid-design-system': minor
---

---
updated:
  - breakpoints
  - atoms
  - responsiveStyle
  - Accordion
  - Box
  - BulletList
  - Columns
  - Disclosure
  - Heading
  - Inline
  - List
  - MenuRenderer
  - Stack
  - Tabs
  - Text
  - Tiles
---

Add `wide` breakpoint of 1200px

This adds support for `wide` to the following touchpoints:
 - Responsive values, e.g.
   ```ts
   { mobile: 'small', wide: 'large' }
   ```
 - Responsive range props, e.g.
   ```tsx
   <Columns collapseBelow="wide" space={{ mobile: 'small', wide: 'large' }}>
   ```
 - The `responsiveStyle` function, e.g.
   ```ts
   export const className = style(responsiveStyle({ wide: '...' }));
   ```
 - The `breakpoints` object, which now exposes the number `1200` via `breakpoints.wide`, i.e.
   ```ts
   {
     mobile: 0,
     tablet: 740,
     desktop: 940,
     wide: 1200
   }
   ```
