---
'braid-design-system': major
---

---
updated:
  - IconList
---

**IconList:** Remove deprecated component, in favour of more specific list types: `IconBulletList` and `IconNumberedList`.


**MIGRATION GUIDE:**
  ```diff
  -<IconList />
  +<IconBulletList />
  ```