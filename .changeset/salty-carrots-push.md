---
'braid-design-system': major
---

---
updated:
  - themes
---

**apac:** Remove in favour of `seekJobs` theme

The previously deprecated `apac` theme has been removed.
Consumers should migrate to the `seekJobs` theme.

**MIGRATION GUIDE:**
```diff
# App.tsx
- import apac from 'braid-design-system/themes/apac';
+ import seekJobs from 'braid-design-system/themes/seekJobs';

- <BraidProvider theme={apac} ...>
+ <BraidProvider theme={seekJobs} ...>
```