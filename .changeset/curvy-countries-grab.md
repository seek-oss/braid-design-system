---
'braid-design-system': major
---

---
updated:
  - Text
  - Heading
---

**Text, Heading:** Remove deprecated `truncate` prop

Remove the deprecated `truncate` prop in favour of the `maxLines` prop which accepts a number of lines to truncate the text to.

### MIGRATION GUIDE:

```diff
 <Text
-   truncate
+   maxLines={1}
 />
```
