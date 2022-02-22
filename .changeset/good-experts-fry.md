---
'braid-design-system': minor
---

---
updated:
  - Box
  - BoxRenderer
  - atoms
---

**Box, BoxRenderer, atoms:** Add support for `inset` shorthand

Introduces the `inset` shorthand as a convenience for applying `top`, `bottom`, `left` and `right` properties.

**EXAMPLE USAGE:**
```jsx
<Box position="absolute" inset={0} />
```
or
```ts
atoms({
  position: 'absolute',
  inset: 0,
})
```
