# List Migration Guide

## API Changes

- No longer uses a `Bullet` component.
- Size is now configured via the `size` prop on the `List` component.
- No longer accepts arbitrary DOM properties, e.g. `className`. Please check that everything you need is exposed via the [public API.](https://seek-oss.github.io/braid-design-system/components/List)

## Diff

```diff
-<BulletList>
-  <Bullet large>Bullet</Bullet>
-  <Bullet large>Bullet</Bullet>
-  <Bullet large>Bullet</Bullet>
-</BulletList>

+<List size="large">
+  <Text>Bullet</Text>
+  <Text>Bullet</Text>
+  <Text>Bullet</Text>
+</List>
```

## Previous Implementations

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/bullet-list)
