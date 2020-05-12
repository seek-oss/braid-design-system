---
'braid-design-system': minor
---

Stack: Add support for Hidden stack items

You can now responsively hide stack items using the [`Hidden`](https://seek-oss.github.io/braid-design-system/components/Hidden) component, maintaining the correct spacing between all visible elements.

For example, if you wanted to hide an stack item on mobile:

```js
<Stack space="small">
  <Text>...</Text>
  <Hidden below="tablet">
    <Text>...</Text>
  </Hidden>
  <Text>...</Text>
</Stack>
```
