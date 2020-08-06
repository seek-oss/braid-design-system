---
'braid-design-system': minor
---

Add `List` component

`List` serves as a replacement for the `BulletList` and `Bullet` components which adds the following improvements:

- Support for numbers and alpha characters as bullets
- Support for custom start positions in number/alpha lists
- Rich content support, e.g. list items with multiple paragraphs, nested lists, etc.

_Note: The `BulletList` and `Bullet` components have been marked as deprecated and will be removed in an upcoming major release. However, there is no immediate need to migrate._

**MIGRATION GUIDE**

This isn't mandatory yet, but if you want to migrate from `BulletList` to `List`, you can simply replace `BulletList` with `List`, and `Bullet` with `Text`:

```diff
-<BulletList>
-  <Bullet>...</Bullet>
-  <Bullet>...</Bullet>
-  <Bullet>...</Bullet>
-</BulletList>

+<List>
+  <Text>...</Text>
+  <Text>...</Text>
+  <Text>...</Text>
+</List>
```
