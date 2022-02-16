---
'braid-design-system': minor
---

---
updated:
  - Columns
---

**Columns:** Support using span elements via component prop

Setting the `component` prop to `span` will now ensure all elements controlled by `Columns` are `span`s. This is useful when using layout components inside dom elements that should not contain `div`s from a HTML validation perspective.

**EXAMPLE USAGE:**
```jsx
<Columns space="medium" component="span">
  ...
</Columns>
```
