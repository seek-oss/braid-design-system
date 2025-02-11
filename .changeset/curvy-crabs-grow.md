---
'braid-design-system': minor
---

---
new:
  - IconBulletList
  - IconNumberedList
---

Add new icons to represent other list types.
Sits alongside `IconChecklist` which already exists.

```tsx
<IconBulletList />
<IconNumberedList />
```

As a result we are deprecated `IconList` in favour of the more specific list types. The `IconList` will be removed in a future major version.

### MIGRATION GUIDE

```diff
-<IconList />
+<IconBulletList />
```
