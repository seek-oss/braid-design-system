---
'braid-design-system': major
---

---
updated:
  - Card
---

**Card:** Remove `rounded` prop

The `rounded` prop only affected deleted themes such as `apac` and had no effect on supported themes.

**MIGRATION GUIDE:**
```diff
- <Card rounded>...</Card>
+ <Card>...</Card>
```