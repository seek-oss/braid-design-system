---
'braid-design-system': minor
---

---
updated:
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

Support object notation for responsive props

Responsive prop values can now be written as objects with named breakpoints, which is now the recommended notation.

```ts
{ mobile: 'small', tablet: 'medium', desktop: 'large' }
```

This also means that breakpoints can be skipped.

```ts
{ mobile: 'small', desktop: 'large' }
```
