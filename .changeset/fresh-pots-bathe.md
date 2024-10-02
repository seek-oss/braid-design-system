---
'braid-design-system': major
---

---
updated:
  - Button
  - ButtonLink
---

**Button, ButtonLink:** Remove deprecated `bleedY` prop

Remove the deprecated `bleedY` prop from the `Button` and `ButtonLink` components.
Consumers should use the `bleed` prop instead, which bleeds based on the selected `variant`.

### MIGRATION GUIDE:

```diff
 <Button
-  bleedY
+  bleed
   {...}
 >
   Button
 </Button>
```
