---
'braid-design-system': major
---

---
updated:
  - BraidTestProvider
---

**BraidTestProvider:** Move to separate entry

By moving `BraidTestProvider` to it’s own entry, we can prevent importing all the themes at dev-time. This improves the developer experience when debugging the stylesheet that is output by the development server.

**MIGRATION GUIDE**

Migration can largely be automated by running the Braid upgrade command. You must provide a glob to target your project’s source files. For example:

```
yarn braid-upgrade v31 "**/*.{ts,tsx}"
```

---

It may be necessary to manually migrate code in some cases, here are the affected use cases:

```diff
- import { BraidTestProvider } from 'braid-design-system';
+ import { BraidTestProvider } from 'braid-design-system/test';
```
