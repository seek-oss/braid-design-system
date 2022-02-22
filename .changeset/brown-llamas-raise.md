---
'braid-design-system': patch
---

---
updated:
  - Columns
---

**Columns:** Make child Column optional and default internally

As an optimisation to the default use of `Columns`, it is now only necessary use `Column` as a child element when customising the `width` property. If the use case is equally distributed columns, wrapping in `Columns` will now be enough.

**EXAMPLE USAGE:**
The following will now result in two columns equally distributed:
```jsx
<Columns space="medium">
  <Card>...</Card>
  <Card>...</Card>
</Columns>
```

or wrap a single child in a `Column` to customise it's width:

```jsx
<Columns space="medium">
  <Card>...</Card>
  <Card>...</Card>
  <Column width="content">
    <OverflowMenu />
  </Column>
</Columns>
```
