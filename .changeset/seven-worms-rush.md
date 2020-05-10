---
'braid-design-system': patch
---

Stack, Inline, Tiles: Flatten fragments when provided as direct children

The following patterns should now work as you might have previously expected:

```jsx
<Stack space="small">
  <React.Fragment>
    <Text>...</Text>
    <Text>...</Text>
  </React.Fragment>
  <Text>...</Text>
</Stack>
```

```jsx
<Inline space="small">
  <React.Fragment>
    <Badge>...</Badge>
    <Badge>...</Badge>
  </React.Fragment>
  <Badge>...</Badge>
</Inline>
```

```jsx
<Tiles space="small" columns={3}>
  <React.Fragment>
    <Card>...</Card>
    <Card>...</Card>
  </React.Fragment>
  <Card>...</Card>
</Tiles>
```
