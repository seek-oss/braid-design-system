---
'braid-design-system': patch
---

---
updated:
  - Heading
---

**Heading**: Nested icons inherit text colour

When using icons inside of a `Heading`, the default `tone` was always `neutral`, rather than inheriting the colour of the nearest component.

For example, when an icon was used inside of a `TextLink` within a `Heading`:
```jsx
<Heading level="1">
  Title with <TextLink>link <IconArrow /></TextLink>
</Heading>
// => Previously, IconArrow was the heading text colour
// `neutral`, now inherits the `link` colour.
```

or equally, when an icon was used inside of a `Secondary` component within a `Heading`:
```jsx
<Heading level="1">
  Title with <Secondary>secondary <IconArrow /></Secondary>
</Heading>
// => Previously, IconArrow was the heading text colour
// `neutral`, now inherits the `secondary` colour.
```
