---
'braid-design-system': major
---

---
updated:
  - Box
---

**Box:** Remove `transform="touchable"` in favour of `transform={{ active: 'touchable' }}`

**MIGRATION GUIDE**

```diff
-<Box transform="touchable">
+<Box transform={{ active: 'touchable' }}>
```
