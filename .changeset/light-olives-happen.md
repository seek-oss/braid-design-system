---
'braid-design-system': major
---

---
updated:
  - themes
---

Remove legacy themes: `catho`, `occ` and `seekAnz`

The `seekAnz` theme facilitated consumers migrating like-for-like from `seek-style-guide`, while the `catho` and `occ` themes intended to enable a specific use case that never eventuated.

Removing these themes allows us to move faster with upcoming theme uplift work.

**MIGRATION GUIDE:**

Any remaining consumers of the `catho`, `occ` or `seekAnz` themes should migrate to the `apac` theme like so:

```diff
-import seekAnz from 'braid-design-system/themes/seekAnz';
+import apac from 'braid-design-system/themes/apac';
```
