---
'braid-design-system': minor
---

---
new:
  - BraidPortal
---

Add **BraidPortal** component

**React Portals containing Braid components/styles must now use the `BraidPortal` component**

CSS-based theming doesn't automatically cascade through React portals. The new [`BraidPortal`](https://seek-oss.github.io/braid-design-system/components/BraidPortal) component handles this for you by forwarding Braid's CSS variables through the portal.

```diff
-import { createPortal } from 'react-dom';
+import { BraidPortal } from 'braid-design-system';

// ...

-return open ? createPortal(<SomeComponent />) : null;
+return open ? (
+  <BraidPortal>
+    <SomeComponent />
+  </BraidPortal>
+) : null;
```
