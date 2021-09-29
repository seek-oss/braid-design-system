---
'braid-design-system': major
---

---
updated:
  - BraidTestProvider
---

**BraidTestProvider:** Move to separate entry

By moving `BraidTestProvider` to it’s own entry, we can prevent importing all the themes at dev-time. This improves the developer experience when debugging the stylesheet that is output by the development server.

**EXAMPLE USAGE:**
```diff
- import { BraidTestProvider } from 'braid-design-system';
+ import { BraidTestProvider } from 'braid-design-system/test';
```
