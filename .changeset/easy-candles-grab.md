---
'braid-design-system': patch
---

---
updated:
  - apac
---

**apac:** Deprecate theme in favour of `seekJobs` theme

**MIGRATION GUIDE:**
```diff
# App.tsx
- import apac from 'braid-design-system/themes/apac';
+ import seekJobs from 'braid-design-system/themes/seekJobs';

- <BraidProvider theme={apac} ...>
+ <BraidProvider theme={seekJobs} ...>
```
