---
'braid-design-system': major
---

---
updated:
  - Rating
---

**Rating:** Remove deprecated `showTextRating` prop

Remove the deprecated `showTextRating` prop in favour of `variant="starsOnly"`.

### MIGRATION GUIDE:

```diff
 <Rating
   rating={3.7}
-  showTextRating={false}
+  variant="starsOnly"
 />
```
