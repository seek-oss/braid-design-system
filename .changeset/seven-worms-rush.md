---
'braid-design-system': major
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

**BREAKING CHANGE**

While _highly_ unlikely, if you were using a fragment to group unspaced sibling nodes within a stack, you'll need to replace it with a Box, for example:

```diff
<Stack space="small">
  ...
-  <React.Fragment>
+  <Box>
    <Box>...</Box>
    <Box>...</Box>
-  <React.Fragment>
+  </Box>
  ...
</Stack>
```
