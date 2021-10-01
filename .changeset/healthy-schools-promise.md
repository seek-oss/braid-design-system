---
'braid-design-system': major
---

Remove legacy seekAsia themes

Since the rebrand going live earlier this year, all consumers of `jobsDb`, `jobStreet`, `jobStreetClassic` and `seekUnifiedBeta` themes should now be using the `apac` theme in production.

**MIGRATION GUIDE**

```diff
-import jobStreet from 'braid-design-system/themes/jobStreet';
+import apac from 'braid-design-system/themes/apac';

-<BraidProvider theme={jobStreet}>
+<BraidProvider theme={apac}>
   ...
 </BraidProvider>
```
