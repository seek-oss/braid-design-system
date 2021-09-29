---
'braid-design-system': major
---

**BulletList** Remove deprecated component

**MIGRATION GUIDE**

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
