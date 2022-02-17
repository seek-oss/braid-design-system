---
'braid-design-system': minor
---

---
updated:
  - Inline
---

**Inline:** Support using span elements via component prop

Setting the `component` prop to `span` will now ensure all elements controlled by `Inline` are `span`s. This is useful when using layout components inside dom elements that should not contain `div`s from a HTML validation perspective.

**EXAMPLE USAGE:**
```jsx
<Inline space="medium" component="span">
  ...
</Inline>
```
