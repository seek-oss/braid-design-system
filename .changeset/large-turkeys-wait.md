---
'braid-design-system': major
---

---
updated:
  - ButtonIcon
---

**ButtonIcon:** Remove deprecated `secondary` tone

Remove the deprecated `secondary` tone from `ButtonIcon` in favour of providing the `tone` directly to the `Icon` itself.

### MIGRATION GUIDE:

```diff
 <ButtonIcon
-  tone="secondary"
-  icon={<IconAdd />}
+  icon={<IconAdd tone="secondary" />}
 />
```
