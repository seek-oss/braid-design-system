---
'braid-design-system': major
---

---
new:
  - BraidPortal
---

Migrate to vanilla-extract

Braid now uses [vanilla-extract](http://vanilla-extract.style) rather than [treat](https://seek-oss.github.io/treat) to power its theme-based styling.

Since they use different file extensions (`.css.ts` vs `.treat.ts`), we're able to ease the migration by supporting both approaches simultaneously in the same project.

While we encourage you to write new CSS with vanilla-extract files and slowly migrate your existing treat files over time, the goal is to eventually remove treat entirely to enable further improvements to build tooling.

We've written a **[treat to vanilla-extract migration guide](https://github.com/seek-oss/braid-design-system/blob/master/docs/treat%20to%20vanilla-extract%20migration.md)** to make it easier when opting to migrate a treat file. If you have any questions or concerns, or if you need assistance with implementation or migration work, please reach out to us in the `#braid-support` channel.

**BREAKING CHANGE**

**React Portals containing Braid components/styles must use the new `BraidPortal` component**

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
