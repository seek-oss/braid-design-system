---
'braid-design-system': minor
---

Stack: Add support for Hidden stack items

You can now responsively hide stack items using the [`Hidden`](https://seek-oss.github.io/braid-design-system/components/Hidden) component while maintaining the correct spacing between all visible elements.

For example, if you wanted to hide a stack item on mobile:

```jsx
<Stack space="small">
  <Text>...</Text>
  <Hidden below="tablet">
    <Text>...</Text>
  </Hidden>
  <Text>...</Text>
</Stack>
```
